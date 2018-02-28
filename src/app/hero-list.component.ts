import {Component, OnInit} from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-hero-list',
  template: `
    <ul>
      <li *ngFor="let hero of heroes">
      	<a routerLink="/detail/{{hero.id}}">
      		{{hero.id}}
      	</a>
      </li>      
    </ul>        
    <!--<app-hero-detail [hero]="selectedHero"></app-hero-detail>-->    
  `,
  styles: [
  	`	
  		ul li {cursor: pointer;}
  		.selected {border: 2px solid red;}
  	`
  ]
})

export class HeroListComponent implements OnInit {
	// heroes = HEROES;
	heroes: Hero[];

	constructor(private heroService: HeroService) { }

	ngOnInit() {
		this.getHeroes();
	}	

	getHeroes(): void {
		this.heroService.getHeroes()
			.subscribe(heroes => this.heroes = heroes);
		console.log(this.heroes)
	}
}