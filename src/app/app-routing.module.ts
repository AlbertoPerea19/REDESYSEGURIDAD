import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HoneyNetsComponent } from './honey-nets/honey-nets.component';
import { TunnelingComponent } from './tunneling/tunneling.component';
import { IotComponent } from './iot/iot.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path:'honeynets', component: HoneyNetsComponent },
  { path:'tunneling', component: TunnelingComponent },
  { path:'iot', component: IotComponent},
  { path:'team', component: TeamComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
