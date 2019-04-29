import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.page.html',
  styleUrls: ['./pagamentos.page.scss'],
})
export class PagamentosPage implements OnInit {

  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
  }

  load(){
    this.tickets = this.ticketService.getTicketsPagos();
  }

}
