import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../services';
import {PageNotFoundComponent} from './containers/page-not-found';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'projects',
    loadChildren: () => import('../project').then(m => m.ProjectModule),
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  {
    path: 'tasklists/:id',
    loadChildren: () => import('../task').then(m => m.TaskModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'mycal/:view',
    loadChildren: () => import('../my-calendar').then(m => m.MyCalendarModule),
    canActivate: [AuthGuardService]
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
