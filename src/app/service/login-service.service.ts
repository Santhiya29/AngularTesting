import { ApiResponse } from '../modules/models/api-response';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  
  constructor(private http: HttpClient) {}

  getPayload(payload: any) {
      return JSON.stringify(payload);
  }

  putPayload(payload: any) {
      return {
          data: payload.data
      };
  }

  deletePayload(payload: any) {
      return {
          body: {
              data: payload.data
          }
      };
  }

  jsonResult(data: any) {
      return {
          data: data,
          success: true,
          error: {
              message: ''
          }
      };
  }

  errorMsg(error: any): Observable<ApiResponse> {
      return of({
          data: '',
          success: false,
          error: {
              message: error
          }
      });
  }

  getLogin(): Observable<ApiResponse> {
      return this.http.get<ApiResponse>(`http://localhost:3000/testing`);
  }

  // saveLogin(payload: any): Observable<ApiResponse> {
  //     return this.http.put<ApiResponse>('/scheduler/pause-process', this.putPayload(payload));
  // }

  
}
