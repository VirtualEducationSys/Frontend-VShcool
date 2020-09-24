import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {
  mapShown:boolean;
  constructor() { }

  ngOnInit(): void {
    if (window.screen.width === 360) { // 768px portrait
      this.mapShown = false;
    }
  }

  hideMap = ()=> { this.mapShown = (this.mapShown) ? false : true; }
}
