import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'angular-component',
  // template: require('components/angular-component.html')
  templateUrl: './angular-component.html'
})
export class AngularComponent implements OnInit {
  public text: string;

  ngOnInit(): void {
    this.text = SETTINGS_OBJ.constants.angularTest
  }
}