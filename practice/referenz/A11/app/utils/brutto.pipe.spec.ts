import { BruttoPipe } from './brutto.pipe';

describe('BruttoPipe', () => {

  let pipe: BruttoPipe;

  beforeEach(() => {
    pipe = new BruttoPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should output correct gross from net', () => {
    const net = 200;
    const gross1 = 238;
    const gross2 = 220;
    expect(pipe.transform(net)).toBe(gross1.toFixed(2));
    expect(pipe.transform(net, 10)).toBe(gross2.toFixed(2));

  });
});
