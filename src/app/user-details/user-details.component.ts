import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  userId: string = ""

  constructor(private ar: ActivatedRoute){}

  ngOnInit(){
     this.userId = this.ar.snapshot.params['id']
  }
}
