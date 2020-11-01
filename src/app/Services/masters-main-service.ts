import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { OnInit } from '@angular/core';
import { DataService } from '../Shared/data.services';
import { MasterMainModel } from '../Models/main-master-model';

@Injectable()
export class MasterMainService implements OnInit {
    ngOnInit(): void {
         this.data.currentUrl.subscribe(url =>this.url=url)
        console.log(this.url)
    }
    url :string;

    constructor(private http:Http,private data: DataService) { 
        this.data.currentUrl.subscribe(url =>this.url=url)
    }
    
    getDataWithObservable(): Observable<MasterMainModel[]> {
        let headers = new Headers({withCredentials:true});
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.url,options)
		   .map(this.extractData)
		   .catch(this.handleErrorObservable);
    }
    addDataWithObservable(MasterMainModel:MasterMainModel): Observable<MasterMainModel> {
	let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url, MasterMainModel, options)
                   .map(this.extractData)
                   .catch(this.handleErrorObservable);
    }
   	
    private extractData(res: Response) {
    let body = res.json();
        return body || {};
    }
    private handleErrorObservable (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.message || error);
    }
} 