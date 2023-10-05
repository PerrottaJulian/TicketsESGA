import { Component } from '@angular/core';
import { TicketService } from '../services/ticket-service.service';
import Ticket from '../interfaces/ticket-interface';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {
  interruptor:boolean
  tickets_list: Ticket[]

  constructor(private ticketservice: TicketService){ 
    this.interruptor = false
    this.tickets_list = [{
      contenido: "Ticket de prueba"
    }]

  }
  ngOnInit(): void{
    this.ticketservice.getTickets().subscribe(tickets =>{
      console.log(tickets)
      this.tickets_list = tickets
    })
  }
}
