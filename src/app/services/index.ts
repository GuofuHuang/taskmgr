import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { ProjectService } from './project.service';
import { QuoteService } from './quote.service';
import { TaskListService } from './task-list.service';
import { TaskService } from './task.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { MyCalService } from './my-cal.service';
import { TaskHistoryService } from './task-history.service';
import { TaskFilterService } from './task-filter.service';
import { LocalStorageService } from './local-storage.service';
import { JWTTokenService } from './jwt-token.service';
export {
  AuthGuardService,
  AuthService,
  ProjectService,
  QuoteService,
  TaskListService,
  TaskService,
  TaskFilterService,
  TaskHistoryService,
  UserService,
  MyCalService,
  LocalStorageService,
  JWTTokenService
};

@NgModule()
export class ServicesModule {
  static forRoot(): any {
    return {
      ngModule: ServicesModule,
      providers: [
        AuthGuardService,
        AuthService,
        ProjectService,
        QuoteService,
        TaskListService,
        TaskService,
        TaskFilterService,
        TaskHistoryService,
        UserService,
        MyCalService,
      ]
    };
  }
}
