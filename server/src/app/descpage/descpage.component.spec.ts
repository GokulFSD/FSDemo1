import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescpageComponent } from './descpage.component';

describe('DescpageComponent', () => {
  let component: DescpageComponent;
  let fixture: ComponentFixture<DescpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
