import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AppComponent } from './app.component';
import { UpperPanelComponent } from './Shared/upper-panel/upper-panel.component';
import { DashboardComponent } from './Individual/dashboard/dashboard.component';
import { AddEditMasterComponent } from './Shared/add-edit-master/add-edit-master.component';
import { SimpleGlobal } from 'ng2-simple-global';
import { DataService } from './Shared/data.services';
import { ListMasterComponent } from './Shared/list-master/list-master.component';
import { ListMasterMainComponent } from './Shared/list-master-main/list-master-main.component';
import { AddeditMasterMainComponent } from './Shared/addedit-master-main/addedit-master-main.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BasicControlsComponent } from './Shared/FormControls/basic-controls/basic-controls.component';
import { HttpModule } from '@angular/http';
import { MasterMainService } from './Services/masters-main-service';
import { DatePipe } from '@angular/common';

const config: ExtraOptions = {
  onSameUrlNavigation: 'reload'
};

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'list',
    component: ListMasterComponent
  },
  
  {
    path: 'addedit',
    component: AddEditMasterComponent
  },
  {
    path:'listmaster',
    component:ListMasterMainComponent
  }
  ,
  {
    path:'addeditmaster',
    component:AddeditMasterMainComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UpperPanelComponent,
    DashboardComponent,
    AddEditMasterComponent,
    ListMasterComponent,
    ListMasterMainComponent,
    AddeditMasterMainComponent,
    BasicControlsComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes,config)    
    
  ],
  exports:[RouterModule],
  providers: [
    SimpleGlobal,
    DataService,
    MasterMainService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
