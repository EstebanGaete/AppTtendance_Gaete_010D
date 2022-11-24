import { browser, by, element } from 'protractor';

export class AppPage {


  navigateTo() {
    return browser.get('/');
  }

  getBotonInicioSe() {
    return element(by.name('app-root ion-button')).getTagName();
  }

  getloginAlumno(){
    return element(by.css('app-root h6')).getText();
  }

 getInicio() {
    return element(by.css('app-root h6')).getText();
  }

  getTitulo(){
    return element(by.css('app-root h6')).getText();
  }

  getSaludo(){
    return element(by.css('app-root h6')).getText();
  }


}

/**import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(destination) {
    return browser.get(destination);
  }

  getParagraphText() {
    return element(by.deepCss('app-root ion-content')).getText();
  }
}
