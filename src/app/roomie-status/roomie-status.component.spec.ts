import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomieStatusComponent } from './roomie-status.component';

describe('RoomieStatusComponent', () => {
  let component: RoomieStatusComponent;
  let fixture: ComponentFixture<RoomieStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomieStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomieStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
