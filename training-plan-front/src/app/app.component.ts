import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InjuryListComponent} from '../injury-list/injury-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InjuryListComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'training-plan-front';
}
