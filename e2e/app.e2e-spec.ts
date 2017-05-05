import { TagPage } from './app.po';

describe('tag App', () => {
  let page: TagPage;

  beforeEach(() => {
    page = new TagPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
