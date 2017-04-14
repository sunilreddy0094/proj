import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiComponentComponent } from './swapi-component.component';

describe('SwapiComponentComponent', () => {
  let component: SwapiComponentComponent;
  let fixture: ComponentFixture<SwapiComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapiComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
