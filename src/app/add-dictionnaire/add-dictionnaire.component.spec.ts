import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDictionnaireComponent } from './add-dictionnaire.component';

describe('AddDictionnaireComponent', () => {
  let component: AddDictionnaireComponent;
  let fixture: ComponentFixture<AddDictionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDictionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDictionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
