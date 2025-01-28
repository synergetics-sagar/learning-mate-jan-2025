import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersHttpClientService {

  constructor(private http: HttpClient) { }

  getUsers(){
    // return this.http.get()
  }

  addUser(newUser: User){

  }

  updateUser(updatedUser: User){
    let id = updatedUser.id
    
  }


  deleteUser(id: string){

  }

}
