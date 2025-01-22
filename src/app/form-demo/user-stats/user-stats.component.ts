import { Component, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-stats',
  imports: [],
  templateUrl: './user-stats.component.html',
  styleUrl: './user-stats.component.css'
})
export class UserStatsComponent {
  @Input() users: User[] = []
}
