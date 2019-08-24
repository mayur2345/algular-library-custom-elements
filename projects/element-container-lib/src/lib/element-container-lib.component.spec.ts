import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementContainerLibComponent } from './element-container-lib.component';

describe('ElementContainerLibComponent', () => {
  let component: ElementContainerLibComponent;
  let fixture: ComponentFixture<ElementContainerLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementContainerLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementContainerLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
