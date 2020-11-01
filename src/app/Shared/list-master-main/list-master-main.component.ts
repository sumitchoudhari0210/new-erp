import { Component, OnInit, ElementRef, ChangeDetectorRef, Input } from '@angular/core';
import { DataService } from '../data.services';
import { Router } from '@angular/router';
import { MasterMainService } from '../../Services/masters-main-service';
import { MasterMainModel } from '../../Models/main-master-model';

@Component({
  selector: 'app-list-master-main',
  templateUrl: './list-master-main.component.html',
  styleUrls: ['./list-master-main.component.css']
})
export class ListMasterMainComponent implements OnInit {
  masterModels: MasterMainModel[];
  masterModel= new MasterMainModel();
  errorMessage:string;
  url:string;
  @Input() message:string;
  previous;
  constructor(private data: DataService,private el: ElementRef,private router: Router,private MasterMainService:MasterMainService) { }

  ngOnInit() {
        this.previous = this.message;
        this.data.currentMessage.subscribe(message => this.message = message)
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        // To change post url based on selected module
        this.fetchData();
  }
  onClickAddMasterMain(moduleText){
        this.data.changeMessage(moduleText)
        // To redirect to other path w/o refreshing page (Observables)
        const url = this.el.nativeElement.href;    
        this.router.navigate(['/addeditmaster'], {
          skipLocationChange: true,
          })
    }
    fetchData(): void {
        this.MasterMainService.getDataWithObservable()
        .subscribe( masterModels => this.masterModels = masterModels,
           error => this.errorMessage = <any>error);    
    }
}
