import { TestBed } from '@angular/core/testing';

import { ElementContainerLibService } from './element-container-lib.service';

describe('ElementContainerLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElementContainerLibService = TestBed.get(ElementContainerLibService);
    expect(service).toBeTruthy();
  });
});
