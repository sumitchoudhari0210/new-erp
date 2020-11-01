import { Component, OnInit, Input, ElementRef } from '@angular/core';

import { DataService } from '../../Shared/data.services';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-upper-panel',
  templateUrl: './upper-panel.component.html',
  styleUrls: ['./upper-panel.component.css']
})
export class UpperPanelComponent implements OnInit {
  message:string;
  url:string;
  constructor(private data: DataService,private router: Router,private route: ActivatedRoute,private el: ElementRef ) {         
  }
  ngOnInit() {
    this.data.changeMessage("Dashboard")
    this.data.currentMessage.subscribe(message => this.message = message)
  }
  onClickMainMasters(message) {
    // To set Global variable
    this.data.changeMessage(message)
    console.log(this.message +"upper panel")
    switch (this.message)
    {
        case 'Colors':
              this.data.changeUrl('http://localhost:64599/api/Colors');
              this.data.currentUrl.subscribe(url =>this.url=url)
              // To redirect to other path w/o refreshing page (Observables)
                this.router.navigate(['/listmaster'], {
                  skipLocationChange: true,
              });
              event.preventDefault();
              break
        case 'Units':
              this.data.changeUrl('http://localhost:64599/api/Units');
              this.data.currentUrl.subscribe(url =>this.url=url)
              // To redirect to other path w/o refreshing page (Observables)
                this.router.navigate(['/listmaster'], {
                  skipLocationChange: true,
              }); 
              event.preventDefault();
              break
        case 'Departments':
              this.data.changeUrl('http://localhost:64599/api/Departments');
              this.data.currentUrl.subscribe(url =>this.url=url)
              // To redirect to other path w/o refreshing page (Observables)
                this.router.navigate(['/listmaster'], {
                  skipLocationChange: true,
              }); 
              event.preventDefault();
              break
    }

   
  }

}
