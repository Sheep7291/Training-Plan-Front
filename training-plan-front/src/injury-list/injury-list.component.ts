import {Component, inject} from '@angular/core';
import {Injury} from '../entities/injury';
import {AsyncPipe, DatePipe} from '@angular/common';
import {Observable, of} from 'rxjs';
import {TrainingPlanApiService} from '../training-plan-api.service';


@Component({
  selector: 'app-injury-list',
  imports: [
    AsyncPipe,
    DatePipe
  ],
  templateUrl: './injury-list.component.html',
  standalone: true,
  styleUrl: './injury-list.component.scss'
})
export class InjuryListComponent {

  injuries: Injury[] =[
    {username: 'Sheep', nameOfInjury: 'test injury', timeWhenInjuryHappen: new Date(Date.now()), source: 'trainig-plan'},
    {username: 'Sheep2', nameOfInjury: 'test injury2', timeWhenInjuryHappen: new Date(Date.now()), source: 'trainig-plan2'},
  ]

injuries$!: Observable<Injury[]>;

  private trainingPlanService = inject(TrainingPlanApiService);

downloadInjuries(){
this.injuries$ = this.trainingPlanService.getInjuries();
}
  constructor() {
  this.downloadInjuries()
  }

}
