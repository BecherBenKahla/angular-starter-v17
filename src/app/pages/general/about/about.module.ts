import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { RouterLink, RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    RouterLink,
    RouterOutlet
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
