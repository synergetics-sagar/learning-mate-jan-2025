import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersHttpClientService {

  apiUrl = `http://localhost:8080/users`

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(this.apiUrl)
  }

  addUser(newUser: User){

    return this.http.post<User>(this.apiUrl, newUser) // Observable
  }

  updateUser(updatedUser: User){
    let id = updatedUser.id
  }

  deleteUser(id: string){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

}
