import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AirlineService } from '../airline.service';
import { Airline } from '../airline';

@Component({
  selector: 'app-airline-list',
  templateUrl: './airline-list.component.html',
  styleUrls: ['./airline-list.component.css']
})
export class AirlineListComponent implements OnInit{
  airlines: Airline[] = [];
  airlineName: any;
 // flightName :string=" ";
 // airlineFoundBySearch :Airline[]=[];

  constructor(private airlineService: AirlineService,
    private router: Router) { }

    searchByName(){
      this.airlineService.findByName(this.airlineName).subscribe(data=>{
        this.airlines=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      
      });
    }
  
 

  ngOnInit(): void {
    this.getAirlines();
  }

  private getAirlines(){
    this.airlineService.getAirlinesList().subscribe(data => {
      this.airlines = data;
    });
  }

  airlineDetails(airlineId: number){
    this.router.navigate(['airline-details', airlineId]);
    console.log("i came");
  }

  updateAirline(airlineId: number){
    this.router.navigate(['update-airline', airlineId]);
  }

  deleteAirline(airlineId: number){
    this.airlineService.deleteAirline(airlineId).subscribe( data => {
      console.log(data);
      this.getAirlines();
    })
  }
  confrimDelete(airline: Airline){
    var status=confirm("You want to delete this records?");
    if(status==true){
        this.deleteAirline(airline.airlineId);
    }
    else{
        this.getAirlines();
    }

}
removeAllAirlines():void{
  this.airlineService.deleteAll().subscribe(data=>{
    console.log(data);
    this.getAirlines();
  },
  error=>{
    console.log(error);
  
  });
 }

 fetchInternationalAirline(){
  this.airlineService.findByInternationalAirline().subscribe(
    data =>{
      this.airlines = data;
      console.log(data);

    },
    error => {
      console.log(error);
    });
}

fetchDomesticAirline(){
  this.airlineService.findByDomesticAirline().subscribe(
    data =>{
      this.airlines = data;
      console.log(data);

    },
    error => {
      console.log(error);
    });
}
ticketBookingAirlines(airlineId:number){
   
    this.router.navigate(['ticket-booking',airlineId]);

}

}
/*confrimDeleteAll(airline: Airline){
  var status=confirm("You want to delete all the records?");
  if(status==true){
      this.removeAllAirlines();
  }
  else{
      this.getAirlines();
  }
}*/

  /*airlines: Airline[] = [];
  airlineName: any;
  //airlineName: string='';

  //airlineFoundBySearch : Airline[]=[];

  constructor(private airlineService: AirlineService,
    private router: Router) { }

    searchByName(){
      this.airlineService.findByName(this.airlineName) .subscribe(
        data => {
          this.airlines=data;
          console.log(data);
        }, error =>{
          console.log(error);
        }
      )

    }
  ngOnInit(): void {
    this.getAirlines();
  }

  private getAirlines(){
    this.airlineService.getAirlinesList().subscribe(data => {
      this.airlines = data;

     });
  }

  airlineDetails(airlineId: number){
    this.router.navigate(['airline-details', airlineId]);
  }

  updateAirline(airlineId: number){
    this.router.navigate(['update-airline', airlineId]);
  }

  deleteAirline(airlineId: number){
    this.airlineService.deleteAirline(airlineId).subscribe( data => {
      console.log(data);
      this.getAirlines();
    })
  }
  confrimDelete(airline: Airline){
    var status=confirm("You want to delete this record?");
    if(status==true){
        this.deleteAirline(airline.airlineId);
    }
    else{
        this.getAirlines();
    }
}
  removeAllAirlines():void {
    this.airlineService.deleteAll().subscribe(data =>
      {
        console.log(data);
        this.getAirlines();
      },
      error =>{
        console.log(error);
      
      });
  }
  ticketBookingAirlines(airline:Airline){
    console.log(airline);
    this.router.navigate(['ticket-booking',airline.airlineId]);
  }*/

  