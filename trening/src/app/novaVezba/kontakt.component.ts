import { Component  } from '@angular/core';
import { TreningService } from '../services/trening/trening.service';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent {
  noviTrening = {
    id: 0,
    naziv_vezbe: '',
    opis: '',
    image: '',
    trajanje: 0,
    tezina: '',
    ukupnoTrajanje: 0
  };



  constructor(private treningService: TreningService) {  }




  dodajNoviTrening(formaTrening: any) {
    this.treningService.dodajNoviTrening(this.noviTrening);
    this.noviTrening = {
    id: 0,
    naziv_vezbe: '',
    opis: '',
    image: '',
    trajanje: 0,
    tezina: '',
    ukupnoTrajanje: 0
    };

    alert('Nova vežba je dodata. Vrati se na stranicu VEŽBE');

    formaTrening.reset();
  }




}
