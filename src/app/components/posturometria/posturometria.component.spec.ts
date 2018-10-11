import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosturometriaComponent } from './posturometria.component';

describe('PosturometriaComponent', () => {
  let component: PosturometriaComponent;
  let fixture: ComponentFixture<PosturometriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosturometriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosturometriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
