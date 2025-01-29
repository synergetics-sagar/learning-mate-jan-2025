import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesPracticeComponent } from './observables-practice.component';

describe('ObservablesPracticeComponent', () => {
  let component: ObservablesPracticeComponent;
  let fixture: ComponentFixture<ObservablesPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservablesPracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablesPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
