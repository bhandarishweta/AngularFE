import { Component } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  constructor(private userRegistrationService: UserRegistrationService){}

  onSubmit(userForm:any){
    if(userForm.valid){
      this.userRegistrationService.registerUser(userForm.value).subscribe(
        response => {
          console.log('User registered successfully : ', response);
          alert('User registered successfully !!');
        },
        error => {
          console.error('There was an error during the registration: ', error);
          alert('An error occured during registration. Please try again.');
        }
      );
      //console.log('User Form Data:', userForm.value);
      //alert('User registered successfully');
    }
  }
}
