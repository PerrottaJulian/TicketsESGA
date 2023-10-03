import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  ticket: string
  tickets_arr : string[]
  constructor(){
    this.ticket = ""
    this.tickets_arr = []
  }

  addTicket(ticket:string){
    this.tickets_arr.push(ticket)
  }

}
