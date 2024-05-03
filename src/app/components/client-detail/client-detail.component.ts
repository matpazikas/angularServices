import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../services/clientes.service';
import { Cliente } from '../../interfaces/Clientes';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.css'
})

export class ClientDetailComponent {
  cliente?: Cliente;
  clienteForm: FormGroup = new FormGroup([])

  constructor(private route: ActivatedRoute, private clienteService: ClienteService, private formBuilder: FormBuilder) {
    this.getClientById();
  }

  id?: string = "";
  getClientById(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.clienteService.getById(this.id).subscribe((clientResponse) => this.cliente = clientResponse)

    this.clienteForm = this.formBuilder.group({
      nome: [this.cliente?.nome],
      telefone: [this.cliente?.telefone],
      id: [this.cliente?.id],

    })
  }

  update(): void {
    if (this.clienteForm.valid) {
      const clienteAlterado: Cliente = {
        nome: this.clienteForm.value.nome,
        telefone: this.clienteForm.value.telefone,
        id: this.clienteForm.value.id,
      }

      this.clienteService.atualizar(clienteAlterado).subscribe();
      alert("Alterado com sucesso!")
    }
  }
}
