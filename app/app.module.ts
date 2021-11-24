import { Injector, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UpgradeModule } from '@angular/upgrade/static';
import { ComponentModule } from "components/component.module";
import appModule from './app.module.ajs';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    ComponentModule,
  ]
})
export class AppModule {
  public constructor(
    protected upgrade: UpgradeModule, 
    protected injector: Injector
  ) {}


  public ngDoBootstrap() {
    // Angular global injector for classes initialized without DI.
    window.injector = this.injector;

    // // Bootstrap an AngularJS application from this NgModule.
    this.upgrade.bootstrap(document.querySelector('#app'), [appModule.name], {
      // In production mode (when ng-annotate is active), throw an error immediately if any annotations are missing.
      // This is the alternative to only throwing the error when that part of the app is loaded.
      strictDi: process.env.NODE_ENV === 'production',
    });
  }
}