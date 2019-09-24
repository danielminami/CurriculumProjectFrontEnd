import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumDataComponent } from './curriculum-data.component';

describe('CurriculumDataComponent', () => {
  let component: CurriculumDataComponent;
  let fixture: ComponentFixture<CurriculumDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculumDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
