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
  

  constructor( private router: Router) {
    this.userForm =  new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required,Validators.minLength(4)]),
      userName:  new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]10')]),
      address: new FormControl('',[Validators.required, Validators.minLength(6) ])

    })
  }

  onSubmit() {
   
    if(this.userForm.valid){
      alert('Successfully registerd ! Enjoy your shopping');
      this.router.navigate(['/login']);
    }
    else{
      alert('Please enter valid details')
    }
  }

}
  
