
/* @ngInject */
export default function AjsTranslationConfig($translateProvider: ng.translate.ITranslateProvider) {
  $translateProvider.useLoader('translationLoader', {})
  $translateProvider.preferredLanguage('en');
  $translateProvider.use('en');
}