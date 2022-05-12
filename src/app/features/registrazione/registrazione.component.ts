import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/interfaces/user';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  form: FormGroup;
  users: User[] = [];
  registered:boolean = false;



  constructor(fb: FormBuilder, private _service: AuthService) {

    this.form = fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      badge: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  ngOnInit(): void {
  }


  get name(){
    return this.form?.get('name')
  }

  get surname(){
    return this.form?.get('surname')
  }

  get badge(){
    return this.form?.get('badge')
  }

  get email(){
    return this.form?.get('email')
  }

  get password(){
    return this.form?.get('password')
  }
  


  addUtente(form: FormGroup) {
    this._service.register(form.value).subscribe((data:any) => {
      this.registered = true;

    
    })
  }
}
