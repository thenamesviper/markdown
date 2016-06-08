import { MarkdownPage } from './app.po';

describe('markdown App', function() {
  let page: MarkdownPage;

  beforeEach(() => {
    page = new MarkdownPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('markdown works!');
  });
});
