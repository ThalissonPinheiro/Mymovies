import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  movieName: string = '';

  constructor(
    readonly dadosRota: ActivatedRoute
  ) {
    this.movieName = this.dadosRota.snapshot.params['movieName'];
  }

}
