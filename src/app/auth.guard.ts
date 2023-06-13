
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApiService } from './service/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private apiService: ApiService) { 
    this.canActivate();
  }


  async canActivate(): Promise<boolean> {

    this.apiService.api()
    .subscribe(
      (response : any) => {
        console.log('API call successful', response.success);
      },
      (error : any) => {
        console.log('API call failed', error);
      }
    );

    return true;
  }
}
