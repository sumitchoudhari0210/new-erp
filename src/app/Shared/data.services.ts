import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  //To set module title
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  //To set post url dynamically
  private UrlSource = new BehaviorSubject('http://localhost:64599/');
  currentUrl=this.UrlSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  changeUrl(url:string){
    this.UrlSource.next(url);
  }

}