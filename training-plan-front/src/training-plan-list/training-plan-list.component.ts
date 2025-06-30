import {Component, inject} from '@angular/core';
import {TrainingPlanApiService} from '../training-plan-api.service';
import {TrainingPlan} from '../entities/training-plan';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-training-plan-list',
  imports: [],
  templateUrl: './training-plan-list.component.html',
  standalone: true,
  styleUrl: './training-plan-list.component.scss'
})
export class TrainingPlanListComponent {

  private trainingPlanService = inject(TrainingPlanApiService)

  trainingPlans: TrainingPlan[] = [];

  trainingPlans$!:Observable<TrainingPlan[]>;



}
