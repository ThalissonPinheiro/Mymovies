import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { TERIR, ANIMACAO, RECOMENDADOS, ROMANTICA, BESTEIROL } from 'src/dataset/dataset';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent
  ],
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent {
  movieName: string = '';
  @Input() type: string = ''; 

  get movieList(): any[] {
    switch (this.type) {
      case 'RECOMENDADOS':
        return RECOMENDADOS.results;
      case 'TERIR':
        return TERIR.results;
      case 'ANIMACAO':
        return ANIMACAO.results;
      case 'ROMANTICA':
        return ROMANTICA.results;
      case 'BESTEIROL':
        return BESTEIROL.results;
      default:
        return [];
    }
  }
}
