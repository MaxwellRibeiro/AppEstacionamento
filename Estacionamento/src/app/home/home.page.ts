import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  ticket: Ticket;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    
  }

  load(){
    this.ticket = this.ticketService.getTicketPendende();
  }
}