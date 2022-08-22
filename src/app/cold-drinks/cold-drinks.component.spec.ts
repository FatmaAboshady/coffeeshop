import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdDrinksComponent } from './cold-drinks.component';

describe('ColdDrinksComponent', () => {
  let component: ColdDrinksComponent;
  let fixture: ComponentFixture<ColdDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColdDrinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColdDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
