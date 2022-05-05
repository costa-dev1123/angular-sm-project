import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmagineFullScreenComponent } from './immagine-full-screen.component';

describe('ImmagineFullScreenComponent', () => {
  let component: ImmagineFullScreenComponent;
  let fixture: ComponentFixture<ImmagineFullScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmagineFullScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmagineFullScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
