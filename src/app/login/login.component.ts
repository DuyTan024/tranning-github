import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username :String ='';
  public enter : string ='';
  constructor() { }

  ngOnInit(): void {
  }

  onclick(){
    alert('Tài khoản không tồn tại')
  }
  ondblclick(event){
    alert('Tài khoản không tồn tại !!')
  }
  onkeyup(event){
   console.log(event.target.value)
   this.username=event.target.value
  }

  onkeyupenter(event){
    this.enter=event.target.value
  }
}
