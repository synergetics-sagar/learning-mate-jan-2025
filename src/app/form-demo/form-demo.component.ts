import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from './user';
import { DataTableComponent } from "./data-table/data-table.component";
import { UserStatsComponent } from "./user-stats/user-stats.component";
import { UpdateFormComponent } from "./update-form/update-form.component";

@Component({
  selector: 'app-form-demo',
  imports: [FormsModule, CommonModule, DataTableComponent, UserStatsComponent, UpdateFormComponent],
  templateUrl: './form-demo.component.html',
  styleUrl: './form-demo.component.css'
})
export class FormDemoComponent {


  initUpdate: boolean = false
  userToUpdate: User = {
    id: 0,
    full_name: '',
    email: '',
    gender: '',
    role: '',
    tnc: false
  }

  initUpdateToggle(value:any){
   
    if(value.initUpdate){
      this.initUpdate = value.initUpdate
      let uid = value.id
      this.userToUpdate = {...value.user}
    }
    else{
      this.initUpdate = value.initUpdate
      // Revceived: {..}
      // Users: [{}, {}, {..}, {}]
      let updatedUsersArray = this.users.map(nextUser=>{
        if(nextUser.id==value.updatedUser.id){
          nextUser = value.updatedUser
        }
        return nextUser
      })
      this.users = updatedUsersArray
    }
    
  }

  formData: User = {
    id: 0,
    full_name: "",
    email: "",
    gender: "",
    role: "",
    tnc: false
  }
  
  // Iterable Variable
  users: User[] = [
    {"id":1737349807459,"full_name":"sagar","email":"sagar@example.com","gender":"male","role":"admin","tnc":true},
    {"id":1737349843907,"full_name":"someone else","email":"someone.else@example.com","gender":"female","role":"buyer","tnc":true},
    {"id":1737349863636,"full_name":"another value","email":"another.value@example.com","gender":"male","role":"seller","tnc":true}
  ]


  // Syntax to create reference of form inside javascript
  @ViewChild("myForm") myForm!: NgForm

  usersToString(){
    return JSON.stringify(this.users)
  }

  handleSubmit(){
    // Use the form reference to check the form's validity status
    if(this.myForm.invalid){
      alert("Don't mess with markup by inspecting element!!")
    }
    else{
      let date = new Date()
      this.formData.id = date.getTime()
      this.users.push({...this.formData})
      this.myForm.reset()
      console.log(this.users)
    }
    
  }

  deleteUser(id: number){
    let filterdUsersArray = this.users.filter(nextUser=>nextUser.id!=id)
    this.users = filterdUsersArray
  }


}
