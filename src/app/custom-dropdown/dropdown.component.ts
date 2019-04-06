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
  @Input()
  public defaultValue: DropDownValue = {title: "Please Select a value"}; // Default value 

  public dropDownOpened: boolean = false;
  public selectedValue: DropDownValue ;

/**
 * On init Lifecycle event
 */
  public ngOnInit(): void {
    this.selectedValue = this.defaultValue; // sets the default value
  }
/**
 * Toggles the dropdown list
 */
  public toggleDropDown(): void {
    this.dropDownOpened = !this.dropDownOpened
  }
/**
 * Forcefully closes the dropdown
 */
  public closeDropDown(): void {
    this.dropDownOpened = false;
  }
/**
 * Set the selected value of the dro down
 * @param selected {DropdownValue} selected value
 */
  public setSelectedValue(selected: DropDownValue): void {
    this.selectedValue = selected;
    this.toggleDropDown();
  }
/**
 * Handle arrow movement
 * @param event {KeyboardEvent} event
 */
  public arrowMovement(event: KeyboardEvent): void {
    //TODO
  }

}