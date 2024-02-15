import { browser, by, element } from 'protractor';

export class AppPage {
  getPageTitle(): any {
    return element(by.css('ion-title')).getText();
  }
  navigateTo() {
    return browser.get('/main');
  }

  getParagraphText() {
    return element(by.deepCss('app-root ion-content')).getText();
  }
}
