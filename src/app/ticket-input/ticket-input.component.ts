import { Component } from '@angular/core';
import { TicketService } from '../services/ticket-service.service';
import Ticket from '../interfaces/ticket-interface';


@Component({
  selector: 'app-ticket-input',
  templateUrl: './ticket-input.component.html',
  styleUrls: ['./ticket-input.component.css']
})
export class TicketInputComponent {
  ticket: Ticket
  tickets_arr : Ticket[]
  loading:boolean
  contenido:string

  constructor( private ticketservice: TicketService){
    this.contenido = ""
    this.ticket = {
      contenido: this.contenido
    }
    this.tickets_arr = []
    this.loading = false
  }

  onClick(ticket:Ticket){
    ticket = {
      contenido: this.contenido
    }
    this.ticketservice.addTicket(ticket)
    this.contenido = ""
  }

}
