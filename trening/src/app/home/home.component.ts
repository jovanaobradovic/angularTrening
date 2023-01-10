import { Component, OnInit } from '@angular/core';
import { TreningService } from '../services/trening/trening.service';
import { Trening } from '../shared/trening';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  search: string = "";
  heading: string = 'Napravi svoj trening!';
  treninzi: Trening[] =[];
  tezina: string = "";

  constructor(private treningServive: TreningService){}

  ngOnInit(): void {
    this.treninzi = this.treningServive.getAll();
  }

  pretrazi(){
    this.treninzi = this.treningServive.getAll();
   // if(this.search!="")this.treninzi = this.treninzi.filter((t) => t.naziv_vezbe.toLowerCase() == this.search.toLowerCase());
   if(this.search!="")this.treninzi = this.treninzi.filter((t) => t.naziv_vezbe.toLowerCase().includes(this.search.toLowerCase()) );
    if(this.tezina!="")this.treninzi = this.treninzi.filter((t) => t.tezina == this.tezina);

 
  }

  ponistiFilter(){
    this.search = "";
    this.tezina = "";
    this.treninzi = this.treningServive.getAll();
  }

}
