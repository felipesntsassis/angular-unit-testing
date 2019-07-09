import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  text = 'Contact Page';
  contactForm: FormGroup;
  contact = {
    name: '',
    email: '',
    text: ''
  };
  submitted = false;
  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.contactForm = new FormGroup({
      name: new FormControl(this.contact.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl(this.contact.email, [
        Validators.required,
        Validators.email
      ]),
      text: new FormControl(this.contact.text, Validators.required)
    });
  }

  onSubmit() {
    this.submitted = true;
  }
}
