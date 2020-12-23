import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dev-hearts',
  templateUrl: './hearts.component.html',
  styleUrls: ['./hearts.component.css']
})
export class HeartsComponent implements OnInit {

  constructor() { }
  @Input('time') time;
  show: boolean = true;
  ngOnInit(): void {
    setTimeout(()=>{
      this.show = false;
    },this.time)
  }

}
