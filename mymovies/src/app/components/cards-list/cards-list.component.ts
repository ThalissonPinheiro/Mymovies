import { Component } from '@angular/core';
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
  RECOMENDADOS_MOVIES = RECOMENDADOS.results;
  TERIR_MOVIES = TERIR.results;
  ANIMACAO_MOVIES = ANIMACAO.results;
  ROMANTICA_MOVIES = ROMANTICA.results;
  BESTEIROL_MOVIES = BESTEIROL.results;
}
