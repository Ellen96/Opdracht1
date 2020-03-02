import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GokComponent } from './gok.component';

describe('GokComponent', () => {
  let component: GokComponent;
  let fixture: ComponentFixture<GokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
