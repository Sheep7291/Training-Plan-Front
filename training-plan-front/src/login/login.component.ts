import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {TrainingPlanApiService} from '../training-plan-api.service';
import {Router} from '@angular/router';
import {LocalStorageService} from '../local-storage.service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule, ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  trainingPlanApi = inject(TrainingPlanApiService)
  errorMessage='';
  localStorageService = inject(LocalStorageService);
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username:['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.trainingPlanApi
        .login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe({
          next: (response: any) => {
            if (response === true){
              this.trainingPlanApi.addAuthorizationheader()
              this.router.navigate(['/home'])
            }

            this.errorMessage = ""
          }
        })
    } else{
      this.errorMessage = 'Please fill in all the required fields.';
    }


  }

  ngOnInit() {
    if(this.localStorageService.getItemsLenght()>0){
      this.router.navigate(['/home'])
    }
  }


}
