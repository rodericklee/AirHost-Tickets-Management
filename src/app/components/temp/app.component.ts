import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any>;
  ticketCountTotal = 0;
  ticketCountNew = 0;
  
  constructor(af: AngularFire) {
	// relative URL, uses the database url provided in bootstrap
	const relative = af.database.list('/tickets');
	// absolute URL
	const absolute = af.database.list('https://airhost-test-3771e.firebaseio.com/tickets');

	this.items = af.database.list('/tickets', {
	  query: {
		//limitToFirst: 4,
		//limitToLast: 4,
		orderByKey: true
	  }
	});
	this.getTicketsCount(this.items);
	
	
	
  }
  ngOnInit() {
	console.log(this.ticketCountTotal)
  }
  getTicketsCount(items){
	items.forEach(item => {
		//console.log('item:', item);
		this.ticketCountTotal = item.length;
		this.ticketCountNew = item.filter(ticket=>ticket.unread).length;
	});
	
  }

/*
   this.tickets = this.afLists.map(_afLists=>_afLists.filter(item=>item.unread == false));
    this.tickets.forEach(ticket => {
      console.log('ticket:', ticket);
      let ticketCountTotal = ticket.length;
      console.log('ticketCountTotal:', ticketCountTotal);
      let ticketCountNew = ticket.filter(item=>item.unread == false).length;
      console.log('ticketCountNew:', ticketCountNew);
    });
    */
  
}
/*
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatDate' })
export class FormatDatePipe implements PipeTransform {
   transform(date: any, args?: any): any {
     let d = new Date(date);
     return 'DD/MM/YYYY';

   }
}*/


