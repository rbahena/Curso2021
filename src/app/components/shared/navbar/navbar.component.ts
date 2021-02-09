import { Component, OnInit } from '@angular/core';
import { heroesService, Heroe } from '../../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    resultados: Heroe[]=[];
    constructor(private _heroesService: heroesService,
                private _route:Router) {
    }

    ngOnInit(): void {   
    }

    buscarHeroe(termino: string) {
        this._route.navigate(['/resultadosBusqueda', termino]);
    }
}
