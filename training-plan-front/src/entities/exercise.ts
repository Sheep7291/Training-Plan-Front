export interface Exercise {
  id: number;
  trainingPlanEntityId: number;
  nameOfExercise: string;
  rangeOfReps: string;
  sets: number
  breakBetweenSets: number;
  urlToExercise: string;
  addedBy: string;
}
