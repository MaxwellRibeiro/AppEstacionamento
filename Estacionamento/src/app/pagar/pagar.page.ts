import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import * as moment from 'moment';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.page.html',
  styleUrls: ['./pagar.page.scss'],
})
export class PagarPage implements OnInit {

  ticket: Ticket;

  data: string;
  hrEntrada: string;
  hrSaida: string;

  minutosPagar: number;
  hrTotalPagar: string;
  valorTotalPagar: number;

  constructor(private ticketService: TicketService,
              public alertController: AlertController) {
  }

  ngOnInit() {
    this.clearDados(); 
  }

  clearDados(){
    this.data = new Date().toISOString();
    this.hrEntrada = "";
    this.hrSaida = "";
    this.minutosPagar = 0;
    this.hrTotalPagar = "";
    this.valorTotalPagar = 0;
  }

  async presentAlert(msg: string, header: string = 'Não foi possível realizar o pagamento!') {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: header,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  
  pagar() {

    if(this.hrEntrada == ""){
      this.presentAlert("Defina a hora de entrada");
      return false;
    }

    if(this.hrSaida == ""){
      this.presentAlert("Defina a hora de saida");
      return false;
    }

    this.calcular();
    this.salvarTicket();
    this.clearDados();

    this.presentAlert("Ticket pago","Volte sempre!");    
  }

  salvarTicket(){

    this.ticket.data =  moment(this.data).format("DD-MM-YYYY");
    this.ticket.hrEntrada = moment(this.hrEntrada).format("HH:mm");
    this.ticket.hrSaida = moment(this.hrSaida).format("HH:mm");
    this.ticket.hrTotal = this.hrTotalPagar;
    this.ticket.valorTotal = "R$" + this.valorTotalPagar;
    this.ticket.pago = true;

  }

  calcular() {

    let diff = moment(this.hrSaida.slice(0,19), 'YYYYMMDD HH:mm:ss').diff(moment(this.hrEntrada.slice(0,19), 'YYYYMMDD HH:mm:ss'))
    let d = moment.duration(diff);
    
    this.minutosPagar = d.asMinutes();
    this.valorTotalPagar = parseFloat((d.asMinutes() * 0.20).toFixed(2));
    this.hrTotalPagar = Math.floor(d.asHours()) + moment.utc(diff).format(":mm"); 
    
  }

  load(){
    this.ticket = this.ticketService.getTicketPendende();
  }

}
