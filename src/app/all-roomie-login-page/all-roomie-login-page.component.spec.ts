import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRoomieLoginPageComponent } from './all-roomie-login-page.component';

describe('AllRoomieLoginPageComponent', () => {
  let component: AllRoomieLoginPageComponent;
  let fixture: ComponentFixture<AllRoomieLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRoomieLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRoomieLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
