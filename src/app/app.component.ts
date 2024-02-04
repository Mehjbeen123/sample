import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive';
  public test:any;
  public test2:any
  public myForm:any;
  constructor(private fb:FormBuilder){
    this.myForm = this.fb.group({
      fname:[''],
      lname:[''],
      email:[''],
      pass:[''],
      dob:[''],
      gender:[''],
      street:[''],
      con:[''],
      city:[''],
      region:[''],
      postal:['']

    })
  }
  onSubmit(){
    // console.log(this.myForm)

  }
  get f(){
    return this.myForm.controls;

  }
}
