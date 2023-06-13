// import { routerReducer } from '@ngrx/router-store';
// import { AppState } from './app.state';
// import { ActionReducerMap } from '@ngrx/store';
// import { authReducer } from './reducers/auth.reducer';
// import { keycloakAuthReducer } from './reducers/keycloak-auth.reducer'
// import { globalSpinnerReducer } from './reducers/global-spinner.reducer';
// import { sharedReducer } from './reducers/shared.reducer';

import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { loginReducer } from "./reducers/login.reducer";
// import { loginReducer }from '../redux/reducers/login.reducer'

export const AppReducers: ActionReducerMap<AppState> = {
    // router: routerReducer,
    // auth: authReducer,
    // keycloakAuth: keycloakAuthReducer,
    // globalSpinner: globalSpinnerReducer,
    // shared: sharedReducer
    loginForm: loginReducer
};
