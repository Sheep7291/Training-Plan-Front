import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {TrainingPlanApiService} from '../training-plan-api.service';
import {Subscription} from 'rxjs';
import {Injury} from '../entities/injury';
import {AsyncPipe, DatePipe} from '@angular/common';

@Component({
  selector: 'app-user-injury-list',
  imports: [
    AsyncPipe,
    DatePipe
  ],
  templateUrl: './user-injury-list.component.html',
  standalone: true,
  styleUrl: './user-injury-list.component.scss'
})
export class UserInjuryListComponent implements OnInit, OnDestroy {
  private trainingPlanService = inject(TrainingPlanApiService)

  sub!: Subscription;
  injuries: Injury[] = [];

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.trainingPlanService.getInjuries().subscribe(
      injuries => this.injuries = injuries
    );
  }

}
