import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book.model';
import { BookService } from './book.service';

const LIST_BOOKS: Book[] = [
  { author: 'tres', isbn: '87583274', name: 'monbre3', price: 2, amount: 12 },
  { author: 'dos', isbn: '87583274', name: 'monbre2', price: 25, amount: 1 },
  { author: 'uno', isbn: '87583274', name: 'monbre1', price: 5, amount: 2 },
];

let storage = {};

describe('Book Service', () => {
  let service: BookService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService],
    });
  });

  beforeEach(() => {
    service = TestBed.inject(BookService);
    httpMock = TestBed.inject(HttpTestingController);
    //PARA NO usar el localstorage real usamos un spyOn al hacerlo en el beforeeach se establece para cada test
    spyOn(localStorage, 'getItem').and.callFake((key: string) => {
      return storage[key] ? storage[key] : null;
    });
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Servicio creado', () => {
    expect(service).toBeTruthy();
  });

  it('devuelve lista de libros con un get', () => {
    service.getBooks().subscribe((books: Book[]) => {
      expect(books).toEqual(LIST_BOOKS);
    });

    const req = httpMock.expectOne(environment.API_REST_URL + '/book');
    expect(req.request.method).toBe('GET');
    // resuelve la request retornando un valor
    req.flush(LIST_BOOKS);
  });

  it('getBooksFromCart retorana array vacio cuando localstorage esta vacío', () => {
    const libros = service.getBooksFromCart();
    expect(libros.length).toBe(0);
  });
});
