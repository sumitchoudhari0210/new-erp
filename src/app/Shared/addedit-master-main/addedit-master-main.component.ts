import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.services';

@Component({
  selector: 'app-addedit-master-main',
  templateUrl: './addedit-master-main.component.html',
  styleUrls: ['./addedit-master-main.component.css']
})
export class AddeditMasterMainComponent implements OnInit {
  message:string;
  constructor(private data: DataService) { }
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }
}
