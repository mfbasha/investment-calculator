import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenstrackingComponent } from './expenstracking.component';

describe('ExpenstrackingComponent', () => {
  let component: ExpenstrackingComponent;
  let fixture: ComponentFixture<ExpenstrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenstrackingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenstrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
