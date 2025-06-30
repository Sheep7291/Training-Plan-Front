import {Exercise} from './exercise';

export interface TrainingPlan {
  id: number;
  trainingDate: Date;
  exercises:Array<Exercise>;
  statusOfTraining: string;
  createdBy: string;
}
