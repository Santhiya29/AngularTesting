import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, of } from 'rxjs';
import { mergeMap, catchError, switchMap } from 'rxjs/operators';
import { Store } from "@ngrx/store";
import { LoginServiceService } from "src/app/service/login-service.service";
import { AppState } from "../app.state";
import * as loginAction from '../actions/login.action';
import * as globalSpinnerAction from '../actions/global-spinner.action';
import { Injectable } from "@angular/core";

@Injectable()
export class loginEffects {
    constructor(
        private router: Router,
        private action: Actions,
        private loginService: LoginServiceService,
        private store: Store<AppState>
    ) { }

    getLogin = createEffect(() =>
        this.action.pipe(
            ofType(loginAction.getLogin),
            mergeMap((actionParams: any) => {
                this.store.dispatch(globalSpinnerAction.showSpinner());
                return of(actionParams);
            }),
            mergeMap(() =>
                this.loginService.getLogin().pipe(
                    mergeMap((getLoginResponse) => {
                        if (getLoginResponse?.success) {
                            console.log(getLoginResponse)
                            return of(
                                
                                loginAction.getLoginSuccess({
                                    login: getLoginResponse?.data,
                                }),
                                
                                globalSpinnerAction.hideSpinner(),
                            );
                            
                        } else {
                            return of(
                                loginAction.getLoginFailure({
                                    error: getLoginResponse.error.message
                                }),
                                globalSpinnerAction.hideSpinner()
                            );
                        }
                    }),
                    catchError((error) => {
                        return of(
                            loginAction.getLoginFailure({ error }),
                            globalSpinnerAction.hideSpinner()
                        );
                    })
                )
            )
        )
    );

    // saveLogin = createEffect(() =>
    //     this.action.pipe(
    //         ofType(loginAction.saveLogin),
    //         mergeMap((actionParams: any) => {
    //             this.store.dispatch(globalSpinnerAction.showSpinner());
    //             return of(actionParams);
    //         }),
    //         mergeMap((actionParams: any) =>
    //             this.loginService.saveLogin(actionParams).pipe(
    //                 mergeMap((saveLoginResponse) => {
    //                     if (saveLoginResponse?.success) {
    //                         return of(
    //                             loginAction.saveLoginSuccess({
    //                                 data: saveLoginResponse?.data
    //                             }),
    //                             globalSpinnerAction.hideSpinner()
    //                         );
    //                     } else {
    //                         return of(
    //                             loginAction.saveLoginFailure({
    //                                 error: saveLoginResponse.error.message
    //                             }),
    //                             globalSpinnerAction.hideSpinner()
    //                         );
    //                     }
    //                 }),
    //                 catchError((error) => {
    //                     return of(
    //                         loginAction.saveLoginFailure({ error }),
    //                         globalSpinnerAction.hideSpinner()
    //                     );
    //                 })
    //             )
    //         )
    //     )
    // );

}
