import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  myForm: FormGroup;

  
  constructor( public router:Router) { 
    this.myForm=new FormGroup({
      
      email: new FormControl("",[Validators.required, Validators.pattern('^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])
    })
  }

 

  submitForm() {
    if(this.myForm.valid){
      alert('Logged In Successfully');
      this.router.navigate(['/products']);
    }
    else{
      alert('Enter Valid Email and Password...')
    }

  }

}
