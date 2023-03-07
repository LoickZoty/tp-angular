import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMusicComponent } from './detail-music.component';

describe('RecipeDetailComponent', () => {
  let component: DetailMusicComponent;
  let fixture: ComponentFixture<DetailMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMusicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
