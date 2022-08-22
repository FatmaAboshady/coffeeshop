import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatmaComponent } from './fatma.component';

describe('FatmaComponent', () => {
  let component: FatmaComponent;
  let fixture: ComponentFixture<FatmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
