import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionsRadarComponent } from './contributions-radar.component';

describe('ContributionsRadarComponent', () => {
  let component: ContributionsRadarComponent;
  let fixture: ComponentFixture<ContributionsRadarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributionsRadarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributionsRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
