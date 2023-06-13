import { createReducer, on } from '@ngrx/store';
import * as loginAction from '../actions/login.action';
import { LoginState } from '../states/login.state';

const initialState: LoginState = {
    login: {
      success: false 
    },
   
};

export const loginReducer = createReducer(
    initialState,

    on(loginAction.getLoginSuccess, (state, { login }) => {
        console.log(login)
        return {
            ...state,
            login: login
        };
        
    }),

    on(loginAction.getLoginFailure, (state, { error }) => {
        return {
            ...state
        };
    }),

    // on(loginAction.saveLoginSuccess, (state, { data }) => {
    //     return {
    //         ...state,
    //         data: data
    //     };
    // }),

    // on(loginAction.saveLoginFailure, (state, { error }) => {
    //     return {
    //         ...state
    //     };
    // }),


);