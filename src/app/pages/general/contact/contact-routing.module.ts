import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  {
    path: '', component: ContactComponent,
    children: [
      { path: '', loadChildren: () => import('./mailing/mailing.module').then(m => m.MailingModule) },
      { path: 'mailing', loadChildren: () => import('./mailing/mailing.module').then(m => m.MailingModule) },
      { path: 'mapping', loadChildren: () => import('./mapping/mapping.module').then(m => m.MappingModule) },
      { path: 'website', loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
