import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormsModule, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userForm: FormGroup;
  isFormSubmitted: boolean = false;

  constructor( private router: Router) {
    this.userForm =  new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required,Validators.minLength(4)]),
      userName:  new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl(''),
      
      zipcode: new FormControl(''),
      isAgree: new FormControl(false)
    })
  }
  firstName:any;
onchange(event:any){
  console.log("firstName",event);
  this.firstName=event.value
  
}
  onSubmit() {
    alert("Success registerd ! Now Enjoy your Shopping");
    const isFormValid = this.userForm.valid;
    debugger;
    this.isFormSubmitted =  true;
    this.router.navigate(['/products']);
  }

}
  
