import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  getUsers(){
    return this.http.get("http://localhost:58810/api/patients");
  }
  searchUser(query){
    return this.http.get(`http://localhost:58810/api/patients?q=${query}`)
  }
}
