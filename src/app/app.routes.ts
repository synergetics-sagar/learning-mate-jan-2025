import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: ()=> import("./navigation/navigation.component").then(m=>m.NavigationComponent)
    },
    {
        path:"signup",
        loadComponent: ()=> import("./reactive-form/reactive-form.component").then(m=>m.ReactiveFormComponent)    },
    {
        path: "data-table",
        loadComponent: ()=> import("./data-table/data-table.component").then(m=>m.DataTableComponent)    },
    {
        path:"details/:id",
        loadComponent: ()=> import("./user-details/user-details.component").then(m=>m.UserDetailsComponent)    }
];
