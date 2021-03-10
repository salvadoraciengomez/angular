import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HeroesService, Heroe} from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[];

  constructor( private _heroesService:HeroesService, private router:Router) {
    console.log("Constructor listo");
   }

  ngOnInit(): void {
    console.log("NgOnInit listo");
    this.heroes=this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  public verHeroe(idx:number){
    console.log("Llega");
    this.router.navigate(['/heroe', idx]);
  }
}
