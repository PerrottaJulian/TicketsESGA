import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketInputComponent } from './ticket-input/ticket-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputTextareaModule,
    ButtonModule,
    HttpClientModule
    /*provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
