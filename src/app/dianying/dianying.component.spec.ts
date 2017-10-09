import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DianyingComponent } from './dianying.component';

describe('DianyingComponent', () => {
  let component: DianyingComponent;
  let fixture: ComponentFixture<DianyingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DianyingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DianyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
