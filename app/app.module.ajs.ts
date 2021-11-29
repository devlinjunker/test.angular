import angular = require('angular');
import angularTranslate = require('angular-translate');
import layoutModule from 'layout/layout.module.ajs'
import AjsTranslationModule from 'translation/ajs/translation.module.ajs';

export default angular
  .module('app', [
    angularTranslate,
    AjsTranslationModule.name,

    layoutModule.name
  ]
);