import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../data-service/data.service';

@Injectable({
  providedIn: 'root'
})
export class AwsSimpleServiceService extends DataService{
  // baseMessage = "http://localhost:9000/file/gets3objects";mapping
  baseMessage = "http://localhost:9000/mapping";
  deleteURI = "http://localhost:9000/file/delete";
  searchURI = "http://localhost:9000/file/prefix";
  downloadURI = "http://localhost:9000/file/download";
  createURI = "http://localhost:9000/file/createemptyobject";
  uploadFileURI = "http://localhost:9000/file/uploadobject";
  constructor(private http: HttpClient) {
    super();
  }

  getSampleData(): Observable<any>{
    return this.http.get<any>(this.baseMessage);
  }

  removeObjects(objects:any): Observable<any>{
    return this.http.post(this.deleteURI, objects);
  }

  searchByPrefix(prefix: string){
    let params: HttpParams = new HttpParams();
    params = params.append('prefix',prefix);
    return this.http.get(this.searchURI,{params: params});
  }

  createEmptyFolder(key: string){
    return this.http.post(this.createURI,key);
  }

  downloadBykey(keyPath: string){
    let params: HttpParams = new HttpParams();
    params = params.append('keyPath',keyPath);
    return this.http.get(this.downloadURI,
                                        {
                                          params: params,
                                          responseType:'blob',
                                          headers: {'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                                                    'Content-Disposition':'attachment'}});
  }

  uploadFile(file: File, keyPath: string) {
    var formData = new FormData();
      formData.append("file", file);
      formData.append("fileName", file.name );
      formData.append("keyPath",keyPath);
        return this.http.post(this.uploadFileURI, formData)
  }

  private getEventMessage(event: HttpEvent<any>, file: File){
    console.log(event);
  }
}
