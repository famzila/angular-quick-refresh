import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideContentComponent } from './guides/guide-content/guide-content.component';
import { GuidesComponent } from './guides/guides.component';

const routes: Routes = [
    { path: '', component: GuidesComponent, },
    { path: 'guide/:name', component: GuideContentComponent, },
    // { path: 'course', loadChildren: () => import('./course/content.module').then(m => m.CourseModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
