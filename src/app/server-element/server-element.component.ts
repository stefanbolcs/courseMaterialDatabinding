import { Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

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

  @ViewChild('heading',{static:true}) header:ElementRef;

  //this is coming from the <ng-content> if there is one 
  @ContentChild('contentParagraph',{static:true}) paragraph: ElementRef;

  constructor() { 
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text content '+this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: '+this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('ngDoCheck called!');

  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit called!');
    console.log('Text Content of paragraph: '+this.paragraph.nativeElement.textContent);

  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked checked!');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called!');
    console.log(this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!');
  }

  //ngOnDestroy()

}
