import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.services';

@Component({
  selector: 'app-add-edit-master',
  templateUrl: './add-edit-master.component.html',
  styleUrls: ['./add-edit-master.component.css']
})
export class AddEditMasterComponent implements OnInit {
  message:string;
  constructor(private data: DataService) { }
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }
}
