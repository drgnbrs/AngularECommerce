import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor( private formBuilder : FormBuilder, private http : HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
 
  login(){
    this.http.get<any>("http://localhost:3000/signupusers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.mail === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Giriş Başarılı");
        this.loginForm.reset();
        this.router.navigate(['products']);
      }else{
        alert("Kullanıcı bulunamadı");
      }
    })  
  }
}
