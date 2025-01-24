import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './user';
import { DataTableComponent } from './data-table/data-table.component';
import { UsersJsonServerService } from './users-json-server.service';
@Component({
  selector: 'app-service-crud',
  imports: [FormsModule, CommonModule, DataTableComponent],
  templateUrl: './service-crud.component.html',
  styleUrl: './service-crud.component.css'
})
export class ServiceCrudComponent {
  
  user: User = {
    name: '',
    email: '',
    password: ''
  }

  // Autowiring
  // Dependency Injection
  constructor(private us:UsersJsonServerService){  }

  @ViewChild("dataTable") dataTable!: DataTableComponent

  handleSubmit(){
    this.us.addUser(this.user)
    .then(res=>{
      console.log(res)
      alert("User Created Successfully")
      this.dataTable.getUsers()
    })
    .catch(err=>{
      console.log(err)
      alert("Contact Developer")
    })
  }
}
