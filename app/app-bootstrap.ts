import _ = require('lodash');
window['_'] = _;

import $ = require('jquery');
window['$'] = window['jQuery'] = $;

// contains reference to zone.js (required by angular)
require('./polyfills');


import angular = require('angular');
window['angular'] = angular;

import { AppModule } from './app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

$.getJSON('/conf/config.json').done(bootstrap).fail(error)


function bootstrap(settings: typeof SETTINGS_OBJ) {
  $("#layout_controller").show();

  window['SETTINGS_OBJ'] = settings;

  if (_.isObject(settings.auth)) {
    const script = document.createElement('script');
    script.src = settings.auth.host + '/js/auth-bundle.js'

    script.onload = () => {
      platformBrowserDynamic().bootstrapModule(AppModule);
    }
  } else {
    console.warn('No Settings Auth')
    platformBrowserDynamic().bootstrapModule(AppModule);
  } 
}
function error(){
  $("#no_settings_file").show();
  throw new Error('No Settings File Found')
}