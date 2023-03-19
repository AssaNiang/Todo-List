import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionTaskComponent } from './description-task.component';

describe('DescriptionTaskComponent', () => {
  let component: DescriptionTaskComponent;
  let fixture: ComponentFixture<DescriptionTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
