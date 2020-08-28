import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../domain';
import { CalendarEvent } from 'angular-calendar';
import {startOfDay, endOfDay, parseISO} from 'date-fns';
import {map, tap} from 'rxjs/operators';
import {flushMicrotasks} from '@angular/core/testing';
import {resultMemoize} from '@ngrx/store';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

const getPriorityColor = (priority: number) => {
  switch (priority) {
    case 1:
      return colors.red;
    case 2:
      return colors.yellow;
    case 3:
    default:
      return colors.blue;
  }
};

@Injectable()
export class MyCalService {
  constructor(@Inject('BASE_CONFIG') private config: { uri: string }, private http: HttpClient) {
  }

  getUserTasks(userId: string): Observable<CalendarEvent[]> {
    const uri = `${this.config.uri}/tasks`;
    const params = new HttpParams()
      .set('ownerId', userId);
    return this.http.get(uri, { params })
      .pipe(
        map((tasks: Task[]) => tasks.map(
          (task: Task) => ({
                start: startOfDay(new Date(task.createDate)),
                end: task.dueDate ? endOfDay(new Date(task.dueDate)) : endOfDay(new Date(task.createDate)),
                title: task.desc,
                color: getPriorityColor(task.priority)
          })
        )),

        // map((tasks: Task[]) => tasks.map(
        //   (task: Task) => (
        //     {
        //     start: startOfDay(task.createDate as Date),
        //     end: task.dueDate ? endOfDay(task.dueDate as Date) : endOfDay(task.createDate as Date),
        //     title: task.desc,
        //     color: getPriorityColor(task.priority)
        //   })
        // )),
      );
  }
}
