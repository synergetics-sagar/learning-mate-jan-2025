import { Component, Input } from '@angular/core';
import { UsersHttpClientService } from '../../users-http-client.service';

@Component({
  selector: 'app-lifecycle-child',
  imports: [],
  templateUrl: './lifecycle-child.component.html',
  styleUrl: './lifecycle-child.component.css'
})
export class LifecycleChildComponent {
  
  @Input() count: number | undefined


  textColor = "background: #222; color:rgb(211, 218, 85)"

  constructor(private httpClient: UsersHttpClientService){
    console.log("%c 1. Constructor", this.textColor)
  }

  ngOnChanges(){
    console.log("%c 2. ngOnChanges - @Input property changes", this.textColor)
  }

  ngOnInit(){
    // Execution of ngOnInit may depend upon the @Input binding variables
    console.log("%c 3. ngOnInit", this.textColor)
    
  }

  ngDoCheck(){
    console.log("%c 4. ngDoCheck - Component Change Detected", this.textColor)
  }
}
