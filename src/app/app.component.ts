import { Component } from '@angular/core';
import { ClientService } from './client.service';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  form: FormGroup;

  constructor(private clientService: ClientService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  }

  sendClientEmail() {
    this.clientService.sendEmail(JSON.stringify(this.form.value));
    this.form.reset();
  }
}
