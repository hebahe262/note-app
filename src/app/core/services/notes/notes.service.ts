import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environments';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private  _httpClient:HttpClient) { };

  addNewNote(data:object):Observable<any>{
    return this._httpClient.post(`${environment.BASE_URL}/api/v1/notes`,data,

//3mlna el headers comment 3ashan hn3ml interceptor leha
      // {
      //   headers:{
      //     token:localStorage.getItem('userToken')!
      //   }
      // }
    );
    
  }
  getUserNotes():Observable<any>{
    return this._httpClient.get(`${environment.BASE_URL}/api/v1/notes`);
    
  }

  updateUserNotes(data:object,id:string):Observable<any>{

    return this._httpClient.put(`${environment.BASE_URL}/api/v1/notes/${id}`,data)
  }

   deletUserNotes(id:string):Observable<any>{

    return this._httpClient.delete(`${environment.BASE_URL}/api/v1/notes/${id}`)
  }
}
