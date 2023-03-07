import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Music, MusicService} from "../music.service";

@Component({
  selector: 'app-random-music',
  templateUrl: './random-music.component.html',
  styleUrls: ['./random-music.component.scss']
})

export class RandomMusicComponent implements OnInit {
  music : Music = <Music>{};

  constructor(private recipeService : MusicService) {}

  getMusicRandom() : void {
    this.recipeService.getMusicRandom()
      .subscribe(music => {
        this.music = music
        console.log("ouii???")
        console.log(this.music)
      });
  }

  ngOnInit() : void {
    this.getMusicRandom();
  }
}
