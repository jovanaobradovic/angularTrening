import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TreningService } from '../services/trening/trening.service';
import { Trening } from '../shared/trening';

@Component({
  selector: 'app-trening',
  templateUrl: './trening.component.html',
  styleUrls: ['./trening.component.scss']
})
export class TreningComponent {
@Input() trening: Trening;


constructor(private treningServise: TreningService){
  
}


onDodajTrening(){
  this.treningServise.dodajTrening(this.trening);
}



buttonClick = true;

}
