import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-hero-detail',
  template: `
  	<dl *ngIf="hero">    
  		<dt><strong>Detail</strong></dt>
  		<dd>id: {{hero.id}}</dd>
  		<dd>value: {{hero.val}}</dd>
  		<dd>part: {{hero.part}}</dd>
  		<dd>etc: {{hero.etc}}</dd>
  	</dl>

    <button (click)="goBack();">go back</button>
  `,

  styles: [
  	`
  		dl {border: 1px solid #333;}
  		dt dt {font-size: 20px;}  	
  	`
  ]
  
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}