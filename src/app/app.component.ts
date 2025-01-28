import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { ServiceCrudComponent } from "./service-crud/service-crud.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, ReactiveFormComponent], // Other component / Child Components
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
