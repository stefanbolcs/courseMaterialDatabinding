import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //this element wont have ViewEncapsulation so to thei tags  wont be any ngcontent added when looking at HTML in browser
  //if its none it will go rule globally
   encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,OnChanges {
  @Input('srvElement') element:{
    type:string, name:string, content:string
  };

  constructor() { 
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngDoCheck(){
    console.log('ngDoCheck called!');

  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit called!');

  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked checked!');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called!');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!');
  }

  //ngOnDestroy()

}
