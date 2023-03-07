import {Component, Input, OnInit} from '@angular/core';
import {Music, MusicService} from "../music.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-music',
  templateUrl: './new-music.component.html',
  styleUrls: ['./new-music.component.scss']
})
export class NewMusicComponent implements OnInit{
  music: Music = {
    id: 0,
    title: "",
    description: "",
    album: "",
    artist: "",
    duration: "",
    date: new Date(),
    style: [],
    picture: ""
  };
  id: number | null = null;
  buttonTitle: string = "Enregistrer";

  styleOptionsValue = [
    "Alternative Rock",
    "Rock",
    "Hard Rock",
    "Blues Rock",
    "Hip-Hop",
    "Rap"
  ]

  save(): any {
    this.fetchImage()
    if(this.id == null) {
      this.musicService.createRecipe(this.music)
        .subscribe(
      (recipe) => this.router.navigate(['/music', recipe.id])
        );
    }else{
      this.musicService.updateRecipe(this.music.id, this.music)
        .subscribe(
          (recipe) => this.router.navigate(['/music', recipe.id])
        )
    }
  }
  getRecipe(id : number) : void {
    this.musicService.getMusic(id)
      .subscribe(music => {
        this.music = music;
      });
  }

  fetchImage() {
    fetch(this.music.picture)
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result!.toString().split(',')[1];
          this.music.picture = base64data;
        };
      });
  }

  constructor(private musicService : MusicService, private router: Router, private route : ActivatedRoute) {}

  ngOnInit() : void{
    if(this.route.snapshot.paramMap.get('id') != null)
    {
      this.id = parseInt(this.route.snapshot.paramMap.get('id') ?? '');
      this.getRecipe(this.id);
    }
  }
}
