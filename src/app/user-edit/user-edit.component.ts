import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userForm: FormGroup;
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    
   }

  ngOnInit() {

    this.userForm = this.formBuilder.group( {
      name: ['', Validators.required],
      age: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  get formControls() { return this.userForm.controls; }

  onSubmit(){
    this.isSubmitted = true;
    if( this.userForm.invalid) {
      return;
    }
    // this.userForm.addUser(this.userForm.value);
    alert('Success');
    this.router.navigate(['/home']);
  }
}
