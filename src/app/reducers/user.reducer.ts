import {createSelector} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import * as actions from '../actions/user.action';
import * as authActions from '../actions/auth.action';
import {User, Auth} from '../domain';

export interface State extends EntityState<User> {}

export function sortByOrder(a: User, b: User): number {
  return a.email.localeCompare(b.email);
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (user: User) => user.id as string,
  sortComparer: sortByOrder,
});

export const initialState: State = adapter.getInitialState();

const register = (state: State, action: authActions.LoginSuccessAction | authActions.RegisterSuccessAction): State => {
  const auth = action.payload as Auth;
  return (state.ids as string[]).indexOf(auth.userId as string) === -1 ?
    {...adapter.addOne(auth.user as User, state)} : state;
};

export function reducer(state: State = initialState, action: actions.Actions | authActions.Actions): State {
  switch (action.type) {
    case authActions.LOGIN_SUCCESS:
    case authActions.REGISTER_SUCCESS:
      return register(state, action as authActions.LoginSuccessAction | authActions.RegisterSuccessAction);
    case actions.ADD_USER_PROJECT_SUCCESS:
      return {...adapter.addOne(action.payload as User, state)};
    case actions.REMOVE_USER_PROJECT_SUCCESS:
      return {...adapter.removeOne(action.payload.id as string, state)};
    case actions.SEARCH_USERS_SUCCESS:
    case actions.LOAD_USERS_BY_PRJ_SUCCESS:
    case actions.BATCH_UPDATE_USER_PROJECT_SUCCESS:
      return {...adapter.addMany(action.payload as User[], state)};
    default: {
      return state;
    }
  }
}
