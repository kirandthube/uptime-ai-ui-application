import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitLayoutComponent } from './git-layout.component';

describe('GitLayoutComponent', () => {
  let component: GitLayoutComponent;
  let fixture: ComponentFixture<GitLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
