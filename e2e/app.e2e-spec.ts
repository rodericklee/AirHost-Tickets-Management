import { AirhostAngular3Page } from './app.po';

describe('airhost-angular3 App', function() {
  let page: AirhostAngular3Page;

  beforeEach(() => {
    page = new AirhostAngular3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
