import { PrestamoPage } from './app.po';

describe('prestamo App', () => {
  let page: PrestamoPage;

  beforeEach(() => {
    page = new PrestamoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
