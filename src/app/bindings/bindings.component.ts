import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindings',
  imports: [FormsModule],
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.css'
})
export class BindingsComponent {
  // State variable
  count = 0
  inputVal = "sagar"

  // JSON Object
  user = {
    name: "Sample User",
    email: "sample.user@example.com",
    age: 30,
    married: true
  }

  userToString(){
    return JSON.stringify(this.user)
  }

  increment(){
    // State Updation
    this.count++
  }

  decrement(){
    this.count--
  }

  reset(){
    this.count=0
  }
}
