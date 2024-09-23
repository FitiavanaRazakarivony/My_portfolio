import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderComponent } from './loader.component';
import { of } from 'rxjs';
import { LoaderService } from './loader.service';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  let loaderService: LoaderService;

  beforeEach(async () => {
    loaderService = new LoaderService();
    
    await TestBed.configureTestingModule({
      declarations: [ LoaderComponent ],
      providers: [{ provide: LoaderService, useValue: loaderService }]
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
  });

  it('should display loader when isLoading is true', () => {
    loaderService.showLoader(); // Active le loader
    fixture.detectChanges(); // Met à jour le template
    expect(component.isLoading).toBeTrue(); // Vérifie que isLoading est vrai
    const loaderElement = fixture.nativeElement.querySelector('.loader-container');
    expect(loaderElement).toBeTruthy(); // Vérifie que le loader est présent dans le DOM
  });

  it('should hide loader when isLoading is false', () => {
    loaderService.hideLoader(); // Désactive le loader
    fixture.detectChanges(); // Met à jour le template
    expect(component.isLoading).toBeFalse(); // Vérifie que isLoading est faux
    const loaderElement = fixture.nativeElement.querySelector('.loader-container');
    expect(loaderElement).toBeNull(); // Vérifie que le loader n'est pas présent dans le DOM
  });
});
