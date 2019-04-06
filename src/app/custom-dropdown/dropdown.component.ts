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

  public ngOnInit(): void {
    if( this.defaultValue ){
      this.selectedValue = this.defaultValue;
    }
  }

  public toggleDropDown(): void {
    this.dropDownOpened = !this.dropDownOpened
  }

  public closeDropDown(): void {
    this.dropDownOpened = false;
  }

  public setSelectedValue(selected: DropDownValue): void {
    this.selectedValue = selected;
    this.toggleDropDown();
  }

  public arrowMovement(event: KeyboardEvent): void {
    console.log("moving")
  }

}