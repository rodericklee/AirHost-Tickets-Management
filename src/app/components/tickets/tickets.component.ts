import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { TicketService } from '../../services/ticket';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'my-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
  providers: [TicketService]
})

export class TicketsComponent implements OnInit {

  ticket_type: string;
  afLists: FirebaseListObservable<any>;
  tickets: Observable<any>;

  constructor(private router: Router,
              private ticketService: TicketService,
              private af: AngularFire ) {
     // relative URL, uses the database url provided in bootstrap
    const relative = af.database.list('/tickets');
    // absolute URL
    const absolute = af.database.list('https://airhost-test-3771e.firebaseio.com/tickets');

    this.afLists = af.database.list('/tickets', {
      query: {
        //limitToFirst: 4,
        //limitToLast: 4,
        orderByKey: true
      }
    });
  }

  ngOnInit(): void {
    this.ticket_type = 'inbox';
    this.getTickets(this.ticket_type);
  }

  getTickets(dir): void {
    switch (dir) {
      case 'all':
        this.tickets = this.afLists;
        break;
      case 'inbox':
        this.tickets = this.afLists.map(_afLists=>_afLists.filter(item=>item.unread));
        break;
      case 'archived':
        this.tickets = this.afLists.map(_afLists=>_afLists.filter(item=>item.archived));
        break;
      case 'starred':
        this.tickets = this.afLists.map(_afLists=>_afLists.filter(item=>item.starred));
        break;
      case 'bookings':
        this.tickets = this.afLists.map(_afLists=>_afLists.filter(item=>{
          //console.log(item.id, item.bookings)
          return typeof item.bookings != "undefined";
        }));
        break;
    }

    this.tickets.forEach(ticket => {
      console.log('ticket:', ticket);
    });
  }
  
  selectDirectory(dir: string): void {
    this.ticket_type = dir;
    this.getTickets(dir);
  }

}
