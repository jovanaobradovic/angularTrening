import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MojTreningComponent } from './moj-trening/moj-trening.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, {path: 'moj-trening', component: MojTreningComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
