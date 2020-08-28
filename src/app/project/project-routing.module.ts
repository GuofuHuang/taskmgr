import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectListComponent} from './containers/project-list';

const routes: Routes = [
  {path: '', component: ProjectListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

// @ts-ignore
export class ProjectRoutingModule {
}
