import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { TreningComponent } from './trening/trening.component';
import { FormsModule } from '@angular/forms';
import { MojTreningComponent } from './moj-trening/moj-trening.component';
import { OpisVezbeComponent } from './opis-vezbe/opis-vezbe.component';
import { KontaktComponent } from './novaVezba/kontakt.component';
import { ShortenPipe } from './shorten.pipe';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TreningComponent,
    MojTreningComponent,
    OpisVezbeComponent,
    KontaktComponent,
    ShortenPipe,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
