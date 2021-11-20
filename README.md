# Angular / AngularJS Upgrade Test

Simplified Implementation of an AngularJS/Angular Hybrid Application

## Setup Steps:

1. Install Dependencies
  - Webpack
    - HTML Loader
    - HTML Webpack Plugin
    - TS Loader
    - Copy Webpack Plguin
  - Angular
    - Angular Core
    - Angular Common
    - Compilere
    - ngTools/Webpack
    - Upgrade Module
  - Typescript
  - TODO: Karma
  - TODO: Mocha
  - JQuery
  - Lodash
  - Types
    - Jquery
    - Angular
  - Angular Platform Browser + Dynamic
  - Nodemon
  - Express

2. Setup Webpack Config
  - Entry
  - Resolve
  - Module Rules
  - Plugins
  
2. Setup index.ejs

3. Setup App-Bootstrap

4. Setup App Module
  - Add Browser Module

5. Setup Layout directory with AngularJS and Angular Components

6. Add Angular Component 

7. Setup Typescript Config

8. Setup scripts

9. Globally avaialable Objects (and types?) with _refereces.d.ts

10. AJS/AngularJS Hybrid
  - Add App Module AJS
  - Add Upgrade Module to App Module
  - call upgrade.bootstrap on AJS App Module
  - remove recompile directive 
    - TODO: on events?

11. Add Pollyfills.ts

12. Create Layout Module AJS
  - Add Layout Content Component (AJS Component)
  - Add Layout Controller (AJS Controller)
  - Add Angular Component Downgrade
  - Ensure App Module AJS depdends on this

12. Create Component Module
  - Ensure App Module Loads Component Module


## Questions:

  > What triggers a watch update?

  - [x] config.json
  - [x] app-bootstrap.ts
  - [ ] .ts files
  - [ ] .json files
  - [ ] .module.ts files?
  - [ ] .module.ajs files?
  - [ ] .html files
  - [ ] _references.d.ts?
  - [ ] webpack.config.jss?

> Why .ejs file?


## Goals 

- [ ] Run `ngc` (`npm run build:ng`) without errors
- [ ] Move to AOT Compilation
  - requires ngc?
  - PlatformBrowser() vs PlatformBrowserDynamic()
  - @ngtools/webpack
- [ ] No More AngularJS?
- [ ] API Data Requests and Precompiled HTML?