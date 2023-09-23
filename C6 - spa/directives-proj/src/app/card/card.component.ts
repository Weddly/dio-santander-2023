import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  products: string[] = [];
  menuType: string = "fasdasda";

  constructor() {
    this.products = [
      "mouse",
      "keyboard",
      "cable",
      "font"
    ];
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  add() {
    this.products.push("monitor");
  }

  remove(index: number) {
    this.products.splice(index, 1);
  }

}
