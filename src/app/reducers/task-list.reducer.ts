import {TaskList, Project} from '../domain';
import {createSelector} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import * as _ from 'lodash';
import * as actions from '../actions/task-list.action';
import * as prjActions from '../actions/project.action';

export interface State extends EntityState<TaskList> {
}

export function sortByOrder(a: TaskList, b: TaskList): number {
  return a.order > b.order ? 1 : a.order === b.order ? 0 : -1;
}

export const adapter: EntityAdapter<TaskList> = createEntityAdapter<TaskList>({
  selectId: (taskList: TaskList) => taskList.id as string,
  sortComparer: sortByOrder,
});

export const initialState: State = adapter.getInitialState();

const delListByPrj = (state: State, action: prjActions.DeleteProjectSuccessAction) => {
  const project = action.payload as Project;
  const taskListIds = project.taskLists as string[];
  return adapter.removeMany(taskListIds, state);
};

const swapOrder = (state: State, action: actions.SwapOrderSuccessAction) => {
  const taskLists = action.payload as TaskList[];
  if (taskLists === null) {
    return state;
  }
  return adapter.updateMany(taskLists.map((tl: TaskList) => ({id: tl.id as string, changes: tl})), state);
};

export function reducer(state: State = initialState, action: actions.Actions | prjActions.Actions): State {
  switch (action.type) {
    case actions.ADD_SUCCESS:
      return {...adapter.addOne(action.payload, state)};
    case actions.DELETE_SUCCESS:
      return {...adapter.removeOne(action.payload.id as string, state)};
    case actions.UPDATE_SUCCESS:
      return {...adapter.updateOne({id: action.payload.id as string, changes: action.payload}, state)};
    case actions.SWAP_ORDER_SUCCESS:
      return {...swapOrder(state, action as actions.SwapOrderSuccessAction)};
    case actions.LOADS_SUCCESS:
      return {...adapter.addMany(action.payload, state)};
    case prjActions.DELETE_SUCCESS:
      return {...delListByPrj(state, action as prjActions.DeleteProjectSuccessAction)};
    default:
      return state;
  }
}
