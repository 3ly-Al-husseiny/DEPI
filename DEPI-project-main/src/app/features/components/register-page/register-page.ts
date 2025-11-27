import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register-page',
  imports: [RouterLink],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css'
})
export class RegisterPage {
  regForm:FormGroup;
  constructor(){
    this.regForm=new FormGroup({
      'name':new FormGroup('',Validators.required),
      'age':new FormGroup('',Validators.required),
      'gender':new FormGroup('' ,Validators.required),
      'height':new FormGroup('',Validators.required),
      'width':new FormGroup('',Validators.required),
    });
  }
  onSubmit(){
    console.log(this.regForm.value);
  }

}
