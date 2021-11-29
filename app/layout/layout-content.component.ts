import { TRANSLATION_KEYS } from "../../shared/translation-keys";

export default {
  controller: LayoutContentController,
  controllerAs: 'vm',
  bindings: {},
  template: require('layout/layout-content.html')
}

function LayoutContentController($scope: ng.IScope) {
  const vm = this;

  vm.translateKey = TRANSLATION_KEYS.EXAMPLE_AJS;

  vm.layoutScope = ($scope.$parent.$parent as any).vm;
}
LayoutContentController.$inject = ['$scope'];