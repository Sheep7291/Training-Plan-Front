import {Component, Inject, OnInit} from '@angular/core';
import {TrainingPlanApiService} from '../training-plan-api.service';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
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

  logout(){
    this.trainingPlanApi.logout()
  }


}
