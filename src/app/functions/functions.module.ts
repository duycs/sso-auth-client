import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule }   from '../shared/shared.module';
import { IndexComponent } from './index/index.component';

import { FunctionsRoutingModule } from './functions-routing.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,  
    FunctionsRoutingModule,
    SharedModule
  ]
})
export class FunctionsModule { }
