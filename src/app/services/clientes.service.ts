import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/Clientes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientesUrl = "http://localhost:3000/clientes"
  constructor(private http: HttpClient) {
    
  }
  
  clientes:Cliente[] = [
    {id: "fseirn21", nome: "Mat Pikas"},
    {id: "testerrr", nome: "Testererr", telefone: "12345678"},
  ]

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clientesUrl) as Observable<Cliente[]>;
    //return this.clientes
  }

  getById(id:String) {
    return this.http.get(`${this.clientesUrl}/${id}`) as Observable<Cliente>
  }

  remover(id:string) {
    /*const cliente = this.clientes.find(c => c.id == id);

    if (cliente) {
      const index = this.clientes.indexOf(cliente);
      this.clientes.splice(index, 1);
    }*/

    return this.http.delete(`${this.clientesUrl}/${id}`)

  }

  httpHeader = {
    headers: {
      "Content-Type":"application/json"
    }
  }

  atualizar(cliente:Cliente) {
    return this.http.put(`${this.clientesUrl}/${cliente.id}`, cliente, this.httpHeader)
  }

  adicionar(cliente:Cliente) {

    return this.http.post(this.clientesUrl, cliente, this.httpHeader)
    //this.clientes.push(cliente);
  }

  

}
