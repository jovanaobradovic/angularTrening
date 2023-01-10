import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpisVezbeComponent } from './opis-vezbe.component';

describe('OpisVezbeComponent', () => {
  let component: OpisVezbeComponent;
  let fixture: ComponentFixture<OpisVezbeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpisVezbeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpisVezbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
