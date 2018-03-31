import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRoomieMessagesComponent } from './all-roomie-messages.component';

describe('AllRoomieMessagesComponent', () => {
  let component: AllRoomieMessagesComponent;
  let fixture: ComponentFixture<AllRoomieMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRoomieMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRoomieMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
