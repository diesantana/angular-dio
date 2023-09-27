import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  quantidade: number = 0;
  constructor() { }

  ngOnDestroy(): void {
    console.log('Goodbye My friend!');
  }

  ngDoCheck(): void {
    console.log('DoCheck');
  }

  adicionar() {
    this.quantidade += 1;
  }

  subtrair() {
    this.quantidade -= 1;
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }


}
