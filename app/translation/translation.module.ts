import { NgModule } from "@angular/core";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslationLoaderService } from "./translation-loader.service";


@NgModule({
  exports: [TranslateModule],
  imports: [TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useClass: TranslationLoaderService
    }
  })]
})
export class AppTranslationModule {}