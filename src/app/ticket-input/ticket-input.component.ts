import { Component } from '@angular/core';
import { TicketService } from '../services/ticket-service.service';
import Ticket from '../interfaces/ticket-interface';


@Component({
  selector: 'app-ticket-input',
  templateUrl: './ticket-input.component.html',
  styleUrls: ['./ticket-input.component.css']
})
export class TicketInputComponent {
  loading:boolean
  contenido:string
  ticket: Ticket

  constructor( private ticketservice: TicketService){
    this.contenido = ""
    this.ticket = {
      contenido: this.contenido
    }
    this.loading = false
  }

  onClick(){
    this.ticket = {
      contenido: this.contenido
    }
    this.ticketservice.addTicket(this.ticket)
    this.contenido = ""
  }

}
