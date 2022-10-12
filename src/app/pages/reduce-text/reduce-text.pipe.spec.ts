import { ReduceTextPipe } from './reduce-text.pipe';

describe('reduce text pipe', () => {
  let pipe: ReduceTextPipe;

  beforeEach(() => {
    pipe = new ReduceTextPipe();
  });

  it('pipe creado', () => {
    expect(pipe).toBeTruthy();
  });

  it('uso de transform correcto ', () => {
    const text = 'prueba';
    const textReduced = pipe.transform(text, 3);
    expect(textReduced).toBe('pru');
  });
});
