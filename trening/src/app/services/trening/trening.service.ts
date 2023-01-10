import { Injectable } from '@angular/core';
import { Trening } from 'src/app/shared/trening';

@Injectable({
  providedIn: 'root'
})
export class TreningService {
mojiTreninzi: Trening[] = [];
sviTreninzi :Trening [] =[
  {
    id: 1,
    naziv_vezbe: 'Trbusnjaci 1.tip',
    opis: 'Neki opis Neki opis Neki opis Neki opis Neki opis Neki opis Neki opis ',
    image: '../../assets/images/abs.jpg',
    trajanje: 10,
    tezina: 'Lako',
    ukupnoTrajanje: 0,
  },
  {
    id: 2,
    naziv_vezbe: 'Trbusnjaci 2.tip',
    opis: 'Neki opis Neki opis Neki opis Neki opis Neki opis Neki opis Neki opis ',
    image: '../../assets/images/abs.jpg',
    trajanje: 19,
    tezina: 'Srednje',
    ukupnoTrajanje: 0,
  },
  {
    id: 3,
    naziv_vezbe: 'Ruke bez tegova',
    opis: 'Neki opis Neki opis Neki opis Neki opis Neki opis Neki opis Neki opis ',
    image: '../../assets/images/abs.jpg',
    trajanje: 8,
    tezina: 'Lako',
    ukupnoTrajanje: 0,
  },
  {
    id: 4,
    naziv_vezbe: 'Ruke sa tegovima',
    opis: 'Neki opis Neki opis Neki opis Neki opis Neki opis Neki opis Neki opis ',
    image: '../../assets/images/abs.jpg',
    trajanje: 5,
    tezina: 'Srednje',
    ukupnoTrajanje: 0,
  },
  {
    id: 5,
    naziv_vezbe: 'Čučnjevi',
    opis: 'Neki opis Neki opis Neki opis Neki opis Neki opis Neki opis Neki opis ',
    image: '../../assets/images/abs.jpg',
    trajanje: 8,
    tezina: 'Lako',
    ukupnoTrajanje: 0,
  },
  {
    id: 6,
    naziv_vezbe: 'Čučnjevi sa trakama',
    opis: 'Neki opis Neki opis Neki opis Neki opis Neki opis Neki opis Neki opis ',
    image: '../../assets/images/abs.jpg',
    trajanje: 8,
    tezina: 'Teško',
    ukupnoTrajanje: 0,
  },
  {
    id: 7,
    naziv_vezbe: 'Noge na podu',
    opis: 'Neki opis Neki opis Neki opis Neki opis Neki opis Neki opis Neki opis ',
    image: '../../assets/images/abs.jpg',
    trajanje: 10,
    tezina: 'Lako',
    ukupnoTrajanje: 0,
  },
  {
    id: 6,
    naziv_vezbe: 'Noge u stajaćem položaju',
    opis: 'Neki opis Neki opis Neki opis Neki opis Neki opis Neki opis Neki opis ',
    image: '../../assets/images/abs.jpg',
    trajanje: 8,
    tezina: 'Teško',
    ukupnoTrajanje: 0,
  },
];

  constructor() { }

 
  getAll(): Trening[]{
    return this.sviTreninzi;
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
