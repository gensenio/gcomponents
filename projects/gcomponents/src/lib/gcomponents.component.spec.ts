import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcomponentsComponent } from './gcomponents.component';

describe('GcomponentsComponent', () => {
  let component: GcomponentsComponent;
  let fixture: ComponentFixture<GcomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
