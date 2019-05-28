import { async, TestBed } from '@angular/core/testing';
import { ProfileFormModule } from './profile-form.module';

describe('ProfileFormModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ProfileFormModule]
        }).compileComponents();
    }));

    it('should create', () => {
        expect(ProfileFormModule).toBeDefined();
    });
});
