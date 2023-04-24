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
    opis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '../../assets/images/abs.jpg',
    trajanje: 10,
    tezina: 'Lako',
    ukupnoTrajanje: 0,
  },
  {
    id: 2,
    naziv_vezbe: 'Trbusnjaci 2.tip',
    opis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '../../assets/images/abs2.jpg',
    trajanje: 19,
    tezina: 'Srednje',
    ukupnoTrajanje: 0,
  },
  {
    id: 3,
    naziv_vezbe: 'Ruke bez tegova',
    opis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '../../assets/images/ruke.jpg',
    trajanje: 8,
    tezina: 'Lako',
    ukupnoTrajanje: 0,
  },
  {
    id: 4,
    naziv_vezbe: 'Ruke sa tegovima',
    opis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '../../assets/images/rukeTegovi1.jpg',
    trajanje: 5,
    tezina: 'Srednje',
    ukupnoTrajanje: 0,
  },
  {
    id: 5,
    naziv_vezbe: 'Čučnjevi',
    opis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '../../assets/images/cucnjevi.jpg',
    trajanje: 8,
    tezina: 'Lako',
    ukupnoTrajanje: 0,
  },
  {
    id: 6,
    naziv_vezbe: 'Čučnjevi sa trakama',
    opis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '../../assets/images/cucnjeviTraka2.jpg',
    trajanje: 8,
    tezina: 'Teško',
    ukupnoTrajanje: 0,
  },
  {
    id: 7,
    naziv_vezbe: 'Noge na podu',
    opis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '../../assets/images/nogePod.jpg',
    trajanje: 10,
    tezina: 'Lako',
    ukupnoTrajanje: 0,
  },
  {
    id: 8,
    naziv_vezbe: 'Noge u stajaćem položaju',
    opis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '../../assets/images/nogeStajaci.jpg',
    trajanje: 5,
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
