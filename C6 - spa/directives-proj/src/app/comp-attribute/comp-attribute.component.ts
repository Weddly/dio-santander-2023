import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-attribute',
  templateUrl: './comp-attribute.component.html',
  styleUrls: ['./comp-attribute.component.css']
})
export class CompAttributeComponent implements OnInit {
  fontStyle: string = "";
  bgColor: string = "green";
  fontColor: string = "white";
  item: string = "";
  list: string[] = [];
  isEnabledBlock: boolean = true;

  constructor() {

  }

  ngOnInit(): void {

  }

  addList() {
    this.list.push(this.item);
    this.item = '';
  }

  cleanList() {
    this.list = [];
  }

  setStyle() {
    if (this.fontStyle == 'enable') {
      this.fontStyle = 'disable'
      this.bgColor = "red"

    } else {
      this.fontStyle = "enable"
      this.bgColor = "green"


    }
  }

}
