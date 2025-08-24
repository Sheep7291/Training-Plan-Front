import {Component, inject, Inject, OnInit} from '@angular/core';
import {TrainingPlanApiService} from '../training-plan-api.service';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {LocalStorageService} from '../local-storage.service';

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
  localStorageService = inject(LocalStorageService);
  router = inject(Router)
  isTrainer: boolean = false;
  isAdmin: boolean = false;
  trainingPlanApi = inject(TrainingPlanApiService);


  ngOnInit() {
    if(this.localStorageService.getItemsLenght()<=0){
      this.router.navigate(['/login'])
    }
    this.trainingPlanApi.setUserRoles()
    if(this.trainingPlanApi.getUserRoles().includes("TRAINER")){
      this.isTrainer = true;
    }
    if(this.trainingPlanApi.getUserRoles().includes("ADMIN")){
      this.isTrainer = true;
    }
  }

  logout(){
    this.trainingPlanApi.logout()
  }


}
