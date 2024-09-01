import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginApiResponse } from '../interface/auth-interface';
import { Observable } from 'rxjs/internal/Observable';
import { AuthEndPoints } from '../enum/auth-enum';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
    console.log(environment.from);
  }

  loginWithEmailAndPassword(email: string, password: string): Observable<LoginApiResponse> {
    return this.http.post<LoginApiResponse>(environment.backendUrl + AuthEndPoints.Login, { email, password })
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') ? true : false
  }

}
