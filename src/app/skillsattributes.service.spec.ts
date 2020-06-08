import { TestBed } from '@angular/core/testing';

import { SkillsattributesService } from './skillsattributes.service';

describe('SkillsattributesService', () => {
  let service: SkillsattributesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsattributesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
