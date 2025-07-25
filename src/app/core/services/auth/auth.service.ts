import { environment } from './../../environment/environments';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient:HttpClient) { };

  sendRegisterData(data:object):Observable<any>{
   return this._httpClient.post(`https://note-sigma-black.vercel.app/api/v1/users/signUp`,data)
  }

  sendLoginData(data:object):Observable<any>{
   return this._httpClient.post(`${environment.BASE_URL}/api/v1/users/signIn`,data)
  }
}
