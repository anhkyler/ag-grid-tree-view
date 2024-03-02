import { Component, OnInit } from '@angular/core';
import {
  ColDef,
  GetDataPath,
  GetRowIdFunc,
  GetRowIdParams,
  GridApi,
  GridReadyEvent,
  ICellRendererComp,
  ICellRendererParams,
  RowNode,
  SelectCellEditor,
} from 'ag-grid-community';
import 'ag-grid-enterprise';
import {AwsSimpleServiceService} from '../services/aws-s3/aws-simple-service.service';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import {DownloadButtonRendererComponent} from './download-renderer.component';
import { saveAs } from 'file-saver';
import * as FileSaver from 'file-saver';
declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  key: String | undefined;
  // existingPath: String | undefined;
  s3protalFormControl!: UntypedFormGroup;
  fileToUpload: File | null = null;
  public rowSelection: 'single' | 'multiple' = 'multiple';
  public defaultColDef: ColDef = {
    flex: 1,
    filter: true,
    sortable: true,
    resizable: true,
  };
  public autoGroupColumnDef: ColDef = {
    headerName: 'Files',
    minWidth: 330,
    cellRendererParams: {
      checkbox: true,
      suppressCount: true,
      innerRenderer: getFileCellRenderer(),
    },
  };
  // public rowData: any[] | null = getData();
  public rowData: any;
  public groupDefaultExpanded = -1;
  public getDataPath: GetDataPath = (data: any) => {
    return data.parsePath;
  };
  public getRowId: GetRowIdFunc = (params: GetRowIdParams) => {
    return params.data.id;
  };
  fileUpload: File | undefined;
  constructor(private awsSimpleServiceService: AwsSimpleServiceService,
    private fb:UntypedFormBuilder) { }

  ngOnInit(): void {
    this.getData();
    this.createForm();
  }

  createForm(){
    this.s3protalFormControl = this.fb.group({
      searchPrefix: new UntypedFormControl(''),
      existingPath: new UntypedFormControl(''),
      key: new UntypedFormControl(''),
      existingUploadPath: new UntypedFormControl('')
    });
  }

  getData(){
    this.awsSimpleServiceService.getSampleData().subscribe(
      (data : any) => {
        console.log(data);
        this.rowData = data;
      }, (err:any) => {
        console.log(err);
      }
    )
  }
  private gridApi!: GridApi;

  public columnDefs: ColDef[] = [
    {
      field: 'dateModified',
      minWidth: 250,
      comparator: (d1, d2) => {
        return new Date(d1).getTime() < new Date(d2).getTime() ? -1 : 1;
      }
      // ,
      // cellRenderer: (params: any) => {
      //   console.log(params.value);
      //   if(params.value && params.node.key.includes('.')){
      //     return (params.value);
      //   }else{
      //     return '';
      //   }
      // }
    },
    {
      field: 'size',
      aggFunc: 'sum',
      valueFormatter: (params) => {
        return params.value
          ? Math.round(params.value * 10) / 10 + ' MB'
          : '0 MB';
      },
    },
    {
      field: 'Download',
      cellRenderer: DownloadButtonRendererComponent,
      cellRendererParams: {
        onClick: this.onDownloadFile.bind(this)
      }
    },
  ];

  onDownloadFile(selectedFile: any){
    console.log(selectedFile);
    const fileName = selectedFile.parsePath[selectedFile.parsePath.length-1];
    this.awsSimpleServiceService.downloadBykey(selectedFile.filePath).subscribe(
      (data:any) => {
        console.log(data);
        FileSaver.saveAs(data, fileName);
        console.log(data);
      },(err: any) => {
        console.log(err);
      }
    )
  }

  addNewGroup() {
    var newGroupData = [
      {
        id: getNextId(),
        parsePath: ['Music', 'wav', 'hit_' + new Date().getTime() + '.wav'],
        dateModified: 'Aug 23 2017 11:52:00 PM',
        size: 58.9,
      },
    ];
    this.gridApi.applyTransaction({ add: newGroupData });
  }

  handleFileInput(e: any) {
    this.fileToUpload = e.target.files[0]? e.target.files[0] : null;
    // this.fileToUpload = target.item(0);
    console.log( this.fileToUpload);
    // this.fileToUpload = target!.files![0];
    // this.awsSimpleServiceService.uploadFile(this.fileToUpload!).subscribe(
    //   (result: any) => {
    //     console.log(result)
    //   },(err:any) => {
    //     console.log(err);
    //   }
    // )
  }



  removeSelected() {
    var selectedNode = this.gridApi.getSelectedNodes(); // single selection
    if (!selectedNode) {
      console.warn('No nodes selected!');
      return;
    }

    const arrKey: Array<String> = [];
    for(var aNode of selectedNode){
      console.log(aNode);
      arrKey.push(aNode.data.filePath);
      // arrKey.push((getKeys([], aNode).reverse()).join("/"));
    }
    console.log(arrKey);
    this.onRemovingObjects(arrKey, selectedNode);
    
    // this.gridApi.applyTransaction({ remove: getRowsToRemove(selectedNode) });
    // for(var aNode of selectedNode){
    //   this.gridApi.applyTransaction({ remove: getRowsToRemove(aNode) });
    // }
    
    // console.log(selectedNode[0]);
    // // console.log(selectedNode[0].key);
    // // console.log(selectedNode[0].data);
    // console.log(selectedNode[0].allChildrenCount === null ? 'file': 'folder');
    // const arr = getKeys([], selectedNode[0]).reverse();
    // console.log(arr);
    // // console.log(this.getKeys([], selectedNode[0]));
    // // this.gridApi.applyTransaction({ remove: getRowsToRemove(selectedNode) });
  }

  onRemovingObjects(arrKeys: any, selectedNode: any){
    this.awsSimpleServiceService.removeObjects(arrKeys).subscribe(
      data => {
        console.log(data);
        if(data === true){
          for(var aNode of selectedNode){
              this.gridApi.applyTransaction({ remove: getRowsToRemove(aNode) });
          }
        }else{
          console.log("Not Able to Delete. Please Check Logs");
        }
           
      },(err) => {
        console.log(err);
      }
    )
  }
  

  // moveSelectedNodeToTarget(targetRowId: string) {
  //   var selectedNode = this.gridApi.getSelectedNodes()[0]; // single selection
  //   if (!selectedNode) {
  //     console.warn('No nodes selected!');
  //     return;
  //   }
  //   var targetNode = this.gridApi.getRowNode(targetRowId)!;
  //   var invalidMove =
  //     selectedNode.key === targetNode.key ||
  //     isSelectionParentOfTarget(selectedNode, targetNode);
  //   if (invalidMove) {
  //     console.warn('Invalid selection - must not be parent or same as target!');
  //     return;
  //   }
  //   var rowsToUpdate = getRowsToUpdate(selectedNode, targetNode.data.parsePath);
  //   this.gridApi.applyTransaction({ update: rowsToUpdate });
  // }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  searchByPrefix(){
    const searchPrefix = this.s3protalFormControl.controls['searchPrefix'].value;
    console.log(searchPrefix);

    this.awsSimpleServiceService.searchByPrefix(searchPrefix).subscribe(
      (data: any) => {
        console.log(data);
        this.rowData = data;
      }, (err: any) => {
        console.log(err);
      }
    );
  }

  createEmptyObject(){
    const fullPath = this.s3protalFormControl.controls['existingPath'].value + "/" + this.s3protalFormControl.controls['key'].value;
    this.awsSimpleServiceService.createEmptyFolder(fullPath).subscribe(
      (data:any) => {
        console.log(data);
      },(err: any) => {
        console.log(err);
      }
    );
    console.log(fullPath);
  }

  onUploadFile(){
    const keyPath = this.s3protalFormControl.controls['existingUploadPath'].value ;
    this.awsSimpleServiceService.uploadFile(this.fileToUpload!, keyPath).subscribe(
      (result: any) => {
        console.log(result)
      },(err:any) => {
        console.log(err);
      }
    )
  }

  onSelectionChanged(event: any){
    const selectedRows = this.gridApi.getSelectedRows();
    console.log(selectedRows[0]);
    const extPath = selectedRows[0].filePath;
    if(!selectedRows[0].filePath.includes(".")){
      this.s3protalFormControl.controls['existingPath'].setValue(extPath);
      this.s3protalFormControl.controls['existingUploadPath'].setValue(extPath);
    }
      
      
    
  }
}
function getNextId() {
  if (!window.nextId) {
    window.nextId = 15;
  } else {
    window.nextId++;
  }
  return window.nextId;
}
function getFileCellRenderer() {
  class FileCellRenderer implements ICellRendererComp {
    eGui: any;
    init(params: ICellRendererParams) {
      var tempDiv = document.createElement('div');
      var value = params.value;
      var icon = getFileIcon(params.value);
      tempDiv.innerHTML = icon
        ? '<span><i class="' +
        icon +
        '"></i>' +
        '<span class="filename"></span>' +
        value +
        '</span>'
        : value;
      this.eGui = tempDiv.firstChild;
    }
    getGui() {
      return this.eGui;
    }
    refresh() {
      return false;
    }
  }
  return FileCellRenderer;
}
function getRowsToRemove(node: RowNode) {
  var res: any[] = [];
  const children = node.childrenAfterGroup || [];
  for (var i = 0; i < children.length; i++) {
    res = res.concat(getRowsToRemove(children[i]));
  }
  // ignore nodes that have no data, i.e. 'filler groups'
  return node.data ? res.concat([node.data]) : res;
}
function isSelectionParentOfTarget(selectedNode: RowNode, targetNode: RowNode) {
  var children = selectedNode.childrenAfterGroup || [];
  for (var i = 0; i < children.length; i++) {
    if (targetNode && children[i].key === targetNode.key) return true;
    isSelectionParentOfTarget(children[i], targetNode);
  }
  return false;
}
function getRowsToUpdate(node: RowNode, parentPath: string[]) {
  var res: any[] = [];
  var newPath = parentPath.concat([node.key!]);
  if (node.data) {
    // groups without data, i.e. 'filler groups' don't need path updated
    node.data.parsePath = newPath;
  }
  var children = node.childrenAfterGroup || [];
  for (var i = 0; i < children.length; i++) {
    var updatedChildRowData = getRowsToUpdate(children[i], newPath);
    res = res.concat(updatedChildRowData);
  }
  // ignore nodes that have no data, i.e. 'filler groups'
  return node.data ? res.concat([node.data]) : res;
}
function getFileIcon(name: string) {
  return endsWith(name, '.mp3') || endsWith(name, '.wav')
    ? 'fa fa-file-audio'
    : endsWith(name, '.xlsx')
      ? 'fa fa-file-excel-o'
      : endsWith(name, '.txt')
        ? 'fa fa-file'
        : endsWith(name, '.pdf')
          ? 'fa fa-file-pdf'
          : 'fa fa-folder';
}
function endsWith(str: string | null, match: string | null) {
  var len;
  if (str == null || !str.length || match == null || !match.length) {
    return false;
  }
  len = str.length;
  return str.substring(len - match.length, len) === match;
}

function getKeys(array: any |null, node: any | null): any{
  if(node.parent.key === null){
    array.push(node.key);
    return array;
  }else{
    array.push(node.key);
    return getKeys(array, node.parent)
  }
}