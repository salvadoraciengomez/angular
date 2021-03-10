import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {HeroesService} from '../../services/heroes.service'

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  termino:string;
  heroes:any[]=[];
  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService, private router:Router) {

   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.termino= params['termino'];
      this.heroes=this._heroesService.buscarHeroes(params['termino']);
    });
  }
  public verHeroe(idx:number){
    //return this.heroes[idx];
    this.router.navigate(['/heroe', idx]);
  }

}
