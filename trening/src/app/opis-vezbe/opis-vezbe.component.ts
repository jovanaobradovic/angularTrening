import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TreningService } from '../services/trening/trening.service';
import { Trening } from '../shared/trening';

@Component({
  selector: 'app-opis-vezbe',
  templateUrl: './opis-vezbe.component.html',
  styleUrls: ['./opis-vezbe.component.scss']
})
export class OpisVezbeComponent {
  constructor(private route: ActivatedRoute,private treningService:TreningService) { }
  naziv_vezbe:string = "";
  trening:Trening;

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.naziv_vezbe =  params['naziv_vezbe'];
       
      }
    )
    
     this.treningService.getAll().forEach((tr)=>{
      if(tr.naziv_vezbe==this.naziv_vezbe)this.trening = tr;
    });
  }

}
