import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { HomeComponent } from './home.component';

const LIST_BOOKS: Book[] = [
  { author: 'tres', isbn: '87583274', name: 'monbre3', price: 2, amount: 12 },
  { author: 'dos', isbn: '87583274', name: 'monbre2', price: 25, amount: 1 },
  { author: 'uno', isbn: '87583274', name: 'monbre1', price: 5, amount: 2 },
];

describe('Home component', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HomeComponent],
      providers: [BookService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('componente creado', () => {
    expect(component).toBeTruthy();
  });

  it('obtiene libros, subscripción', () => {
    const bookService = fixture.debugElement.injector.get(BookService);
    const spy1 = spyOn(bookService, 'getBooks').and.returnValue(of(LIST_BOOKS));
    component.getBooks();
    expect(spy1).toHaveBeenCalled();
    expect(component.listBook.length).toBe(3);
    expect(component.listBook[0].isbn).toBe('87583274');
  });
});
