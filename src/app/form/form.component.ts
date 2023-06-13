import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../modules/redux/app.state';
import { getLogin } from '../modules/redux/actions/login.action';
import { selectLogin } from '../modules/redux/selectors/login.selector';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  myForm!: FormGroup ;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private store: Store<AppState>) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
}

  submitForm() {
    this.apiService.api()
    .subscribe(
      (response : any) => {
        console.log('API call successful', response);
      },
      (error : any) => {
        console.log('API call failed', error);
      }
    );
    if (this.myForm.valid) {
      const formValue = this.myForm.value;
      console.log(formValue); // Handle form data
    }
    this.store.dispatch(getLogin());
  }

}
