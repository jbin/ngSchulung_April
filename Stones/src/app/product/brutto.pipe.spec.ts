import { BruttoPipe } from './brutto.pipe';

describe('BruttoPipe', () => {
  it('create an instance', () => {
    const pipe = new BruttoPipe();
    expect(pipe).toBeTruthy();
  });
  it('should calculate brutto correctly', () => {
    const pipe = new BruttoPipe();
    expect(pipe.transform(100)).toEqual(119);
    expect(pipe.transform(100, 30)).toEqual(130);
  });
});
