import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, ChangeDetectorRef } from '@angular/core';
import { DropDownValue } from './dropdown.interface';

@Component({
  selector: 'dropdown-select',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropDownComponent implements OnInit {
  @Input() 
  public dropDownValues: Array<DropDownValue>;
  public dropDownOpened: boolean = false;
  @Input()
  public defaultValue: DropDownValue;
  public selectedValue: DropDownValue = {title: "Please Select a value"};

  public ngOnInit() {
    if( this.defaultValue ){
      this.selectedValue = this.defaultValue;
    }
  }

  public toggleDropDown() {
    this.dropDownOpened = !this.dropDownOpened
  }

  public setSelectedValue(selected: DropDownValue) {
    this.selectedValue = selected;
    this.toggleDropDown();
  }

}