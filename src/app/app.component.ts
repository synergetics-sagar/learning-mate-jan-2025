import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { ServiceCrudComponent } from "./service-crud/service-crud.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { ObservablesPracticeComponent } from "./observables-practice/observables-practice.component";
import { DataTableComponent } from "./data-table/data-table.component";
import { NavigationComponent } from "./navigation/navigation.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, ReactiveFormComponent, ObservablesPracticeComponent, DataTableComponent, NavigationComponent], // Other component / Child Components
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
