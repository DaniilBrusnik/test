import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CdkTableModule} from "@angular/cdk/table";
import {MatButtonModule, MatCardModule, MatInputModule, MatRadioModule} from "@angular/material";
import { SortPipe } from './pipes/sort.pipe';
import { SearchPipe } from './pipes/search.pipe';
import {FormsModule} from "@angular/forms";
import { LayoutComponent } from './layout/layout.component';
import {appRoutes} from "./router";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    SortPipe,
    SearchPipe,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CdkTableModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
