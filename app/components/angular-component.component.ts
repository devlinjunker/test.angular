import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { TRANSLATION_KEYS } from '../../shared/translation-keys';

@Component({
  selector: 'angular-component',
  // template: require('components/angular-component.html')
  templateUrl: './angular-component.html'
})
export class AngularComponent implements OnInit {
  public text: string;

  public translateKey: string = TRANSLATION_KEYS.EXAMPLE;

  constructor(private translate: TranslateService) {
    // This is needed to trigger TranslationLoaderService.getTranslation
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.text = SETTINGS_OBJ.constants.angularTest;
  }
}