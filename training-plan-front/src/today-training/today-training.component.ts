import {Component, inject} from '@angular/core';
import {TrainingPlanApiService} from '../training-plan-api.service';
import {TrainingPlan} from '../entities/training-plan';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-today-training',
  imports: [],
  templateUrl: './today-training.component.html',
  standalone: true,
  styleUrl: './today-training.component.scss'
})
export class TodayTrainingComponent {
  trainingPlanApi = inject(TrainingPlanApiService);
  todayTrainingPlan: Observable<TrainingPlan>;

  constructor() {
    this.todayTrainingPlan = this.trainingPlanApi.getTodayTrainingPlan()
  }
}
