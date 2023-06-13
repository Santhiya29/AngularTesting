import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { LoginState } from '../states/login.state';


export const selectFeature = (state: AppState) => state.loginForm;

export const selectLogin = createSelector(
    selectFeature,
    (state: LoginState) => state.login
);
