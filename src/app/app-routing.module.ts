import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketDetailComponent } from './components/tickets/ticket-detail.component';

const routes: Routes = [
 { path: '', redirectTo: '/tickets', pathMatch: 'full' },
 { path: 'tickets', component: TicketsComponent },
 { path: 'ticket/:id', component: TicketDetailComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}