import { MymovieappPage } from './app.po';

describe('mymovieapp App', () => {
  let page: MymovieappPage;

  beforeEach(() => {
    page = new MymovieappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
