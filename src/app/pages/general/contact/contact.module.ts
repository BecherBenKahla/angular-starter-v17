import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { RouterLink, RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    ContactRoutingModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
