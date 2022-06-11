import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AppComponent } from './app.component';
const routes: Routes = [  
  { path: 'dashboard-component', component: DashboardComponent},
  {path:'app-component', component: AppComponent },
  {path: 'firstpage-component', component: FirstpageComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AppComponent,DashboardComponent,FirstpageComponent]