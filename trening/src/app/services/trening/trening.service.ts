import { Injectable } from '@angular/core';
import { Trening } from 'src/app/shared/trening';

@Injectable({
  providedIn: 'root'
})
export class TreningService {
mojiTreninzi: Trening[] = [];

  constructor() { }

  getAll(): Trening[]{
    return[
      {
        id: 1,
        naziv_vezbe: 'Trbusnjaci',
        opis: 'Neki opis Neki opis Neki opis Neki opis Neki opis Neki opis Neki opis ',
        image: '../../assets/images/abs.jpg',
        trajanje: 10,
        tezina: 'Lako',
        ukupnoTrajanje: 0,
      },
      {
        id: 2,
        naziv_vezbe: 'Ruke',
        opis: 'Neki opis Neki opis Neki opis Neki opis Neki opis Neki opis Neki opis ',
        image: '../../assets/images/abs.jpg',
        trajanje: 8,
        tezina: 'Srednje',
        ukupnoTrajanje: 0,
      },
      {
        id: 3,
        naziv_vezbe: 'Noge',
        opis: 'Neki opis Neki opis Neki opis Neki opis Neki opis Neki opis Neki opis ',
        image: '../../assets/images/abs.jpg',
        trajanje: 8,
        tezina: 'Tesko',
        ukupnoTrajanje: 0,
      },
    ]
  }

dodajTrening(trening: Trening){
  const existingProduct = this.mojiTreninzi.find((p) => p.naziv_vezbe == trening.naziv_vezbe);
    
  if(!existingProduct){
    this.mojiTreninzi.push(trening);
  }
  trening.ukupnoTrajanje += trening.trajanje;
  alert(trening.naziv_vezbe + " trening uspesno dodat");
 


}

ukloniTrening(trening: Trening){

  if(trening.ukupnoTrajanje - trening.trajanje == 0){
    const index = this.mojiTreninzi.findIndex((p) => p.naziv_vezbe == trening.naziv_vezbe);
  this.mojiTreninzi.splice(index, 1);
  }else{
    trening.ukupnoTrajanje -= trening.trajanje;
  }

}



}
