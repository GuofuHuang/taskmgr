import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { TaskListComponent } from './components/task-list';
import { TaskItemComponent } from './components/task-item';
import { TaskRoutingModule } from './task-routing.module';
import { TaskHomeComponent } from './containers/task-home';
import { TaskListHeaderComponent } from './components/task-list-header';
import { NewTaskComponent } from './components/new-task';
import { NewTaskListComponent } from './components/new-task-list';
import { CopyTaskComponent } from './components/copy-task';
import { QuickTaskComponent } from './components/quick-task';
import { TaskHistoryItemComponent } from './components/task-history-item';
import { TaskFilterNavComponent } from './components/task-filter-nav';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  imports: [
    SharedModule,
    MatDatepickerModule,
    TaskRoutingModule
  ],
  declarations: [
    TaskListComponent,
    TaskItemComponent,
    TaskHomeComponent,
    TaskListHeaderComponent,
    NewTaskComponent,
    NewTaskListComponent,
    CopyTaskComponent,
    QuickTaskComponent,
    TaskHistoryItemComponent,
    TaskFilterNavComponent
  ],
  entryComponents: [
    NewTaskComponent,
    NewTaskListComponent,
    CopyTaskComponent
  ]
})
export class TaskModule {
}
