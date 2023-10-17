import { Component } from '@angular/core';
import { TicketService } from '../services/ticket-service.service';


@Component({
  selector: 'app-ticket-input',
  templateUrl: './ticket-input.component.html',
  styleUrls: ['./ticket-input.component.css']
})
export class TicketInputComponent {
  loading:boolean
  contenido:string
  id = "newTicket"

  constructor( private ticketservice: TicketService){
    this.contenido = ""
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
