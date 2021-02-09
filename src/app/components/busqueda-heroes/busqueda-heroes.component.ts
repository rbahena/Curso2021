import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { heroesService, Heroe } from '../../servicios/heroes.service';

@Component({
    selector: 'app-busqueda-heroes',
    templateUrl: './busqueda-heroes.component.html'
})
export class BusquedaHeroesComponent implements OnInit {

    resultados: any = [];
    termino: string;
    constructor(private activatedRoute: ActivatedRoute,
        private _heroesService: heroesService,
        private _route:Router) {

    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.termino = params['termino'];
            console.log(params['termino']);
            this.resultados = this._heroesService.bucarHeroes(params['termino']);
        });
    }

    verHeroe(idx: number) {
        this._route.navigate(['/heroe', idx]);
    }

};
