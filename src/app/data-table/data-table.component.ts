import { Component } from '@angular/core';
import { UsersHttpClientService } from '../users-http-client.service';
import { User } from '../user';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-data-table',
  imports: [CommonModule, RouterModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {

  users: User[] = []

  constructor(private usersService: UsersHttpClientService){}

  ngOnInit(){
    this.getUsers()
  }

  getUsers(){
    this.usersService.getUsers()
    .subscribe({
      next: (res)=>this.users=res,
      error: (err)=>console.log(err)
    })
  }

  deleteUser(id: string){
    this.usersService.deleteUser(id)
    .subscribe({
      error: (err)=>console.log(err),
      complete: ()=>{
        alert("User Deleted Successfully")
        this.getUsers()
      }
    })
  }

}
