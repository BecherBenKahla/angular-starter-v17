import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: '', component: AboutComponent,
    children: [
      { path: '', loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule) },
      { path: 'experience', loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule) },
      { path: 'skill', loadChildren: () => import('./skill/skill.module').then(m => m.SkillModule) },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
