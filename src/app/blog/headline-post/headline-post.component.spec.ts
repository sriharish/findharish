import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlinePostComponent } from './headline-post.component';

describe('HeadlinePostComponent', () => {
  let component: HeadlinePostComponent;
  let fixture: ComponentFixture<HeadlinePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlinePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlinePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
