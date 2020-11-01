import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { DataService } from '../../data.services';
import { Observable } from 'rxjs';
import { MasterMainService } from '../../../Services/masters-main-service';
import { MasterMainModel } from '../../../Models/main-master-model';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-basic-controls',
  templateUrl: './basic-controls.component.html',
  styleUrls: ['./basic-controls.component.css']
})
export class BasicControlsComponent implements OnInit{
  masterModels: MasterMainModel[];
  errorMessage:string;
  masterModel= new MasterMainModel();
  message:string;
  url:string;
  name = new FormControl('');

  profileForm = new FormGroup({
    Name: new FormControl(''),
    Code:new FormControl('')
  });
  ngOnInit() : void {
  this.data.currentMessage.subscribe(message => this.message = message)
  this.data.currentUrl.subscribe(url =>this.url=url)
  }
  constructor(private data: DataService,private MasterMainService:MasterMainService, public datepipe: DatePipe) { }
  onSubmit() {
    
  let myDate = new Date(); 
   this.masterModel.Name=this.profileForm.value['Name'];
   this.masterModel.Code=this.profileForm.value['Code'];
   this.masterModel.IsActive=true;
   this.masterModel.IsDeleted=false;
   this.masterModel.CreatedBy='User Name';
   this.masterModel.CreatedDate=this.datepipe.transform(myDate);
   this.masterModel.Id=0;
   this.addData();
  }
  addData(): void {
    this.MasterMainService.addDataWithObservable(this.masterModel)
      .subscribe( book => {
                 console.log("Added succesfuly")	   ;
      },
                       error => this.errorMessage = <any>error);
  }
  private reset() {
          this.masterModel.Id = null;	 
    this.masterModel.Name = null;
    this.masterModel.Code = null;
    this.errorMessage = null;
    this.masterModel = null;
  }
  fetchData(): void {this.MasterMainService.getDataWithObservable()
  .subscribe( masterModels => this.masterModels = masterModels,
                    error => this.errorMessage = <any>error);    
}
}
