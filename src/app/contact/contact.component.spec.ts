import { BrowserModule, By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ContactComponent', () => {
  let comp: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents().then(() => {
        fixture = TestBed.createComponent(ContactComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement;
        el = de.nativeElement;
      });
  }));

  it('should have as text `Contact Page`', async(() => {
    expect(comp.text).toEqual('Contact Page');
  }));

  it('should set submitted to true', async(() => {
    comp.onSubmit();
    expect(comp.submitted).toBeTruthy();
  }));

  it('should call the onSubmit method', async(() => {
    fixture.detectChanges();
    spyOn(comp, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(comp.onSubmit).toHaveBeenCalledTimes(0);
  }));

  it('form should be invalid', async(() => {
    fixture.detectChanges();
    comp.contactForm.patchValue({
      name: '',
      email: '',
      text: ''
    });
    expect(comp.contactForm.valid).toBeFalsy();
  }));

  it('form should be valid', async(() => {
    fixture.detectChanges();
    comp.contactForm.patchValue({
      name: 'Felipe Assis',
      email: 'felipesntsassis@gmail.com',
      text: 'Lorem Ipsum emet dolet'
    });
    expect(comp.contactForm.valid).toBeTruthy();
  }));
});
