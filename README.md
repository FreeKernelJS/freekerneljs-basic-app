# freekerneljs-basic-app

A basic application Template to be used with [FreeKernelJS Generator](https://github.com/FreeKernelJS/generator-freekerneljs).  
This Template uses AngularJS as the MVC framework, combined with [freekerneljs-bootstrap-theme
](https://github.com/FreeKernelJS/freekerneljs-bootstrap-theme) to provide the UI design.  
It can be used as a starting point and basis to develop your own application.

#### Quick Introduction:
* How to add [A New Page](https://github.com/FreeKernelJS/freekerneljs-basic-app/wiki/Adding-A-New-Page) to the application.
* How to add [A New Widget](https://github.com/FreeKernelJS/freekerneljs-basic-app/wiki/Adding-A-New-Widget).
* How to add [A New Service](https://github.com/FreeKernelJS/freekerneljs-basic-app/wiki/Adding-A-New-Service).
* How to [Generate API Documentation](https://github.com/FreeKernelJS/generator-freekerneljs/wiki/grunt-tasks#docs) easily from your JavaScript code.


##### Features:
- Routing and sharing data between different sections in the application.
- Modular architecture that can be extended.
- Best practices for performance.
- Responsive UI
- Http service
- Localization
- <a href="http://sass-lang.com/">Sass</a> CSS preprocessors.
- Documentation format and configurations, to be used with ngdoc.
- Unit testing with Jasmine.
- HTML 5 structure.


##### Dependencies:
- [jquery](https://github.com/jquery/jquery) (v2.1.x)
- <a href="https://angularjs.org/">angular</a> (v1.4.x)
- <a href="https://github.com/angular-ui/ui-router">angular-ui-router</a> (v0.2.x)
- <a href="https://github.com/angular-translate/angular-translate">angular-translate</a> (v2.7.2)
- <a href="https://github.com/ded/script.js/">script.js</a> (v2.5.7)
 

##### Structure:

```
.
└── app/
    ├── assets/
    │   ├── css
    │   ├── images
    │   └── sass
    ├── data/
    │   ├── locale/
    │   └── server/
    ├── docs/
    │   └── content/    
    ├── src/
    │   ├── services/
    │   │   └── http.js
    │   ├── views/
    │   │   ├── main/
    │   │   │   └── controller.js
    │   │   ├── home/
    │   │   │   ├── controller.js
    │   │   │   └── page.html
    │   │   └── page2/
    │   │       ├── controller.js
    │   │       └── page.html    
    │   ├── widgets/
    │   │   ├── header/
    │   │   │   ├── module.js
    │   │   │   └── template.html
    │   │   └── navbar/
    │   │       ├── module.js
    │   │       └── template.html
    │   ├── app.module.js
    │   └── app.routes.js
    ├── test/
    │   ├── spec/
    │   └── karma.conf.js
    ├── app.js
    └── index.html
```
- `assets`:  this folder contains any resources being required by the application. It also points to the selected theme being used for this application.
- `data`: mock-up data. Both "server" and "locale" folders can be moved to the back-end in a real live environment.
  * `server`: this folder contains mock up JSON.
  * `locale`: this folder contains files for localization.
- `docs`: this folder contains the output files generated with angular-ngdocs.
  * `content`: put any custome content for the documentation inside this folder.
- `src`: this folder contains all JavaScript source codes.
  * `services`: this folder contains any utilities and services being used by the application.
  * `widgets`: this folder contains the different directives/UI components/UI widgets.
  * `views`: this folder contains views that represent pages (one view per page). With the exception of the main controller - this controller is responsible for managing global aspects of the application and it's view, which is usually the main sturcure of the application, often being described inside the index.html file.
  * `app.module.js`: this file lists all the modules required by the application.
  * `app.routes.js`: this file is using angular-ui-router package to declare all routes for pages in the application.
- `test`: this folder contains files for testing.
  * `spec`: this folder contains spec files to run tests with Jasmine
  * `karma.conf.js`: this file defines configurations for unit testing with Jasmine.
- `app.js`: required by index.html. This file is responsible for loading all app's JS dependencies first (including app.module.js, app.routes.js), then bootstrap the application.
