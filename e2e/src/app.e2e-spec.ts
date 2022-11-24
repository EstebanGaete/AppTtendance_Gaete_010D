import { AppPage } from './app.po';

describe('Ejemplos ', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Prueba Button', () => {
    page.navigateTo();
    expect(page.getBotonInicioSe()).toContain('Iniciar Sesión');
  });

  it('texto login', () =>{ 
    page.navigateTo();
    expect(page.getloginAlumno()).toContain('user');

  });

  it('Prueba Inicio',  () => {
     page.navigateTo();
     expect(page.getInicio()).toContain('app dedicada a facilitar el proceso de asistencias en DuocUC');
   });

  it('Prueba 4', () => { 
    page.navigateTo();
    expect(page.getTitulo()).toContain('Bienvenido nuevamente');
  });

  it('Prueba 5', () => { 
    page.navigateTo();
    expect(page.getSaludo()).toContain('Buenas tardes!');
  });

});

/**
 import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  it('should be blank', () => {
    page.navigateTo();
      expect(page.getParagraphText()).toContain('Start with Ionic UI Components');
    });
  });
**/