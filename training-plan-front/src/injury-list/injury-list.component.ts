import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Injury} from '../entities/injury';
import {AsyncPipe, DatePipe} from '@angular/common';
import {Observable, of, Subscription} from 'rxjs';
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
export class InjuryListComponent implements OnDestroy {
  private trainingPlanService = inject(TrainingPlanApiService);

  sub!: Subscription;
  injuries: Injury[] = [];

  search(username:string): void{
    this.sub = this.trainingPlanService.getInjuriesByUsername(username).subscribe(injuries => this.injuries = injuries);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }













}
