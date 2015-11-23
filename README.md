# [angular-kickstart](http://dev.entercastle.com/angular-kickstart/#/)

[![Build Status](https://travis-ci.org/castle-dev/angular-kickstart.svg)](https://travis-ci.org/castle-dev/angular-kickstart)

**Speed up your [AngularJS](http://angularjs.org) development with a complete and scalable gulpjs based build system that scaffolds the project for you. Just focus on your app, angular-kickstart will take care of the rest.**
***

#### See a [working demo](http://dev.entercastle.com/angular-kickstart/).

### What and Why

angular-kickstart is an opinionated kickstart for single page application development with AngularJS. It makes your development and testing easy, keeps the structure of the project consistent and allows you to create a fully optimized production release with ease. After having developed a lot of AngularJS projects I decided to collect here what I've learnt.

### Getting started

Install **node.js**. Then **sass**, **gulp** and **bower** if you haven't yet.

    $ gem install sass
    $ npm -g install gulp bower

After that, clone the master branch of this repo. Unzip the project and cd into it, then install bower and npm dependencies, and run the application in development mode.

    $ npm install
    $ bower install
    $ gulp serve

You are now ready to go, your applcation is available at **http://127.0.0.1:3000**.

**Every file you add, edit or delete into the `/client` folder will be handled by the build system**.

When you are ready to build a production release there is a task for that:

    $ gulp serve:dist

This task will lint your code, optimize css js and images files, run unit tests. After the task has successfully finished, you can find an optimized version of your project inside the  `/build/dist` folder.

### Features

5 simple tasks: `gulp serve`,`gulp serve:dist`, `gulp tdd`, `gulp test:unit`, `gulp test:e2e`:

* JavaScript file continuous linting with `jshint`.
* Require nodejs modules directly in your js code with Browserify
* SASS continuous compiling.
* `Unit` and `e2e` testing support. (for `e2e` testing you need to have a java runtine installed, take a look at [selenium JavaScript api ](http://selenium.googlecode.com/git/docs/api/javascript/index.html) and [protractor](https://github.com/angular/protractor) for more informations.
* HTML templates converted into strings and attached to a single javascript file (to avoid one http call for each template).
* Livereload provided by [browsersync](http://www.browsersync.io/).
* angular module dependencies automatically injected using [ng-annotate](https://github.com/olov/ng-annotate).
* Static resources minification and optimization for production.

### Directory Structure

* `build/` - Build files and configuration, the most important files to note are `build.config.js`, `protractor.config.js` and `karma.config.js`. These files are the heart of the build system. Take a look.
* `client/` the source code and tests of your application
* `.bowerrc` - the bower configuration file. This tells Bower to install components in the `client/src/vendor` directory.
* `.jshintrc` - JSHint configuration.
* `gulpfile` - see [The Build System](#thebuildsystem) below.
* `bower.json` - Contains the list of bower dependencies.
* `package.json` - node.js dependencies.

### <a name="thebuildsystem"></a>The Build System

There are some `tasks` available in `gulpfile.js`. You can dig into the file to familiarize yourself with gulpjs.

A description of the common tasks:

* **gulp serve** - When this task runs, the build will take care of watching files. Every time you change a file in the `client/` folder, the build recompiles every file, and your browser will reload automagically showing you the changes.
You just need to add new JavaScript and css files in the `client/index.html` file.
* **gulp serve:dist** - This task will run jshint and unit tests under the `client/test/unit` folder (thanks to `karma runner`), and create a fully-optimized version of your application under the `build/dist/` folder. The optimization consists of concatenate, minify and compress js and css files, optimize images, and put every template into a js file loaded by the application.
A code coverage report will be available inside the `client/test/unit-results`.
* **gulp tdd** - Run units tests on every js file change
* **gulp test:unit** - For running unit tests one time then exit.
* **gulp test:e2e** - Run end-to-end tests inside the `client/test/e2e` folder with `protractor`. If a test fails, you should find a screenshot of the page inside the `client/test/screenshots` folder.
**Note that you need to have the application running in order to run e2e tests. You can launch this task from another terminal instance.**

### Scaffolding

When building new stuff, always prefer to scaffold the setup. We've made that super easy by using [yeoman](http://yeoman.io/) to build our own custom generators. They handle everything from case conventions and file locations to updating index.html and app.js. They even setting up unit tests for the new stuff.

* **gulp new:page** - create a new route, controller, and template
* **gulp new:component** - create a new directive, controller, and template
* **gulp new:service** - create a new service

### Contributing

PR and issues reporting are always welcome :]

### License

See LICENSE file

### Thank you, community!

All this wouldn't have been possible without these great [contributors](https://github.com/castle-dev/angular-kickstart/graphs/contributors) and everybody who comes with new ideas and suggestions.
