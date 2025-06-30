import {Component, Inject, OnInit} from '@angular/core';
import {TrainingPlanApiService} from '../training-plan-api.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{



  constructor(private trainingPlanApi: TrainingPlanApiService) {
  }

  ngOnInit() {
    this.trainingPlanApi.setUserRoles()
  }


}
