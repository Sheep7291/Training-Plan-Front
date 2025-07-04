import {Component, inject, OnInit} from '@angular/core';
import {LocalStorageService} from '../local-storage.service';
import {Router} from '@angular/router';
import {TrainingPlanApiService} from '../training-plan-api.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  standalone: true,
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage='';

  constructor(private router: Router, private traininingPlanApi: TrainingPlanApiService, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      username:['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    })
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

  onSubmit(){
    if(this.registerForm.valid){
      this.traininingPlanApi
        .register(this.registerForm.value.username, this.registerForm.value.password)
        .subscribe({
        })
    } else{
      this.errorMessage = 'Please fill in all the required fields.';
    }


  }



}
