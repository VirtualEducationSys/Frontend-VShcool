import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: string  = "";
  loginInputForm = new FormGroup({
    login: new FormControl('Login', Validators.required),
    password: new FormControl('Password', Validators.required)
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    let _login = this.loginInputForm.value;
    this.router.navigate(['/customers']);
  }
}
