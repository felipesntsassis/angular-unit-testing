import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { UserServiceMock } from './../testing/mocks/user-service.mock';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let comp: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [
        { provide: UserService, useClass: UserServiceMock }
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(UserComponent);
      comp = fixture.componentInstance;
    });
  }));

  it('should have one user', async(() => {
    expect(comp.users.length).toEqual(1);
  }));

  it('should render one user', async(() => {
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('table > tbody > tr > td:first-child');
    expect(el.innerText).toContain('Testing User');
  }));
});
