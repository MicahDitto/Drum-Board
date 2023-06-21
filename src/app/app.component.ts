import { Component, OnInit } from '@angular/core';
import { ReadSoundsService } from './read-sounds.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'drum-kit-project';

  keys = [
    { key: 'q', soundForKey: '../sounds/8 Bits/Boom1.wav' },
    { key: 'w', soundForKey: '../sounds/8 Bits/Clap.wav' },
    { key: 'e', soundForKey: '../sounds/8 Bits/Click1.wav' },
    { key: 'i', soundForKey: '../sounds/808/Hihat_open_2.wav' },
    { key: 'o', soundForKey: '../sounds/808/Hihat1_closed.wav' },
    { key: 'p', soundForKey: '../sounds/808/Kick.wav' },
    { key: 'a', soundForKey: '../sounds/808/Snare.wav' },
    { key: 's', soundForKey: '../sounds/Claps/Clap1.WAV' },
    { key: 'd', soundForKey: '../sounds/Crash/Crash_1.WAV' },
    { key: 'j', soundForKey: '../sounds/Hihats/Hihat_1_closed.wav' },
    { key: 'k', soundForKey: '../sounds/Kicks/Hard_Kick_1.WAV' },
    { key: 'l', soundForKey: '../sounds/Percussion/Conga_1.wav' },
    { key: 'z', soundForKey: '../sounds/Percussion/FX1.wav' },
    { key: 'x', soundForKey: '../sounds/tom-1.mp3' },
    { key: 'c', soundForKey: '../sounds/tom-2.mp3' },
    { key: 'n', soundForKey: '../sounds/tom-3.mp3' },
    { key: 'm', soundForKey: '../sounds/tom-4.mp3' },
    { key: ',', soundForKey: '../sounds/Percussion/Perc10.wav' }
  ];

  constructor(
    private http: HttpClient,
    private ReadSoundsService: ReadSoundsService
  ) {
    const soundFiles = ReadSoundsService.readSoundFiles();
    console.log(soundFiles);
  }

  // // OLD
  // ngOnInit() {
  //   // Detecting Button Press
  //   const numDrumBtns: number = document.querySelectorAll('.drum').length;
  //   for (let i = 0; i < numDrumBtns; i++) {
  //     document
  //       .querySelectorAll('.drum')
  //       [i].addEventListener('click', this.btnClicked);
  //   }
  // }

// TODO: change to Angular data binding and Click events

  ngOnInit() {
    // Detecting Button Press
    const numDrumBtns: number = document.querySelectorAll('.drum').length;
    for (let i = 0; i < numDrumBtns; i++) {
      document
        .querySelectorAll('.drum')
        [i].addEventListener('click', (event) => this.btnClicked(event));
    }
  }

  btnClicked(event: Event) {
    let btn = event.target as HTMLElement;
    let btnInnerHTML = btn.innerHTML;
    this.makeSound(btnInnerHTML);
    this.btnAnimation(btnInnerHTML);
  }
  
  // // OLD
  // btnClicked(this: any) {
  //   let btnInnerHTML = this.innerHTML;
  //   this.makeSound(btnInnerHTML);

  //   this.btnAnimation(btnInnerHTML);
  //   // alert("Button clicked!");
  //   //   this.style.color = "white";
  // }

  changeSound(key: string, newSound: string) {
    // Find the index of the key in the soundboardArray
    let index = this.keys.findIndex(item => item.key === key);

    // If the key exists in the array, update the sound
    if (index !== -1) {
      let newAudio = new Audio(newSound);
      // this.keys[index].soundForKey = newAudio;
      console.log('Sound changed successfully!');
    } else {
      console.log('Key not found in the soundboard.');
    }
  }

  makeSound(key: string) {
    // Find the sound file associated with the key
    let sound = this.keys.find(item => item.key === key);

    // If the key exists in the array, play the sound
    if (sound) {
      let audio = new Audio();
      // let audio = new Audio(sound.soundForKey);
      // audio.src = sound.soundForKey;
      audio.src = "/Users/micahdittmar/Desktop/Website Experimenting/Udemy Website Files/Drum Board/drum-kit-project/src/sounds/Percussion/Conga_2.wav";
      audio.load();
      audio.play();
    } else {
      console.log('Key not found in the soundboard.');
    }
  }

  btnAnimation(currentKey: string) {
    let activeButton = document.querySelector('.' + currentKey) as HTMLElement;
    // activeButton.setAttribute("class", ".pressed");
    if (activeButton) {
      activeButton.classList.add('pressed');
      setTimeout(function() {
        activeButton.classList.remove('pressed');
      }, 100);
    }
  }
}
