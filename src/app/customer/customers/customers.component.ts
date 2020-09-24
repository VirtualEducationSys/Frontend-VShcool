import { Component, OnInit } from '@angular/core';
import { Features } from 'src/app/shared/models/feature.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  
  thisFeature: Number = Features.CUSTOMER;
  constructor() { }

  ngOnInit(): void {
  }

}
