import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  info = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    pnumber: new FormControl('', Validators.required),
    mailaddress: new FormControl('', Validators.required),
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    if (this.info.valid) {
      console.log(this.info.value);
    }
  }
}
