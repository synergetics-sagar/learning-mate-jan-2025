import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LifecycleHooksComponent } from "./lifecycle-hooks/lifecycle-hooks.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, LifecycleHooksComponent], // Other component / Child Components
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
