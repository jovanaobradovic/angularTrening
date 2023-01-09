import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojTreningComponent } from './moj-trening.component';

describe('MojTreningComponent', () => {
  let component: MojTreningComponent;
  let fixture: ComponentFixture<MojTreningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MojTreningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MojTreningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
