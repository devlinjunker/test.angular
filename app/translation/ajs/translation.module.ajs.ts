import angular = require("angular");
import angularTranslate = require('angular-translate');
import { downgradeInjectable } from "@angular/upgrade/static";
import AjsTranslationConfig from "./translation.config.ajs";
import AjsTranslationLoaderService from "./translation-loader.service.ajs";
import { TranslationLoaderService } from "translation/translation-loader.service";

const AjsTranslationModule = angular.module('translation', [angularTranslate])
.config(AjsTranslationConfig)
.service('translationLoader', AjsTranslationLoaderService)
.service('translationLoaderService', downgradeInjectable(TranslationLoaderService));

export default AjsTranslationModule;
  