import {Component, inject, OnInit} from '@angular/core';
import {LocalStorageService} from '../local-storage.service';
import {Router} from '@angular/router';
import {TrainingPlanApiService} from '../training-plan-api.service';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  standalone: true,
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router, private traininingPlanApi: TrainingPlanApiService) {
  }
  localStorageService = inject(LocalStorageService)
  ngOnInit() {
    if(this.localStorageService.getItemsLenght()>0){
      this.router.navigate(['home']);
    }

  }

  register(username:string, password:string){
    this.traininingPlanApi.register(username, password);
  }



}
