import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuerAdminComponent } from './usuer-admin.component';

describe('UsuerAdminComponent', () => {
  let component: UsuerAdminComponent;
  let fixture: ComponentFixture<UsuerAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuerAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
