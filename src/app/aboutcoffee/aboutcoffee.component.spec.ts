import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutcoffeeComponent } from './aboutcoffee.component';

describe('AboutcoffeeComponent', () => {
  let component: AboutcoffeeComponent;
  let fixture: ComponentFixture<AboutcoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutcoffeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutcoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
