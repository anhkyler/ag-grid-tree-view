import { Component, OnInit } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IOlympicData } from './interfaces';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
public columnDefs: ColDef[] = [
  { field: 'athlete', minWidth: 170 },
  { field: 'age' },
  { field: 'country' },
  { field: 'year' },
  { field: 'date' },
  { field: 'sport' },
  { field: 'gold' },
  { field: 'silver' },
  { field: 'bronze' },
  { field: 'total' },
];
public defaultColDef: ColDef = {
  editable: true,
  filter: true,
};
public rowData!: IOlympicData[];
public themeClass: string =
  "ag-theme-quartz";

constructor(private http: HttpClient) {}

onGridReady(params: GridReadyEvent<IOlympicData>) {
  this.http
    .get<IOlympicData[]>(
      'https://www.ag-grid.com/example-assets/olympic-winners.json'
    )
    .subscribe((data) => (this.rowData = data));
}

  ngOnInit(): void {
  }

}
