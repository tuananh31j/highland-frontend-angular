import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    providers: [FormBuilder, FormGroup, Validators],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            pwd: ['', Validators.required],
        });
    }

    onSubmit() {
        if (!this.loginForm.valid) return console.log(this.loginForm.value);
    }
}
bootstrapApplication(LoginComponent);
