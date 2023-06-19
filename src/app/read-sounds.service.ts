import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReadSoundsService {
  constructor(private http: HttpClient) {}


  // Function to read sound files from the server
  readSoundFiles() {
    return this.http.get<string[]>('./sounds');
  }
}
