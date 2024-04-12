import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/Clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }
  
  clientes:Cliente[] = [
    {id: "fseirn21", nome: "Mat Pikas"},
    {id: "testerrr", nome: "Testererr", telefone: "12345678"},
  ]

  listar():Cliente[] {
    return this.clientes
  }

  remover(id:string) {
    const cliente = this.clientes.find(c => c.id == id);

    if (cliente) {
      const index = this.clientes.indexOf(cliente);
      this.clientes.splice(index, 1);
    }

  }

  adicionar(cliente:Cliente) {
    this.clientes.push(cliente);
  }

}
