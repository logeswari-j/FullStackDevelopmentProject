import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit  {
 
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {

  }
  
   
    ngOnInit() {
      
}
register(){
var status=confirm("Registered successfully");
if(status==true){
  
  this.router.navigate(['login-page']);
}
}
}
