import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-data-table',
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {

  // Read-only
  @Input() users: User[] = []

  @Output() deleteEvent = new EventEmitter<number>()
  @Output() initUpdateEvent = new EventEmitter<any>()

  constructor(){
    this.deleteEvent.emit(1737349807459	)
  }

  deleteUser(id: number){
    this.deleteEvent.emit(id)
  }

  initUpdateEventEmit(user: User){
    this.initUpdateEvent.emit({initUpdate: true, user})
  }
}
