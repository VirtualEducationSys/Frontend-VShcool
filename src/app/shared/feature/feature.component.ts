import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '../models/feature.model';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  @Input() Features:Feature[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
