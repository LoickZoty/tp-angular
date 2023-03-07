import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseMusicsComponent } from './browse-musics.component';

describe('BrowseRecipesComponent', () => {
  let component: BrowseMusicsComponent;
  let fixture: ComponentFixture<BrowseMusicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseMusicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseMusicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
