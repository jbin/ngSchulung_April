import { StonesPage } from './app.po';

describe('stones App', () => {
  let page: StonesPage;

  beforeEach(() => {
    page = new StonesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
