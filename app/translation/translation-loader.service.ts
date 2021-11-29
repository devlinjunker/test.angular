import { Observable, from } from "rxjs";
import { Injectable } from "@angular/core";
import { TranslateLoader } from "@ngx-translate/core";
import { DEMO_TRANSLATIONS } from "./translations.demo";

@Injectable()
export class TranslationLoaderService implements TranslateLoader {

  getTranslation(lang: string): Observable<any> {
    // 'lang' parameter here is passed in from call to TranslateService.use

    const defaultResponse = from([ DEMO_TRANSLATIONS ])

    // TODO: Fetchdata  using HTTP Request and return Observable from data or return defaultResponse

    return defaultResponse
  }
}