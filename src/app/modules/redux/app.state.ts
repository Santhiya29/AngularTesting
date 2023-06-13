// import { RouterReducerState } from '@ngrx/router-store';
// import { AuthState } from './states/auth.state';
// import { KeycloakAuthState } from './states/keycloak-auth.state';
// import { GlobalSpinnerState } from './states/global-spinner.state';
// import { SharedState } from './states/shared.state';

import { LoginState } from "./states/login.state";

export interface AppState {
    // router: RouterReducerState;
    // auth: AuthState;
    // keycloakAuth: KeycloakAuthState;
    // globalSpinner: GlobalSpinnerState;
    // shared: SharedState;
    loginForm: LoginState
}
