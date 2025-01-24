import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  users: User[] = [
    {"id":1737349807459, "name":"sagar","email":"sagar@example.com", "password":"1233456"},
    {"id":1737349843907, "name":"someone else","email":"someone.else@example.com", "password":"1233456"},
    {"id":1737349863636, "name":"another value","email":"another.value@example.com", "password":"1233456"}
  ]

  constructor() { }
  
  getUsers(){
    return this.users
  }

  addUser(newUser: User){
    let today = new Date()
    newUser.id = today.getTime()
    this.users.push({...newUser})
  }

  deleteUser(id: number){
    let filteredUsers = this.users.filter(nextUser=>nextUser.id!=id)
    this.users = filteredUsers
  }

  getUserDetails(id: number){
    let user = this.users.filter(nextUser=>nextUser.id==id)
    return user
  }

  updateUser(updatedUser: User){
    let updatedUsers = this.users.map(nextUser=>{
      if(nextUser.id==updatedUser.id){
        nextUser = updatedUser
      }
      return nextUser
    })
    this.users = updatedUsers
  }
  
}
