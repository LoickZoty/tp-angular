import {Component, Input, OnInit} from '@angular/core';
import {Music, MusicService} from "../music.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail-music',
  templateUrl: './detail-music.component.html',
  styleUrls: ['./detail-music.component.scss']
})
export class DetailMusicComponent implements OnInit{
  @Input() music : Music = <Music>{};

  public id : number | undefined;

  constructor(private musicService : MusicService, private route : ActivatedRoute, private router : Router) {}

  getMusic(id : number) : void {
    this.musicService.getMusic(id)
      .subscribe(music => {
        this.music = music;
      });
  }

  editMusic(id: number) {
    this.router.navigate(['/editMusic', id]);
  }
  deleteMusic(id: number) {
    this.musicService.deleteRecipe(id)
      .subscribe( () => {
        this.router.navigate(['/music']);
      })
  }
  ngOnInit() : void{
    if(this.music.id == null)
    {
      this.id = parseInt(this.route.snapshot.paramMap.get('id') ?? '');
      this.getMusic(this.id);
    }
  }
}
