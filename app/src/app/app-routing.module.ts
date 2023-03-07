import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowseMusicsComponent} from "./browse-musics/browse-musics.component";
import {NewMusicComponent} from "./new-music/new-music.component";
import {DetailMusicComponent} from "./detail-music/detail-music.component";
import {RandomMusicComponent} from "./random-music/random-music.component";

const routes: Routes = [
  {
    path: 'music',
    component: BrowseMusicsComponent
  },
  {
    path: 'music/:id',
    component: DetailMusicComponent
  },
  {
    path: 'newMusic',
    component: NewMusicComponent
  },
  {
    path: 'editMusic/:id',
    component: NewMusicComponent
  },
  {
    path: 'randomMusic',
    component: RandomMusicComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
