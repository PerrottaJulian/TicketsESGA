import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket-service.service';



@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit{
  tickets_list: any = []

  constructor(private ticketservice: TicketService){ 
    this.getTickets()
  }

  ngOnInit(): void {
    this.getTickets()
  }


  getTickets(){
    this.ticketservice.getTickets().subscribe(tickets => {
      this.tickets_list = tickets
    })
    
    
  }

}
