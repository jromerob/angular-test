import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { CartComponent } from './cart.component';

const LIST_BOOKS: Book[] = [
  { author: 'tres', isbn: '87583274', name: 'monbre3', price: 2, amount: 12 },
  { author: 'dos', isbn: '87583274', name: 'monbre2', price: 25, amount: 1 },
  { author: 'uno', isbn: '87583274', name: 'monbre1', price: 5, amount: 2 },
];

describe('cart component', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CartComponent],
      providers: [BookService],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // obliga al paso por el ngoninit
  });

  it('Debería crear componente', () => {
    expect(component).toBeTruthy();
  });

  it('total debe ser 59', () => {
    const totalprice = component.getTotalPrice(LIST_BOOKS);
    expect(totalprice).toBe(59);
    expect(totalprice).toBeGreaterThan(0);
  });

  it('incrementa correctamente', () => {
    const action = 'plus';
    const book = {
      author: 'tres',
      isbn: '87583274',
      name: 'monbre3',
      price: 2,
      amount: 12,
    };
    expect(book.amount).toBe(12);
    //obtener servicio desde testbed
    const service = fixture.debugElement.injector.get(BookService);
    //  Creación del espia antes de llamar al método a probar
    // crea espía y hace una llamada fake que retorna nulo  callfake delega todas las llamadas del spy al método pasado
    const spy1 = spyOn(service, 'updateAmountBook').and.callFake(() => []);

    const spy2 = spyOn(component, 'getTotalPrice');

    component.onInputNumberChange(action, book);
    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
    expect(book.amount).toBe(13);
  });

  it('decrementa correctamente', () => {
    const action = 'minus';
    const book = {
      author: 'tres',
      isbn: '87583274',
      name: 'monbre3',
      price: 2,
      amount: 12,
    };
    expect(book.amount).toBe(12);
    //obtener servicio desde testbed
    const service = fixture.debugElement.injector.get(BookService);
    //  Creación del espia antes de llamar al método a probar
    // crea espía y hace una llamada fake que retorna nulo  callfake delega todas las llamadas del spy al método pasado
    const spy1 = spyOn(service, 'updateAmountBook').and.callFake(() => []);

    const spy2 = spyOn(component, 'getTotalPrice').and.callFake(() => null);

    component.onInputNumberChange(action, book);
    expect(book.amount).toBe(11);
    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });

  it('Clear books', () => {
    const service = fixture.debugElement.injector.get(BookService);
    const spy = spyOn(component as any, '_clearListCartBook').and.callThrough();
    const spy2 = spyOn(service as any, 'removeBooksFromCart').and.callFake(
      () => null
    );
    component.listCartBook = [...LIST_BOOKS];
    component.onClearBooks();
    expect(component.listCartBook.length).toBe(0);
    expect(spy).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });

  it('_clearListCartBook privado', () => {
    const service = fixture.debugElement.injector.get(BookService);
    const spy2 = spyOn(service as any, 'removeBooksFromCart').and.callFake(
      () => null
    );
    component.listCartBook = [...LIST_BOOKS];
    component['_clearListCartBook']();
    expect(spy2).toHaveBeenCalled();
  });
});
