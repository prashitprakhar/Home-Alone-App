import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRoomieComponent } from './manage-roomie.component';

describe('ManageRoomieComponent', () => {
  let component: ManageRoomieComponent;
  let fixture: ComponentFixture<ManageRoomieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRoomieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRoomieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
