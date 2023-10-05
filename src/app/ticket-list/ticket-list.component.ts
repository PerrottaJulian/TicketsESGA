import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket-service.service';
import Ticket from '../interfaces/ticket-interface';
import { Query } from 'firebase/firestore';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit{
  interruptor:boolean
  tickets_list: Ticket[];

  constructor(private ticketservice: TicketService){ 
    this.interruptor = false

    this.tickets_list = [];
  }

  ngOnInit(): void {
    this.tickets_list.push({
      contenido: "Ticket de prueba"
    })
  }

  verLista(): void {
    this.ticketservice.getTickets().subscribe(tickets => {
      console.log(tickets)
      this.tickets_list = tickets;
    }) 
    
  }




}
