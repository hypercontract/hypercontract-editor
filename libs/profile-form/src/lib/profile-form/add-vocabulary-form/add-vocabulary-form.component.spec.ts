import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateUriPrefixFormComponent } from './create-uri-prefix-form.component';


describe('CreateUriPrefixFormComponent', () => {
  let component: CreateUriPrefixFormComponent;
  let fixture: ComponentFixture<CreateUriPrefixFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUriPrefixFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUriPrefixFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
