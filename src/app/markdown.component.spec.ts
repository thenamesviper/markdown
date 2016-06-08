import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MarkdownAppComponent } from '../app/markdown.component';

beforeEachProviders(() => [MarkdownAppComponent]);

describe('App: Markdown', () => {
  it('should create the app',
      inject([MarkdownAppComponent], (app: MarkdownAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'markdown works!\'',
      inject([MarkdownAppComponent], (app: MarkdownAppComponent) => {
    expect(app.title).toEqual('markdown works!');
  }));
});
