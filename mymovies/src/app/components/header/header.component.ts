import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroGeneroComponent } from '../filtro-genero/filtro-genero.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,
    FiltroGeneroComponent
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
}
