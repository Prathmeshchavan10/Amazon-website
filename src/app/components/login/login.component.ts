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
  isFormSub:boolean=false;
  
  constructor( public router:Router) { 
    this.myForm=new FormGroup({
      // email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]],
      email: new FormControl("",[Validators.required, Validators.pattern('^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])
    })
  }

 

  submitForm() {
    
    // const isFormValid=this.myForm.valid;
    // debugger;
    if(this.myForm.valid){
      alert('Logged Successfully');
      this.router.navigate(['/products']);
    }
    // this.isFormSub=true;
    // alert('Yehh !! You Logged In Successfully');
    // this.router.navigate(['/products']);
    
  }

}
