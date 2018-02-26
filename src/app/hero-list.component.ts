import {Component, OnInit} from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-hero-list',
  template: `
    <ul>
      <li 
      	*ngFor="let hero of heroes" [class.selected]="hero === selectedHero"
      	(click)="onSelect(hero)"
      >
      	{{hero.id}} / {{hero.val}} / {{hero.etc}}
      </li>      
    </ul>        
    <app-hero-detail [hero]="selectedHero"></app-hero-detail>
    <button (click)="onClose()">CLOSE</button>
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
	selectedHero: Hero;	
	heroes: Hero[];

	constructor(private heroService: HeroService) {

	}

	ngOnInit() {
		this.getHeroes();
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	getHeroes(): void {
		this.heroService.getHeroes()
			.subscribe(heroes => this.heroes = heroes);
	}

	onClose() {
		this.selectedHero = false;
	}
}