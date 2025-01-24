import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersJsonServerService {

  apiUrl = "http://localhost:8080/users"

  constructor() { }

  getUsers(){
    return fetch(this.apiUrl).then(res=>res.json())
    .then(resdata=>resdata)
  }

  addUser(user: User){
    let requestMetaData = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    }
    return fetch(this.apiUrl, requestMetaData)
  }

  deleteUser(id: string){
    // http://localhost:8080/users/id
    return fetch(`${this.apiUrl}/${id}`, {method: "DELETE"}) 
  }
}
