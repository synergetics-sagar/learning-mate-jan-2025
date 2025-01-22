import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-update-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css'
})
export class UpdateFormComponent {
  formData: User = {
      id: 0,
      full_name: "",
      email: "",
      gender: "",
      role: "",
      tnc: false
  }

  @Output() endUpdateEvent = new EventEmitter<boolean>()

  endUpdate(){
    this.endUpdateEvent.emit(false)
  }
  
  handleSubmit(){

  }
}
