import { Component, OnInit } from '@angular/core';
import { NavigationStyleSetting } from 'src/app/shared/models/feature.model';

@Component({
  selector: 'app-dash-landing',
  templateUrl: './dash-landing.component.html',
  styleUrls: ['./dash-landing.component.scss']
})
export class DashLandingComponent implements OnInit {

  constructor() { }

  _menuSetting:NavigationStyleSetting ;
  //= {
  //   SectionTitle:"DAHSBOARD",
  //   Color:'#6E6E6E',
  //   Features:[
  //     { Title:'Feature1', Icon:'mic', Color:'#6E6E6E'},
  //     { Title:'Feature1', Icon:'mic', Color:'#6E6E6E'}, 
  //     { Title:'Feature2', Icon:'mic', Color:'#6E6E6E'}, 
  //     { Title:'Feature3', Icon:'mic', Color:'#6E6E6E'},
  //     { Title:'Feature4', Icon:'mic', Color:'#6E6E6E'},
  //     { Title:'Feature5', Icon:'mic', Color:'#6E6E6E'}
  //   ]
  // };
  
  ngOnInit(): void {
  }

}
