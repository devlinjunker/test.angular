import { IPromise } from "angular";
import { TranslationLoaderService } from "translation/translation-loader.service";

/* @ngInject */
export default function AjsTranslationLoaderService($q: ng.IQService, translationLoaderService: TranslationLoaderService): Function {
  return loadTranslations

  function loadTranslations(options): IPromise<any> {
    const { key } = options;

    const deferred = $q.defer();

    translationLoaderService.getTranslation(key).subscribe(
      (data) => {
        deferred.resolve(data);
      },
      () => {
        deferred.reject(key);
      }
    )

    return deferred.promise;
  }
}