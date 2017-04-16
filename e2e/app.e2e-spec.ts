import { AngularFourAppPage } from './app.po';

describe('angular-four-app App', () => {
  let page: AngularFourAppPage;

  beforeEach(() => {
    page = new AngularFourAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
