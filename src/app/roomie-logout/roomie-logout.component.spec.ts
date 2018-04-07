import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomieLogoutComponent } from './roomie-logout.component';

describe('RoomieLogoutComponent', () => {
  let component: RoomieLogoutComponent;
  let fixture: ComponentFixture<RoomieLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomieLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomieLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
