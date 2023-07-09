import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './MyComponents/list/list.component';
import { AboutComponent } from './MyComponents/about/about.component';

const routes: Routes = [


  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: '', component: ListComponent },
  { path: 'about', component: AboutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
