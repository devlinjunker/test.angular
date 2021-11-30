import { CommonModule } from "@angular/common";
import {  NgModule } from "@angular/core";
import { AppTranslationModule } from "translation/translation.module";
import { AngularComponent } from "./angular-component.component";

@NgModule({
  imports: [
    AppTranslationModule,
    CommonModule
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