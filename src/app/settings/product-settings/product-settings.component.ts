import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-settings',
  templateUrl: './product-settings.component.html',
  styleUrls: ['./product-settings.component.scss']
})
export class ProductSettingsComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

}
