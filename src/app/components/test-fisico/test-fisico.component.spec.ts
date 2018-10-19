import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFisicoComponent } from './test-fisico.component';

describe('TestFisicoComponent', () => {
  let component: TestFisicoComponent;
  let fixture: ComponentFixture<TestFisicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFisicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFisicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
