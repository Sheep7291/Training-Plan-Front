import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInjuryListComponent } from './user-injury-list.component';

describe('UserInjuryListComponent', () => {
  let component: UserInjuryListComponent;
  let fixture: ComponentFixture<UserInjuryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInjuryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInjuryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
