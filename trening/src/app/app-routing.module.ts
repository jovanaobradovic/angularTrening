import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { MojTreningComponent } from './moj-trening/moj-trening.component';
import { OpisVezbeComponent } from './opis-vezbe/opis-vezbe.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent}, 
  {path: 'kontakt', component: KontaktComponent}, 
  {path: 'moj-trening', component: MojTreningComponent},
  {path: 'opis', component: OpisVezbeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




