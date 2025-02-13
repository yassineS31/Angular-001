import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TPEVALComponent } from './tp-eval.component';

describe('TPEVALComponent', () => {
  let component: TPEVALComponent;
  let fixture: ComponentFixture<TPEVALComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TPEVALComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TPEVALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
