import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],

  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() movie: Movie | undefined;

  constructor() {}
}
