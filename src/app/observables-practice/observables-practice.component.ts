import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables-practice',
  imports: [],
  templateUrl: './observables-practice.component.html',
  styleUrl: './observables-practice.component.css'
})
export class ObservablesPracticeComponent {

  myObservable = new Observable<number>((observer)=>{
      // Initialization
      let count = 0
      
      let myInterval = setInterval(()=>{
        // Condition
        if(count<2){
          // Updation
          count++
          observer.next(count)
        }
        else{
          console.log("Interval Count Incremented:"+count)
          clearInterval(myInterval)
          
          observer.complete()
          observer.error("Some Error")
        }
      }, 1000)
  
  })

  ngOnInit(){
    this.myObservable.subscribe({
      next: (nextCount)=>console.log(nextCount),
      error: (err)=>console.log(err),
      complete: ()=>{
        console.log("Observer completed the process!")
      }
    })
  }

}
