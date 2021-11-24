import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'angular-component',
  template: require('components/angular-component.html')
})
export class AngularComponent implements OnInit {
  public text: string;

  public translateKey: string = 'TEST';

  ngOnInit(): void {
    this.text = SETTINGS_OBJ.constants.angularTest
  }
}