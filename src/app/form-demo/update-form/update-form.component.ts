import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-update-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css'
})
export class UpdateFormComponent {

  @Input() formData: User = {
      id: 0,
      full_name: "",
      email: "",
      gender: "",
      role: "",
      tnc: false
  }

  @Output() endUpdateEvent = new EventEmitter<any>()

  endUpdate(){
    this.endUpdateEvent.emit({initUpdate: false})
  }
  
  handleSubmit(){
    this.endUpdateEvent.emit({initUpdate: false, updatedUser: this.formData})
  }
}
