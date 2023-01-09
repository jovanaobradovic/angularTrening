import { Component } from '@angular/core';
import { TreningService } from '../services/trening/trening.service';
import { Trening } from '../shared/trening';

@Component({
  selector: 'app-moj-trening',
  templateUrl: './moj-trening.component.html',
  styleUrls: ['./moj-trening.component.scss']
})
export class MojTreningComponent {
mojiTreninzi: Trening[];
ukupnoTrajanje: number = 0;

constructor(private treningService:TreningService){

}

  ngOnInit(){
    this.mojiTreninzi = this.treningService.mojiTreninzi;
    this.izracunajTrajanje();
  }

  onIzbrisiTrenig(trening){
    this.treningService.ukloniTrening(trening);
    
    this.ukupnoTrajanje -= trening.trajanje;
  }
  

  izracunajTrajanje(){
    this.mojiTreninzi.forEach((tr)=>{
      this.ukupnoTrajanje += tr.ukupnoTrajanje;
    })
  }

}
