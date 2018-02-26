import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-hero-detail',
  template: `
  	<dl *ngIf="hero">
    <!--<dl class="none" [ngClass]="{'animate' : hero}">-->
  		<dt><strong>Detail</strong></dt>
  		<dd>id: {{hero.id}}</dd>
  		<dd>value: {{hero.val}}</dd>
  		<dd>part: {{hero.part}}</dd>
  		<dd>etc: {{hero.etc}}</dd>
  	</dl>
  `,

  styles: [
  	`
  		dl {border: 1px solid #333;}
  		dt dt {font-size: 20px;}  	
  	`
  ]
  
})

export class HeroDetailComponent {

	@Input() hero: Hero;
	constructor() {}
	
}