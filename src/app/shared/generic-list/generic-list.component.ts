import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { GenericListDataSource, GenericListItem } from './generic-list-datasource';
import { CustomerModel } from '../models/customer.model';
import { Features } from '../models/feature.model';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss']
})
export class GenericListComponent implements AfterViewInit, OnInit {
  @Input() featureId: Number;
  @Input() maxheight: string;
  feature: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<GenericListItem>;
  dataSource: GenericListDataSource;
  displayedColumns: string[];
  selection = new SelectionModel<GenericListItem>(true, []);
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  // ['id', 'name', 'column'];

  constructor(public dialog: MatDialog){

  }

  ngOnInit() {
    this.getColumns();
    this.dataSource = new GenericListDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }


  getColumns () {
    switch(this.featureId) {
      case Features.CUSTOMER : 
        this.feature = "Customers"; 
        this.displayedColumns = Object.keys(Reflect.construct(CustomerModel, [])); 
        break;
      case Features.PRESCRIPTION :
        this.feature = "Prescription Items";
        this.displayedColumns = Object.keys(Reflect.construct(ProductModel, []));
        break;
      default: return null;
    }

    //this.displayedColumns = this.displayedColumns.concat(['edit']);
  }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.data.forEach(row => this.selection.select(row));
    }
  
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: GenericListItem): string {
      if (!row) {
        return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Id + 1}`;
    }
}
