import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductRowComponent } from '../product/row/row.component';

@Component({
    selector: 'app-table',
    standalone: true,
    imports: [CommonModule, ProductRowComponent],
    templateUrl: './table.component.html',
    styleUrl: './table.component.scss',
})
export class TableComponent {
    @Input() headerList: { name: string; list: string[] };
    @Input() bodyList: any;
    constructor() {
        this.headerList = { name: '', list: [] };
        this.bodyList = [];
    }
}
