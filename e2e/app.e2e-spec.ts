import { CapacitaAngularPage } from './app.po';

describe('capacita-angular App', function() {
  let page: CapacitaAngularPage;

  beforeEach(() => {
    page = new CapacitaAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
