import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //this element wont have ViewEncapsulation so to thei tags  wont be any ngcontent added when looking at HTML in browser
  //if its none it will go rule globally
   encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element:{
    type:string, name:string, content:string
  };

  constructor() { }

  ngOnInit(): void {
  }

}
