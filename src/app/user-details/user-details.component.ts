import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  userId: string = ""
  userToBind: User = {
    id: '',
    name: '',
    email: '',
    gender: '',
    role: '',
    tnc: false
  }
  constructor(private ar: ActivatedRoute){}

  ngOnInit(){
     this.userId = this.ar.snapshot.params['id']
    
  }
}
