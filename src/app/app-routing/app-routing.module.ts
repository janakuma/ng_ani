import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from '../hero-list.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [	
	{path: 'heroes', component: HeroListComponent},
	{path: 'dashboard', component: DashboardComponent}
]

@NgModule({
	exports: [ RouterModule ],  
	imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
