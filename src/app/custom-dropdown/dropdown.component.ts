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
  public selectedValue: string = "Please Select a value";

  public ngOnInit() {
    
  }

  public toggleDropDown() {
    this.dropDownOpened = !this.dropDownOpened
  }

  public setSelectedValue(selected: string) {
    this.selectedValue = selected;
    this.toggleDropDown();
  }

}