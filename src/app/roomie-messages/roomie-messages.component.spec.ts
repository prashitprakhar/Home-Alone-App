import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomieMessagesComponent } from './roomie-messages.component';

describe('RoomieMessagesComponent', () => {
  let component: RoomieMessagesComponent;
  let fixture: ComponentFixture<RoomieMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomieMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomieMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
