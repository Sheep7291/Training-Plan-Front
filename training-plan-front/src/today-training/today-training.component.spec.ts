import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayTrainingComponent } from './today-training.component';

describe('TodayTrainingComponent', () => {
  let component: TodayTrainingComponent;
  let fixture: ComponentFixture<TodayTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
