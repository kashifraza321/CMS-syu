import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {


  loginForm = new FormGroup({
     text: new FormControl('',Validators.required),
     email: new FormControl('',Validators.required),
     number: new FormControl('',Validators.required),
     textarea: new FormControl('',Validators.required)  
  })
  get text(){return this.loginForm.get('text')}
  get email(){return this.loginForm.get('email')}
  get number(){return this.loginForm.get('number')}
  get textarea(){return this.loginForm.get('textarea')}



  constructor() { }

  ngOnInit() {

    
  }

}
