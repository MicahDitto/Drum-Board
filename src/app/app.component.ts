import { Component } from '@angular/core';
import { ReadSoundsService } from './read-sounds.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drum-kit-project';

  keys = [
    { key: 'q', soundForKey: 'sounds/8 Bits/Boom1.wav' },
    { key: 'w', soundForKey: 'sounds/8 Bits/Clap.wav' },
    { key: 'e', soundForKey: 'sounds/8 Bits/Click1.wav' },
    { key: 'i', soundForKey: 'sounds/808/Hihat_open_2.wav' },
    { key: 'o', soundForKey: 'sounds/808/Hihat1_closed.wav' },
    { key: 'p', soundForKey: 'sounds/808/Kick.wav' },
    { key: 'a', soundForKey: 'sounds/808/Snare.wav' },
    { key: 's', soundForKey: 'sounds/Claps/Clap1.WAV' },
    { key: 'd', soundForKey: 'sounds/Crash/Crash_1.WAV' },
    { key: 'j', soundForKey: 'sounds/Hihats/Hihat_1_closed.wav' },
    { key: 'k', soundForKey: 'sounds/Kicks/Hard_Kick_1.WAV' },
    { key: 'l', soundForKey: 'sounds/Percussion/Conga_1.wav' },
    { key: 'z', soundForKey: 'sounds/Percussion/FX1.wav' },
    { key: 'x', soundForKey: 'sounds/tom-1.mp3' },
    { key: 'c', soundForKey: 'sounds/tom-2.mp3' },
    { key: 'n', soundForKey: 'sounds/tom-3.mp3' },
    { key: 'm', soundForKey: 'sounds/tom-4.mp3' },
    { key: ',', soundForKey: 'sounds/Percussion/Perc10.wav' }
  ];

  constructor(private http: HttpClient, private ReadSoundsService: ReadSoundsService) {

    const soundFiles = ReadSoundsService.readSoundFiles();
    console.log(soundFiles);
  }

// // App logic:
// //Detecting Button Press
// numDrumBtns = document.querySelectorAll('.drum').length;
// for (i = 0; i < numDrumBtns; i++) {
//   document.querySelectorAll('.drum')[i].addEventListener('click', btnClicked);
// }

// function btnClicked(this: any) {
//   let btnInnerHTML = this.innerHTML;
//   makeSound(btnInnerHTML);

//   btnAnimation(btnInnerHTML);
//   // alert("Button clicked!");
//   //   this.style.color = "white";
// }

// document.addEventListener('keydown', function(event) {
//   let index = keys.findIndex(item => item.key === event.key);

//   // If the key exists in the array, update the sound
//   if (index !== -1) {
//     makeSound(event.key);
//     btnAnimation(event.key);
//   } else {
//     console.log('Key not found in the soundboard.');
//   }
// });

// function changeSound(key: string, newSound: string) {
//   // Find the index of the key in the soundboardArray
//   let index = keys.findIndex(item => item.key === key);

//   // If the key exists in the array, update the sound
//   if (index !== -1) {
//     keys[index].soundForKey = new Audio(newSound);
//     console.log('Sound changed successfully!');
//   } else {
//     console.log('Key not found in the soundboard.');
//   }
// }

// function makeSound(key) {
//   // Find the sound file associated with the key
//   let sound = keys.find(item => item.key === key);

//   // If the key exists in the array, play the sound
//   if (sound) {
//     let audio = new Audio(sound.soundForKey);
//     audio.play();
//   } else {
//     console.log('Key not found in the soundboard.');
//   }
// }

// function btnAnimation(currentKey) {
//   let activeButton = document.querySelector('.' + currentKey);
//   // activeButton.setAttribute("class", ".pressed");
//   activeButton.classList.add('pressed');
//   setTimeout(function() {
//     activeButton.classList.remove('pressed');
//   }, 100);
// }



}

