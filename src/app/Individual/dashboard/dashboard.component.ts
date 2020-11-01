import { Component, OnInit, ElementRef } from '@angular/core';
import { DataService } from '../../Shared/data.services';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    message:string;
    constructor(private data: DataService,private router: Router,private route: ActivatedRoute,private el: ElementRef ) {         
    }
    ngOnInit() {
      this.data.changeMessage("Dashboard")
      this.data.currentMessage.subscribe(message => this.message = message)
    }
    onClickMe(message) {
      // To set Global variable
      this.data.changeMessage(message)
      // To redirect to other path w/o refreshing page (Observables)
     const url = this.el.nativeElement.href;    
     this.router.navigate(['/list'], {
         skipLocationChange: true,
     });

     event.preventDefault();
    }
}
