import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sample } from 'rxjs';
import { SampleComponent } from './sample/sample.component';



const routes: Routes = [
  {path:'',redirectTo:'sample',pathMatch:'full'},
{path:'sample',component:SampleComponent},
  { path: '**', redirectTo: 'employees' }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
