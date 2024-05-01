import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComComponent } from './user-com.component';

describe('UserComComponent', () => {
  let component: UserComComponent;
  let fixture: ComponentFixture<UserComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComComponent]
    });
    fixture = TestBed.createComponent(UserComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
