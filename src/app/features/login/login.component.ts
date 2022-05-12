import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  errorPass: string = '';
  loader:boolean = true;

  constructor(fb: FormBuilder, private _service: AuthService, private _router: Router) {
    this.form = fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }


  get email() {
    return this.form?.get('email')
  }

  get password() {
    return this.form?.get('password')
  }


  login(form: FormGroup) {
    this.loader = false;
    this._service.login(form.value).subscribe((data: any) => {
      this.loader = true;
      console.log(data)
      localStorage.setItem('token', data.token)
      this._router.navigate(['']);

    } , err => this.errorPass = err.error.message)
  }

}
