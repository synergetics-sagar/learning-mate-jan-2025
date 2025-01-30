import { Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DataTableComponent } from './data-table/data-table.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const routes: Routes = [
    {
        path: "",
        component: NavigationComponent
    },
    {
        path:"signup",
        component: ReactiveFormComponent
    },
    {
        path: "data-table",
        component: DataTableComponent
    },
    {
        path:"details/:id",
        component: UserDetailsComponent
    }
];
