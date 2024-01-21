import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-product-row',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './row.component.html',
    styleUrl: './row.component.scss',
})
export class ProductRowComponent {
    @Input() productList: any;
    @Output() handleDelete: EventEmitter<any>;

    constructor() {
        this.handleDelete = new EventEmitter<any>();
    }

    onSendDelete(id: string) {
        this.handleDelete.emit(id);
    }
}
