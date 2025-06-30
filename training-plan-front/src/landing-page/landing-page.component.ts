import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {LocalStorageService} from '../local-storage.service';
import {routes} from '../app/app.routes';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.component.html',
  standalone: true,
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(private router: Router, private localStorageService: LocalStorageService) {
  }

    protected readonly onclick = onclick;

    clickLogin(): void {
      if (localStorage.length>0){
        this.router.navigate(['home'])
      }
      else{
        this.router.navigate(['login'])
      }

    }
}
