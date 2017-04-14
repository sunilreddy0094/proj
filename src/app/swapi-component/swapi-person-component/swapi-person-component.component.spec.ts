import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiPersonComponentComponent } from './swapi-person-component.component';

describe('SwapiPersonComponentComponent', () => {
  let component: SwapiPersonComponentComponent;
  let fixture: ComponentFixture<SwapiPersonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapiPersonComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiPersonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
