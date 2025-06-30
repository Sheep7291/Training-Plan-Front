import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InjuryListComponent} from '../injury-list/injury-list.component';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InjuryListComponent, LoginComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'training-plan-front';
}
