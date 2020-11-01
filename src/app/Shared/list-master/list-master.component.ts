import { Component, OnInit, ElementRef } from '@angular/core';
import { DataService } from '../data.services';
import { Router } from '@angular/router';
import { MasterMainService } from '../../Services/masters-main-service';

@Component({
  selector: 'app-list-master',
  templateUrl: './list-master.component.html',
  styleUrls: ['./list-master.component.css']
})
export class ListMasterComponent implements OnInit {

  message:string;
  constructor(private data: DataService,private el: ElementRef,private router: Router,private MasterMainService:MasterMainService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }
  onClickAddMaster(moduleText){
    this.data.changeMessage(moduleText)
    // To redirect to other path w/o refreshing page (Observables)
   const url = this.el.nativeElement.href;    
   this.router.navigate(['/addedit'], {
       skipLocationChange: true
      })
    }
}
