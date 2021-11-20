export class LayoutController implements ng.IController {
  public currentStateCSS: string;
  public text: string;

  constructor(protected $rootScope: ng.IRootScopeService) {

  }

  public $onInit(): void {
    this.currentStateCSS = 'pink'
    this.text = SETTINGS_OBJ.constants.angularJsTest;
  }
}