import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
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
  public focussedItem: number = -1;

  constructor(){

  }
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
    if (event.key === "ArrowUp" && this.focussedItem > 0) {
        this.focussedItem--;
    }
    if (event.key === "ArrowDown" && this.focussedItem < this.dropDownValues.length-1) {
      this.focussedItem++;
    }
  }
/**
 * Select the focussed item on press of enter
 */
  public enterPressed() {
    this.setSelectedValue(this.dropDownValues[this.focussedItem]);
    this.closeDropDown();
    // this.focussedItem = -1; highlight will remain on the selected item
  }

}