import { createAction, props } from "@ngrx/store";
import { Login } from "../../models/login";

export const getLogin = createAction('[Login] Get Login ');

export const getLoginSuccess = createAction(
    '[Login] Get All Logins Success',
    props<{ login: Login }>()
);

export const getLoginFailure = createAction(
    '[Login] Get All Login Failure',
    props<{ error: any }>()
);

// export const saveLogin = createAction(
//     '[Login Save Login Data',
//     props<{ data: Login }>()
// );

// export const saveLoginSuccess = createAction(
//     '[Login] Save Login Data Success',
//     props<{ data: Login }>()
// );

// export const saveLoginFailure = createAction(
//     '[Login] Save Login Data Failure',
//     props<{ error: any }>()
// );