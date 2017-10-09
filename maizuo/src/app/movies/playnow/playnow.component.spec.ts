import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaynowComponent } from './playnow.component';

describe('PlaynowComponent', () => {
  let component: PlaynowComponent;
  let fixture: ComponentFixture<PlaynowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaynowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaynowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
