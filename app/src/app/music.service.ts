import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams} from "@angular/common/http";

class User {
}

type Music = {
  id: number,
  title: string,
  description: string,
  album: string,
  artist: string,
  duration: string,
  date: Date,
  styles: string[],
  picture: string,
}
@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private musicUrl = 'http://localhost:3000/musics';

  constructor(private http : HttpClient) { }

  getMusics() : Observable<Music[]>{
    return this.http.get<Music[]>(this.musicUrl);
  }

  getMusic(id : number) : Observable<Music>{
    return this.http.get<Music>(`${this.musicUrl}/${id}`);
  }

  getMusicRandom() : Observable<Music>{
    return this.http.get<Music>(`${this.musicUrl}/random`);
  }

  createRecipe(music: Music) {
    return this.http.post<Music>(this.musicUrl, music, {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }
  updateRecipe(id: number, music: Music) {
    return this.http.put<Music>(`${this.musicUrl}/${id}`, music, {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }
  deleteRecipe(id: number) {
    return this.http.delete<Music>(`${this.musicUrl}/${id}`);
  }
}

export { Music };
