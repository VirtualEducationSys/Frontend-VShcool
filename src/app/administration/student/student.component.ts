import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class StudentComponent implements OnInit {
  _studentName: string;
  _level:string;
  post:any;
  formGroup:FormGroup;

  //email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this._studentName = 'Nouveau';
    this._level = 'Niveau';
    this.createForm();
  }

  getErrorEmail() {
    return this.formGroup.get('email').hasError('required') ? 'Le champ est obligatoire' :
      this.formGroup.get('email').hasError('pattern') ? 'Invalide email' :
        this.formGroup.get('email').hasError('alreadyInUse') ? "L'email est déjà utilisé" : '';
  }

  getErrorfirstName() {
    return this.formGroup.get('firstName').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' : '';
      //this.formGroup.get('firstName').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }

  getErrorlastName() {
    return this.formGroup.get('lastName').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' : '';
      //this.formGroup.get('firstName').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }

  onSubmit(post) {
    this.post = post;
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'date': [null, Validators.required],
      'password': [null, [Validators.required, this.checkPassword]],
      'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      'validate': ''
    });
  }

  checkPassword(control) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  checkInUseEmail(control) {
    // mimic http database access
    let db = ['tony@gmail.com'];
    return new Observable(observer => {
      setTimeout(() => {
        let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
        observer.next(result);
        observer.complete();
      }, 4000)
    })
  }
}