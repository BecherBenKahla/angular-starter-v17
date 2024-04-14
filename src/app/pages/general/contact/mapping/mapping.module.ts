import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MappingRoutingModule } from './mapping-routing.module';
import { MailingComponent } from '../mailing/mailing.component';


@NgModule({
  declarations: [
    MailingComponent
  ],
  imports: [
    CommonModule,
    MappingRoutingModule
  ],
  exports: [
    MailingComponent
  ]
})
export class MappingModule { }
