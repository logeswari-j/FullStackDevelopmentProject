import { Component ,OnInit} from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit  {
 
  constructor(
    private authentocationService: AuthenticationService,
    private router: Router) {

  }
  ngOnInit() {
    
  }
   
     

}
