import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-show-validation',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './show-validation.component.html',
    styleUrl: './show-validation.component.scss',
})
export class ShowValidationComponent {
    @Input() control: any;
    @Input() key: string;

    constructor() {
        this.key = '';
    }
}
