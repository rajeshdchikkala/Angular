# Angular Completed Below Topics

## Basics of Angular

## Data binidng based on property

## Data pass from one component to another component

## loops and conditions

## Inline component call

## use of Trackby 
   - TrackBy is a directive that can work with ngFor to identify items in a list of DOM elements like a list or array to perform unique updates in the DOM, improving the speed and performance.
   - Track by is used to get only changed row.
   
## Pipes/custom pipes creation and there uses
   - Pipes is an angular implementation , which will only change DOM data before rendering to browser without changing the actual data.
   - we are displaying user friendly data.
   - Angular will have 2 types of pipes.
       ### Custom Pipe : 
	          Pipes written with specific conditions by developer.
	   ### Built in Pipes
   - SYNTAX FOR CREATING PIPE:
       - `ng g p <pipe-name>`
   
## Event emitter
   - Data flows into your component via property bindings and flows out of your component through event bindings. 
   - If we want your component to notify parent component about something then we can use the Output decorator with EventEmitter to create a custom event.
   - Uses:
     - Use in components with the `@Output directive` to emit custom events synchronously or asynchronously, and register handlers for those events by subscribing to an instance

## Modules:
   - App Module :path is ./app/app-module.
   - platformBrowserDynamic imported through `@angular/platform`.
   - In general every Angular project has Default Module and Defualt component.
       - Default Module = AppModule derived from ngModule.
   - Module will contains group of component. Example Payment Module will contain gpay component and giftcard component.
   - In this we register all files or components.
   - Minimum it should have one Module and one component.
   - App component is root component.
   
## Component
   - It is building block of functional elements.
   - Every angular application consists of at least one component.Each Component defines a class that contains application data and logic.
   - It is associated with a HTML templates that defines the view to be displayed to target environment.
   - In Angular, component will have 3 files which are as follows:
       - `<component-name>.component.ts`  where we write the Business logic
	   - `<component-name>.component.html` where we write the view logic ie. frontend
	   - `<component-name>.component.css` where we write the styling logic for displaying dom elements
	   - Example: component is product = product.component.ts, product.component.ts , product.component.ts.
	              These 3 files will be transpiled to get `product.js` which will be residing in main.js. 
   - SYNTAX TO CREATE COMPONENT: 
       - `ng generate component <component-name>` OR `ng g c <component-name>`
   ### Create a component as Root Component:
       - In App.module.ts with @ngModule wehave Bootstrap tag where we need o change with our newly defined component i.e. take our AppModule and add new module.
	   - in index.html, change the component name with `<app-first></app-first>`
	   
## Use of ng-container 
   - The `<ng-container>` allows us to use structural directives without any extra element, 
     making sure that the only DOM changes being applied are those dictated by the directives themselves.
   
## Directives:
   - Mainly used to manipulate DOM, which will be creating, parsing and reconstruct the DOM.
   - Its common business logic which can be used across the application.
   - There are two types of directies 
      ### PREDEFINED DIRECTIVES : 
	      - Directives which are created by Angular framework.
	      - Predefined directives are categorized into 3 types.
		     - STRUCTURAL DIRECTIVES: 
		        - This will start with `*` Symmbol. Mostly used for manipulating the DOM
		        - Examples: 
			          - `*ngIf` = This will check whether to render the DOM element based on conditions.
			          - `*ngFor`= This will iterate collection data structure,DOM will automatically rendered with collection.
	    
	  ### CUSTOM DIRECTIVES :
	      - Directives which are developed by developer
=======
# Databind

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

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

