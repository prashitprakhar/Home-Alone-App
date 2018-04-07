import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRoomieHomePageComponent } from './all-roomie-home-page.component';

describe('AllRoomieHomePageComponent', () => {
  let component: AllRoomieHomePageComponent;
  let fixture: ComponentFixture<AllRoomieHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRoomieHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRoomieHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
