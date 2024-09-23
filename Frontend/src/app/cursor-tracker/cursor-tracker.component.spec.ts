import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorTrackerComponent } from './cursor-tracker.component';

describe('CursorTrackerComponent', () => {
  let component: CursorTrackerComponent;
  let fixture: ComponentFixture<CursorTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursorTrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursorTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
