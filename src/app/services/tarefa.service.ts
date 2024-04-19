import { Injectable } from '@angular/core';
import { Tarefa } from '../interfaces/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }
  
  tarefas:Tarefa[] = [
    {id: "fseirn21", titulo: "Deu Ruim!", descricao: "A poha do kotlin", dataVencimento: "20/04/2024"},
    {id: "aaaaaaaa", titulo: "Karalho fudeu a poha toda", descricao: "A poha do professor de kotlin",},
  ]

  listar():Tarefa[] {
    return this.tarefas
  }

  remover(id:string) {
    const tarefa = this.tarefas.find(c => c.id == id);

    if (tarefa) {
      const index = this.tarefas.indexOf(tarefa);
      this.tarefas.splice(index, 1);
    }

  }

  adicionar(tarefa:Tarefa) {
    this.tarefas.push(tarefa);
  }
}
