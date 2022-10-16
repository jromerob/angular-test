import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
import { NavComponent } from './nav.component';

//clase para no tener que importar los componewntes a los que navegaar y toodas sus dependencias
// class ComponentTestRoute {}
const RouterMock = {
  navigate() {},
};

describe('Nav Component', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // RouterTestingModule.withRoutes([
        //   {
        //     path: 'home',
        //     component: ComponentTestRoute,
        //   },
        //   {
        //     path: 'cart',
        //     component: ComponentTestRoute,
        //   },
        // ]),
      ],
      declarations: [NavComponent],
      providers: [{ provide: Router, useValue: RouterMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('componente creado', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');

    component.navTo('cualquiercosa');
    expect(spy).toHaveBeenCalled();
  });
});
