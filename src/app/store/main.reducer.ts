import { ActionReducerMap } from '@ngrx/store';
import * as app from './reducers/app/app.reducers';


export interface AppState {
   app: app.State;
}



export const appReducers: ActionReducerMap<AppState> = {
   app: app.appReducer,
};
