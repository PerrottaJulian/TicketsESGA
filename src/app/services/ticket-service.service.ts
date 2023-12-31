import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  readonly APIurl = "https://localhost:7161/api/TicketsDB/"
  
  constructor(private http:HttpClient ) { 
  }
   

  addTicket(contenido:string, timestamp: string){
    const ticketData = {
      contenido: contenido,
      timestamp: timestamp
    }

    const headers = new HttpHeaders({
      'Accept': 'application/json',
    });
    
    return this.http.post(this.APIurl+"AddTicket", ticketData, {headers: headers})
  }

   getTickets(){
    return this.http.get(this.APIurl+"GetTickets")
    
  }
  
}
