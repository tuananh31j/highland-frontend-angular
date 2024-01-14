import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { ShowValidationComponent } from '~/app/components/show-validation/show-validation.component';
import { AuthService } from '~/app/service/auth/auth.service';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        ShowValidationComponent,
        HttpClientModule,
        CommonModule,
    ],
    providers: [AuthService],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
})
export class RegisterComponent {
    registerForm: FormGroup;
    submitted: boolean;

    constructor(
        private authService: AuthService,
        private formBuild: FormBuilder
    ) {
        this.registerForm = this.formBuild.group({
            name: ['', [Validators.required]],
            password: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
        });
        this.submitted = false;
    }

    get registerFormControls() {
        return this.registerForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.valid) {
            this.authService
                .register(this.registerForm.value)
                .subscribe((data) => {
                    console.log(data);
                });
        }
    }
}
