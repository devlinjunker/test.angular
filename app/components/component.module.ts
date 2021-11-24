import {  NgModule } from "@angular/core";
import { AppTranslationModule } from "translation/translation.module";
import { AngularComponent } from "./angular-component.component";

@NgModule({
  imports: [
    AppTranslationModule
  ],
  exports: [
    AngularComponent
  ],
  declarations: [
    AngularComponent
  ],
  entryComponents: [
    AngularComponent
  ]
})
export class ComponentModule {}