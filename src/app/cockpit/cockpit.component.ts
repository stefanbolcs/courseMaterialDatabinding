import { Component, OnInit ,EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output('bpCreated') blueprintCreated =new EventEmitter<{serverName:string, serverContent:string}>();

  // newServerName = '';
  // newServerContent = ''; 

  //this is using local references used thorugh ViewChild
  @ViewChild('serverContentInput',{static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  //local references can only be used in one HTML element, a local one
  onAddServer(nameInput:HTMLInputElement) {
    
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName:nameInput.value, 
      serverContent:this.serverContentInput.nativeElement.value
    });
  }

}
