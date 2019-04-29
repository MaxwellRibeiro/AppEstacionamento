import { Injectable } from '@angular/core';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  tickets: Ticket[] = [];

  constructor() { }

  getTicketsPagos(): Ticket[] {
    return this.tickets.filter(t=> t.pago == true);
  }

  getTicketPendende(): Ticket {
    var ticket = this.tickets.find(t => t.pago == false);
    if(ticket == null){
      ticket = this.getNovoTicket();
    }
    return ticket;
  }


  private getNovoTicket(): Ticket {
    let ticket = new Ticket();

    var idMax = this.tickets.length > 0 ? this.tickets[this.tickets.length - 1].id + 1 : 1;
    
    ticket.id = idMax;
    ticket.numero = this.gerarNumeroRandom();
    ticket.pago = false;

    this.tickets.push(ticket);

    return ticket;
  }

  private gerarNumeroRandom(): number {
    return Math.floor(Math.random() * 10000);
  }
}
