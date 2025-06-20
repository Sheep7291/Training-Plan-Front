import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjuryListComponent } from './injury-list.component';

describe('InjuryListComponent', () => {
  let component: InjuryListComponent;
  let fixture: ComponentFixture<InjuryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjuryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjuryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
