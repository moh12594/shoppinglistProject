import { A2projectPage } from './app.po';

describe('a2project App', () => {
  let page: A2projectPage;

  beforeEach(() => {
    page = new A2projectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
