import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import Ticket from '../interfaces/ticket-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private firestore:Firestore ) { }

  addTicket(ticket:Ticket){
    const ticketRef = collection(this.firestore, 'tickets')
    return addDoc(ticketRef, ticket)
  }

  getTickets(): Observable<Ticket[]> {
    const ticketRef = collection(this.firestore, 'tickets')
    return collectionData(ticketRef, {idField: "id"} ) as Observable<Ticket[]>
  }


}
