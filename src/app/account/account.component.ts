import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // AG Grid Component
import { ColDef, GetDataPath, GridApi, GridReadyEvent } from 'ag-grid-community'; // Column Definition Type Interface
import { getData } from './data';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  // rowData = [
  //   { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  //   { make: "Ford", model: "F-Series", price: 33850, electric: false },
  //   { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  // ];

  // // Column Definitions: Defines the columns to be displayed.
  // colDefs: ColDef[] = [
  //   { field: "make" },
  //   { field: "model" },
  //   { field: "price" },
  //   { field: "electric" }
  // ];

  ngOnInit() {
    }
  constructor() { }
  
  private gridApi!: GridApi;

  public columnDefs: ColDef[] = [
    // we're using the auto group column by default!
    { field: 'jobTitle' },
    { field: 'employmentType' },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
  };
  public autoGroupColumnDef: ColDef = {
    headerName: 'Organisation Hierarchy',
    minWidth: 300,
    cellRendererParams: {
      suppressCount: true,
    },
  };
  public rowData: any[] | null = getData();
  public groupDefaultExpanded = -1;
  public getDataPath: GetDataPath = (data: any) => {
    return data.orgHierarchy;
  };
  public themeClass: string =
    "ag-theme-quartz";

  onFilterTextBoxChanged() {
    this.gridApi.setGridOption(
      'quickFilterText',
      (document.getElementById('filter-text-box') as any).value
    );
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

}
