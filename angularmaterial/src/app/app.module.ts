import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { DemoModule } from './demo/demo.module';
import { ContactManagerModule } from './contactmanager/contactmanager.module';

const routes: Routes = [
  { path: 'contactmanager', loadChildren: () => ContactManagerModule },
  { path: 'demo', loadChildren: () => DemoModule },
  { path:'**', redirectTo: 'contactmanager' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
