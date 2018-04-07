import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRoomieManagementPageComponent } from './all-roomie-management-page.component';

describe('AllRoomieManagementPageComponent', () => {
  let component: AllRoomieManagementPageComponent;
  let fixture: ComponentFixture<AllRoomieManagementPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRoomieManagementPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRoomieManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
