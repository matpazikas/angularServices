import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClienteComponent } from "./components/cliente/cliente.component";
import { TarefaComponent } from './components/tarefa/tarefa.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientDetailComponent } from "./components/client-detail/client-detail.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, ClientDetailComponent, ClienteComponent]
})
export class AppComponent {
  title = 'servicesApp';
}
