import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortComponent } from './port/port.component';
import { ContactComponent } from './contact/contact.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path:'',redirectTo:'start',pathMatch:'full'},
  {path:'start',component:StartComponent},
  {path:'about',component:AboutComponent},
  {path:'port',component:PortComponent},
  {path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
