import { Component,Input,OnInit } from '@angular/core';
import { Feature, NavigationStyleSetting } from '../models/feature.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

@Input() MenuSetting:NavigationStyleSetting

  constructor() { }

  ngOnInit(): void {
  }

}
