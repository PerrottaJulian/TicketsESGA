import { Component } from '@angular/core';
import { TicketService } from '../services/ticket-service.service';
import Ticket from '../interfaces/ticket-interface';
import { HttpClient } from '@angular/common/http';
import { TicketListComponent } from '../ticket-list/ticket-list.component';


@Component({
  selector: 'app-ticket-input',
  templateUrl: './ticket-input.component.html',
  styleUrls: ['./ticket-input.component.css']
})
export class TicketInputComponent {
  loading:boolean
  contenido:string
  ticket: Ticket
  id = "newTicket"

  constructor( private ticketservice: TicketService){
    this.contenido = ""
    this.ticket = {
      contenido: this.contenido
    }
    this.loading = false
  }

  onClick(){
    const date = new Date()
    var hours: string
    var minutes: string
    if (date.getHours() < 10){
      hours = "0"+date.getHours()
    }else{
      hours = date.getHours().toString()
    }

    if (date.getMinutes() < 10){
      minutes = "0"+date.getMinutes()
    }else{
      minutes = date.getMinutes().toString()
    }
    
    
    this.ticketservice.addTicket(this.contenido, date.toDateString() + " "+ hours+":"+minutes).subscribe(data => {
      alert(data)
    })
    this.contenido = ""
    //location.reload()
  }

}
