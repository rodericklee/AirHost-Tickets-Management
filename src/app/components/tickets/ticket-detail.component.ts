import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { TicketService } from '../../services/ticket';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})

export class TicketDetailComponent implements OnInit {
  
  constructor (
    private ticketService: TicketService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    //this.route.params.switchMap((params: Params) => this.ticketService.getHero(+params['id'])).subscribe(hero => this.hero = hero);
  }


}