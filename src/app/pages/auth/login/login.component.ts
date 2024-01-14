import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { ShowValidationComponent } from '~/app/components/show-validation/show-validation.component';
import { AuthService } from '~/app/service/auth/auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        CommonModule,
        ShowValidationComponent,
        HttpClientModule,
    ],
    providers: [AuthService],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted: boolean;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        });
        this.submitted = false;
    }
    get loginFormControl() {
        return this.loginForm.controls;
    }
    ngOnInit(): void {
        console.log(this.loginForm);
    }
    onSubmit() {
        this.submitted = true;
        if (this.loginForm.valid) {
            this.authService.login(this.loginForm.value).subscribe((data) => {
                localStorage.setItem('token', data.accessToken);
            });
        }
    }
}
