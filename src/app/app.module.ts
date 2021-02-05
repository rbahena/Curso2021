import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

//Rutas
import { APP_ROUTING } from './app.routes';


//Servicios
import { heroesService } from './servicios/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent
  ],
  imports: [
      BrowserModule,
      APP_ROUTING
  ],
  providers: [heroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
