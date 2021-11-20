export default {
  controller: LayoutContentController,
  controllerAs: 'vm',
  bindings: {},
  template: require('layout/layout-content.html')
}

function LayoutContentController($scope: ng.IScope) {
  const vm = this;
  vm.layoutScope = ($scope.$parent.$parent as any).vm;
}