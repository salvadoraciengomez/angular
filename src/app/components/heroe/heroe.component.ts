import { Component } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent  {

  heroe:any={};

  constructor(private activatedRoute:ActivatedRoute, private _heroesSvc:HeroesService) {

    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.heroe=_heroesSvc.getHeroe(params['id']);
    });

  }



}
