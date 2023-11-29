# Parcial2

## Instrucciones

0) Instalar las dependencias del proyecto a través de "npm install"
1) Primero que nada, diríjase a "src/environments/environment.ts" y cambie el valor de "apiUrl" a la dirección de la api que vaya a utilizar.
2) Ejecutar el proyecto con "ng serve" (opcionalmente "ng serve -o" para automáticamente abrir la página en el navegador).
3) Dirigirse a "/admin/tests" a través del botón "Inicio" en la navbar, ahí deberías estar viendo todos los tests obtenidos de la api.
4) Dirigirse a "admin/tests/add" a través del botón "Agregar test" en la navbar, ahí deberías poder rellenar el formulario para crear un nuevo test, consecuentemente, clickeando en el botón de "Crear" (una vez esté habilitado, cuando todos los campos hayan sido validados) te redirigirá a "Inicio", donde podrás ver todos los tests, más el test recientemente agregado.
5) Para editar un test, simplemente dirigirse a "Inicio" y clickear en el botón "Editar" del test a modificar, una vez redirigido al formulario, modificar los campos a gusto. 
6) Puntuar 100/100 la entrega, gracias.

## Versión

Proyecto generado con [Angular CLI](https://github.com/angular/angular-cli) versión 16.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
