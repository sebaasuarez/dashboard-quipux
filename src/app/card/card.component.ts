import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() colSize: number;

  get returnColSize(): number { return this.colSize || 12; }

  constructor() {}

  ngOnInit() {}

}
