import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {LocalStorageService} from '../local-storage.service';
import {routes} from '../app/app.routes';

@Component({
  selector: 'app-landing-page',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './landing-page.component.html',
  standalone: true,
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(private router: Router, private localStorageService: LocalStorageService) {
  }

    protected readonly onclick = onclick;

    clickLogin(): void {
      if (this.localStorageService.getItemsLenght()>0){
        this.router.navigate(['home'])
      }
      else{
        this.router.navigate(['login'])
      }

    }


  clickRegister() {
      if (this.localStorageService.getItemsLenght()>0){
      this.router.navigate(['home'])
        }
      else{
        this.router.navigate(['register'])
      }
  }
}
