import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditShowComponent } from './reddit-show.component';

describe('RedditShowComponent', () => {
  let component: RedditShowComponent;
  let fixture: ComponentFixture<RedditShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
