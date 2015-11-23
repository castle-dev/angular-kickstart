/**
 * angular-kickstart - Speed up your AngularJS development whith a great build system.
 * @version v1.1.0
 * @link https://github.com/castle-dev/angular-kickstart
 * @license MIT
 */
!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(){!function(){"use strict";function config($stateProvider,$urlRouterProvider,$logProvider,$httpProvider){$urlRouterProvider.otherwise("/"),$logProvider.debugEnabled(!0),$httpProvider.interceptors.push("httpInterceptor"),$stateProvider.state("root",{views:{header:{templateUrl:"src/common/header.tpl.html",controller:"HeaderCtrl"},footer:{templateUrl:"src/common/footer.tpl.html",controller:"FooterCtrl"}}})}function MainCtrl($log){$log.debug("MainCtrl laoded!")}function run($log){$log.debug("App is running!")}angular.element(document).ready(function(){angular.bootstrap(document,["app"])}),config.$inject=["$stateProvider","$urlRouterProvider","$logProvider","$httpProvider"],MainCtrl.$inject=["$log"],run.$inject=["$log"],angular.module("app",["ui.router","home","getting-started","common.header","common.footer","common.services.data","common.directives.version","common.filters.uppercase","common.interceptors.http","templates"]).config(config).run(run).controller("MainCtrl",MainCtrl).value("version","1.1.0")}()},{}]},{},[1]),function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(){!function(){"use strict";function config($stateProvider){$stateProvider.state("root.getting-started",{url:"/getting-started",views:{"@":{templateUrl:"src/app/getting-started/getting-started.tpl.html",controller:"GettingStartedCtrl as docs"}}})}function GettingStartedCtrl($log){var docs=this;docs.someMethos=function(){$log.debug("I'm a method")}}config.$inject=["$stateProvider"],GettingStartedCtrl.$inject=["$log"],angular.module("getting-started",[]).config(config).controller("GettingStartedCtrl",GettingStartedCtrl)}()},{}]},{},[1]),function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(){!function(){"use strict";function config($stateProvider){$stateProvider.state("root.home",{url:"/",views:{"@":{templateUrl:"src/app/home/home.tpl.html",controller:"HomeCtrl as home",resolve:{data:["DataService",function(DataService){return DataService.get()}]}}}})}function HomeCtrl(data){var home=this;home.data=data.data}config.$inject=["$stateProvider"],HomeCtrl.$inject=["data"],angular.module("home",[]).config(config).controller("HomeCtrl",HomeCtrl)}()},{}]},{},[1]),function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(){!function(){"use strict";function versionDirective(version){return{restrict:"A",link:function(scope,elm){elm.text(version)}}}versionDirective.$inject=["version"],angular.module("common.directives.version",[]).directive("appVersion",versionDirective)}()},{}]},{},[1]),function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(){!function(){"use strict";function httpInterceptor($q,$log){return{request:function(config){return config},requestError:function(rejection){return $log.debug(rejection),$q.reject(rejection)},response:function(response){return $log.debug("response: ",response),response},responseError:function(rejection){return $log.debug(rejection),$q.reject(rejection)}}}httpInterceptor.$inject=["$q","$log"],angular.module("common.interceptors.http",[]).factory("httpInterceptor",httpInterceptor)}()},{}]},{},[1]),function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(){!function(){"use strict";function dataService(){return{get:function(){return["some","data"]}}}angular.module("common.services.data",[]).factory("DataService",dataService)}()},{}]},{},[1]),function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(){!function(){"use strict";function uppercase(){return function(text){return text?text.toUpperCase():text}}angular.module("common.filters.uppercase",[]).filter("uppercase",uppercase)}()},{}]},{},[1]),function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(){!function(){"use strict";function headerCtrl($log){$log.debug("Header loaded")}headerCtrl.$inject=["$log"],angular.module("common.header",[]).controller("HeaderCtrl",headerCtrl)}()},{}]},{},[1]),function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(){!function(){"use strict";function footerCtrl($log){$log.debug("Footer loaded")}footerCtrl.$inject=["$log"],angular.module("common.footer",[]).controller("FooterCtrl",footerCtrl)}()},{}]},{},[1]),function(module){try{module=angular.module("templates")}catch(err){module=angular.module("templates",[])}module.run(["$templateCache",function($templateCache){"use strict";$templateCache.put("src/common/footer.tpl.html",'<div class="pure-g">\n  <div class="pure-u-1 text-center">\n    <p>With &hearts; from Detroit</p>\n  </div>\n</div>\n')}])}(),function(module){try{module=angular.module("templates")}catch(err){module=angular.module("templates",[])}module.run(["$templateCache",function($templateCache){"use strict";$templateCache.put("src/common/header.tpl.html",'<div class="pure-menu pure-menu-open pure-menu-horizontal">\n  <a class="pure-menu-heading" href="">angular-kickstart <span app-version></span></a>\n  <ul>\n    <li ui-sref-active="pure-menu-selected"><a href ui-sref="root.home">{{ \'home\' | uppercase }}</a>\n    </li>\n    <li ui-sref-active="pure-menu-selected"><a href ui-sref="root.getting-started">{{ \'getting started\' | uppercase }}</a>\n    </li>\n  </ul>\n</div>\n')}])}(),function(module){try{module=angular.module("templates")}catch(err){module=angular.module("templates",[])}module.run(["$templateCache",function($templateCache){"use strict";$templateCache.put("src/app/getting-started/getting-started.tpl.html",'<div class="pure-g island3">\n  <div class="content pure-u-1">\n    <p class="island-panel">\n      <strong>Note that this is only a getting started guide, for more detailed information about the build system, the available tasks, the configuration of the build or anything else, please refer to the <a href="https://github.com/castle-dev/angular-kickstart/#readme" target="_blank">documentation</a> on the GitHub project.</strong>\n    </p>\n\n    <h3>What and Why</h3>\n    <p>\n      <code>angular-kickstart</code> is an opinionated kickstart for single page application development with AngularJS. It makes your development and testing easy, keeps the structure of the project consistent and allows you to create a fully optimized production release with ease. Plus, it\'s got awesome generators to help you build your app even faster</p>\n\n    <h3>Getting started</h3>\n    <p>\n      Install\n      <strong><a href="https://github.com/joyent/node/wiki/installation" target="_blank">node.js</a></strong>. Then\n      <strong>sass, gulp and bower</strong> if you haven\'t yet.\n    </p>\n\n    <pre>\n    <code>\n    $ gem install sass\n    $ npm -g install gulp bower\n    </code>\n</pre>\n\n    <p>\n      After that, clone the master branch of this repo. Unzip the project and cd into it, then\n      install bower and npm dependencies, and run the application in development mode.\n    </p>\n\n    <pre>\n    <code>\n    $ npm install\n    $ bower install\n    $ gulp serve\n    </code>\n</pre>\n\n    <p>\n      You are now ready to go, your applcation is available at <code>http://127.0.0.1:3000</code>.\n    </p>\n    <p>\n      You are now ready to start coding, every file you add, edit or delete into the\n      <code>/client</code> folder, will be handled by the build system and the browser will reload.\n    </p>\n    <p>\n      When you are ready to build a production release there is a task for that.\n    </p>\n\n    <pre>\n    <code>\n    $ gulp serve:dist\n    </code>\n</pre>\n\n    <p>\n      This task will lint your code, optimize css js and images files, run unit tests. After the task has successfully finished, you can find an optimized version of your project in the\n      <code>/build/dist</code> folder.\n    </p>\n\n    <p>\n      Other tasks are available:\n    </p>\n\n    <pre>\n    <code>\n    #for developing running unit test on every file change.\n    $ gulp tdd\n\n    #for running e2e test. (you application should be running on http://127.0.0.1:3000)\n    $ gulp test:e2e\n\n    #for running unit tests one time then exit.\n    $ gulp test:unit\n    </code>\n</pre>\n    <p class="text-center">\n      <a href="https://github.com/castle-dev/angular-kickstart/#readme" target="_blank" class="pure-button button-xlarge pure-button-primary">\n        Full documentation on GitHub\n      </a>\n    </p>\n\n  </div>\n</div>\n</div>\n')}])}(),function(module){try{module=angular.module("templates")}catch(err){module=angular.module("templates",[])}module.run(["$templateCache",function($templateCache){"use strict";$templateCache.put("src/app/home/home.tpl.html",'<div class="pure-g">\n  <div class="island3 pure-u-1 pure-u-lg-2-3">\n    <h3>Speed up your <strong>AngularJS</strong> development with a complete and scalable build system that scaffolds the project for you. Just focus on writing code and tests,\n                <code>angular-kickstart</code> will take care of the rest.</h3>\n  </div>\n  <div class="island3 pure-u-1 pure-u-lg-1-3">\n    <a href="https://github.com/castle-dev/angular-kickstart/releases/latest" class="pure-button button-xlarge button-expanded">\n        Download\n      </a>\n    <a href="https://github.com/castle-dev/angular-kickstart/#readme" target="_blank" class="pure-button button-xlarge button-expanded pure-button-primary">\n        Docs on GitHub\n      </a>\n  </div>\n</div>\n\n<hr/>\n<div class="pure-g island">\n  <div class="pure-u-1 pure-u-lg-1-3 island">\n    <div class="text-center">\n      <img class="pure-img" src="assets/images/angular-logo.png">\n    </div>\n    <h3>AngularJS</h3>\n    <p>The best JavaScript framework out there will power up your awesome app.\n    </p>\n  </div>\n\n  <div class="pure-u-1 pure-u-lg-1-3 island">\n    <div class="text-center">\n      <img class="pure-img" src="assets/images/gulp-logo.png">\n    </div>\n    <h3>Gulpjs</h3>\n    <p>A smart and scalable <a href="http://gulpjs.com" target="_blank">gulpjs</a> based build system will take care of your development and testing workflow, as well as the optimization process for production release. <a href ui-sref="root.getting-started">Read more...</a>\n    </p>\n  </div>\n\n  <div class="pure-u-1 pure-u-lg-1-3 island">\n    <div class="text-center">\n      <img class="pure-img" src="assets/images/browserify-logo.png">\n    </div>\n    <h3>Browserify</h3>\n    <p><a href="http://browserify.org/" target="_blank">Browserify</a> allows you to require <a href="https://www.npmjs.com/" target="_blank">npm modules</a> in your client-side JavaScript.</p>\n  </div>\n\n</div>\n\n<div class="pure-g island">\n  <div class="pure-u-1 pure-u-lg-1-3 island">\n    <h4>Sass + SMACSS</h4>\n    <p><a href="http://sass-lang.com/" target="_blank">Sass</a> is the most mature, stable, and powerful professional grade CSS extension language. The project is structured following the <a href="http://smacss.com/" target="_blank">SMACSS</a> architecture.\n      Write your CSS in a modular and scalable way, the build system will compile your <code>.scss</code> files into a single css files. It should be easy to integrate less, stylus or any other preprocessor if you prefer. <a href="http://purecss.io/" target="_blank">Pure</a> is the default CSS framework, by you can easily plug your own.</p>\n  </div>\n\n  <div class="pure-u-1 pure-u-lg-1-3 island">\n    <h4>Generators</h4>\n    <p>angular-kickstart comes with three awesome generators–<code>gulp new:page</code>, <code>gulp new:component</code>, and <code>gulp new:service</code>–that puts new files where they\'re supposed to go and injects them into app.js and index.html so you can focus on the important stuff: your business logic.</p>\n  </div>\n\n  <div class="pure-u-1 pure-u-lg-1-3 island">\n    <h4>Keep Your Code Reusable</h4>\n    <p>Every general purpose directive, service or filter, should be placed into the  <code>common</code> directory, in this way you can copy and paste the directory into another project, require the module you need, and you are ready to go with your new project.\n    </p>\n  </div>\n</div>\n\n<div class="pure-g">\n  <div class="pure-u-1 pure-u-lg-1-3 island">\n    <h4>Unit testing</h4>\n    <p>The build system comes with a special task for running tests by using <a href="http://karma-runner.github.io/" target="_blank">Karma Test Runner</a>.\n    </p>\n  </div>\n\n  <div class="pure-u-1 pure-u-lg-1-3 island">\n    <h4>e2e testing</h4>\n    <p>end-to-end testing support is provided by the build system. Tests can be executed using <a href="http://angular.github.io/protractor/" target="_blank">protractor</a>.</p>\n  </div>\n\n  <div class="pure-u-1 pure-u-lg-1-3 island">\n    <h4>Build for production with ease</h4>\n    <p>Easily optimize css, js, and images files for production with <code>gulp build:dist</code>.</p>\n  </div>\n</div>\n')}])}();