/* eslint-disable no-underscore-dangle */
import { Action, createReducer, on } from '@ngrx/store';
import { isSmall, isLoading, stopLoading } from '../../actions/app/app.actions';


export interface State {
    isSmall: boolean;
    isLoading: boolean;
}

export const initialState: State = {
   isSmall: false,
   isLoading: false
};

const _appReducer = createReducer(
  initialState,
  on(isSmall, (state, { flag }) => ({...state, isSmall: flag})),
  on(isLoading, (state) => ({...state, isLoading: true})),
  on(stopLoading, (state) => ({...state, isLoading: false})),

);

export const appReducer = (state: any, action: Action) => _appReducer(state, action);
