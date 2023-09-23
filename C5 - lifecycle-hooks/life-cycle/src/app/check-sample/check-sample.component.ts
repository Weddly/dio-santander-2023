import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  count: number = 0;

  constructor() { }

  add() {
    this.count += 1
  }

  subtract() {
    this.count -= 1
  }


  ngOnInit(): void {
    console.log("ngOnInit")
  }
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  // checked => content => view

  //when the first content is started
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  // after a change, verify content
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  //after view initialization
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  // after a change, verify view
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
