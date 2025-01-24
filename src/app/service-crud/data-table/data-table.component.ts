import { Component } from '@angular/core';
import { User } from '../user';
import { CommonModule } from '@angular/common';
import { UsersJsonServerService } from '../users-json-server.service';

@Component({
  selector: 'app-data-table',
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {

  users: User[] = []

  constructor(private us:UsersJsonServerService){}

  ngOnInit(){
    this.getUsers()
  }

  getUsers(){
    this.us.getUsers().then(res=>this.users=res)
  }

  deleteUser(id: string | undefined){
    if(id){
      this.us.deleteUser(id)
      .then(res=>{
        console.log(res)
        alert("Deleted Successfully")
        this.getUsers()
      })
      .catch(err=>{
        console.log(err)
        alert("Contact Developer")
      })
    }
  }
}
