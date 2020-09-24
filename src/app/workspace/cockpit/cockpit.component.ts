import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { NavigationStyleSetting } from 'src/app/shared/models/feature.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  constructor() { }

  _menuSetting:NavigationStyleSetting = {
    SectionTitle:"WORKSPACE",
    Color:'#2274a5',
    Features:[
      { Title:'Salle', Icon:'sensor_window', Color:'#2274a5', Route:'/workspace/classroom'},
      { Title:'Feature1', Icon:'mic', Color:'#2274a5', Route:'Classroom'}, 
      { Title:'Feature2', Icon:'mic', Color:'#2274a5', Route:'Classroom'}, 
      { Title:'Feature3', Icon:'mic', Color:'#2274a5', Route:'Classroom'},
      { Title:'Feature4', Icon:'mic', Color:'#2274a5', Route:'Classroom'},
      { Title:'Feature5', Icon:'mic', Color:'#2274a5', Route:'Classroom'},
      { Title:'Feature6', Icon:'mic', Color:'#2274a5', Route:'Classroom'},
      { Title:'Feature7', Icon:'mic', Color:'#2274a5', Route:'Classroom'},
      { Title:'Feature8', Icon:'mic', Color:'#2274a5', Route:'Classroom'},
      { Title:'Feature9', Icon:'mic', Color:'#2274a5', Route:'Classroom'}
    ]
  };
  

  ngOnInit(): void { 
  }

}
