import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface GenericListItem {
  FirstName: string;
  LastName: string;
  Id: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: GenericListItem[] = [
  {Id: 1, FirstName: 'Hydrogen', LastName: 'a' },
  {Id: 2, FirstName: 'Helium', LastName: 'a' },
  {Id: 3, FirstName: 'Lithium', LastName: 'a' },
  {Id: 4, FirstName: 'Beryllium', LastName: 'a' },
  {Id: 5, FirstName: 'Boron', LastName: 'a' },
  {Id: 6, FirstName: 'Carbon', LastName: 'a' },
  {Id: 7, FirstName: 'Nitrogen', LastName: 'a' },
  {Id: 8, FirstName: 'Oxygen', LastName: 'a' },
  {Id: 9, FirstName: 'Fluorine', LastName: 'a' },
  {Id: 10, FirstName: 'Neon', LastName: 'a' },
  {Id: 11, FirstName: 'Sodium', LastName: 'a' },
  {Id: 12, FirstName: 'Magnesium', LastName: 'a' },
  {Id: 13, FirstName: 'Aluminum', LastName: 'a' },
  {Id: 14, FirstName: 'Silicon', LastName: 'a' },
  {Id: 15, FirstName: 'Phosphorus', LastName: 'a' },
  {Id: 16, FirstName: 'Sulfur', LastName: 'a' },
  {Id: 17, FirstName: 'Chlorine', LastName: 'a' },
  {Id: 18, FirstName: 'Argon', LastName: 'a' },
  {Id: 19, FirstName: 'Potassium', LastName: 'a' },
  {Id: 20, FirstName: 'Calcium', LastName: 'a' }
];

/**
 * Data source for the GenericList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class GenericListDataSource extends DataSource<GenericListItem> {
  data: GenericListItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<GenericListItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-sIde). If you're using server-sIde pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: GenericListItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-sIde). If you're using server-sIde sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: GenericListItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'LastName': return compare(a.LastName, b.LastName, isAsc);
        case 'Id': return compare(+a.Id, +b.Id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example Id/Name columns (for client-sIde sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
