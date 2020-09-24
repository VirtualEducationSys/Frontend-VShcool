import { Component, OnInit } from '@angular/core';
import { NavigationStyleSetting } from 'src/app/shared/models/feature.model';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.scss']
})
export class AdminLandingComponent implements OnInit {

  _menuSetting:NavigationStyleSetting = {
    SectionTitle:"ADMINISTRATION",
    Color:'#32936f',
    Features:[
      { Title:'Planification', Icon:'calendar_today', Color:'#32936f', Route:'/administration/timesheet'},
      { Title:'Etudiants', Icon:'school', Color:'#32936f', Route:'/administration/student'},
      { Title:'Personnel', Icon:'person', Color:'#32936f', Route:'/administration/staff'},
      { Title:'Salles', Icon:'sensor_window', Color:'#32936f', Route:'/administration/classroom'},
      { Title:'Fournitures', Icon:'list_alt', Color:'#32936f', Route:'/administration/supply'},
      
      // { Title:'Feature1', Icon:'mic', Color:'#6E6E6E'}, 
      // { Title:'Feature2', Icon:'mic', Color:'#6E6E6E'}, 
      // { Title:'Feature3', Icon:'mic', Color:'#6E6E6E'},
      // { Title:'Feature4', Icon:'mic', Color:'#6E6E6E'},
      // { Title:'Feature5', Icon:'mic', Color:'#6E6E6E'}
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
