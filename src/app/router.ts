import {Routes} from "@angular/router";
import {DataTableComponent} from "./data-table/data-table.component";
import {LayoutComponent} from "./layout/layout.component";

export const appRoutes: Routes = [


  {
    path: '', redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'angular2',
    component: DataTableComponent
  },
  {
    path: 'layout',
    component: LayoutComponent
  },


  {path: '**', redirectTo: '/login', pathMatch: 'full'},
];
