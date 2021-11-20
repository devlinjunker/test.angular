import angular = require('angular');
import { downgradeComponent } from '@angular/upgrade/static';
import { AngularComponent } from 'components/angular-component.component';
import LayoutContentComponent from 'layout/layout-content.component';
import { LayoutController } from 'layout/layout.controller';

export default angular
  .module('layout', [
  ]
)

.directive(
  'angularComponent',
  downgradeComponent({
    component: AngularComponent,
    // inputs: [''],
  })
)

.component('layoutContent', LayoutContentComponent)
.controller('LayoutController', LayoutController);