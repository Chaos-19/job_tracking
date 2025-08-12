import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Kanban } from './features/kanban/kanban';
import { Profile } from './features/profile/profile';
import { Settings } from './features/settings/settings';
import { AddJob } from './features/add-job/add-job';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    title: 'DashBoard',
  },
  {
    path: 'kanban',
    component: Kanban,
    title: 'Kanban',
  },
  {
    path: 'add-job',
    component: AddJob,
    title: 'Kanban',
  },
  {
    path: 'profile',
    component: Profile,
    title: 'DashBoard',
  },
  {
    path: 'settings',
    component: Settings,
    title: 'DashBoard',
  },
];
