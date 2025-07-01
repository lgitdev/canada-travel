import { Routes } from '@angular/router';
import { MapPage } from './map/map-page/map-page';
import { PlannerPage } from './planner/planner-page/planner-page';
import { BudgetPage } from './budget/budget-page/budget-page';
import { StatsPage } from './stats/stats-page/stats-page';

export const routes: Routes = [
  { path: '', redirectTo: 'map', pathMatch: 'full' },
  { path: 'map', component: MapPage },
  { path: 'planner', component: PlannerPage },
  { path: 'budget', component: BudgetPage },
  { path: 'stats', component: StatsPage },
];
