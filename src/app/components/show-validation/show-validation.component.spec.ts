import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowValidationComponent } from './show-validation.component';

describe('ShowValidationComponent', () => {
    let component: ShowValidationComponent;
    let fixture: ComponentFixture<ShowValidationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ShowValidationComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ShowValidationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
