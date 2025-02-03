import { Component } from '@angular/core';
import { LifecycleChildComponent } from "./lifecycle-child/lifecycle-child.component";

@Component({
  selector: 'app-lifecycle-hooks',
  imports: [LifecycleChildComponent],
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.css'
})
export class LifecycleHooksComponent {

    textColor = "background: #222; color:rgb(218, 85, 85)"
    count = 0

    constructor(){
      console.log("%c 1. Constructor", this.textColor)
    }

    ngOnChanges(){
      console.log("%c 2. ngOnChanges", this.textColor)
    }

    ngOnInit(){
      console.log("%c 3. ngOnInit", this.textColor)
    }

    ngDoCheck(){
      console.log("%c 4. ngDoCheck - Component Change Detected", this.textColor)
    }

}
