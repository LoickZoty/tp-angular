import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Music, MusicService} from "../music.service";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-browse-musics',
  templateUrl: './browse-musics.component.html',
  styleUrls: ['./browse-musics.component.scss']
})

export class BrowseMusicsComponent implements OnInit {
  public musics: Music[] = [];

  constructor(private recipeService : MusicService) {}

  getRecipes() : void {
    this.recipeService.getMusics()
      .subscribe(recipes => this.musics = recipes);
  }

  ngOnInit() : void {
    this.getRecipes();
  }

}
