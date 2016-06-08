export class MarkdownPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('markdown-app h1')).getText();
  }
}
