import {Directive, Output, EventEmitter, HostListener} from '@angular/core';
/**
 * Directive to listen Keypress enter
 */
@Directive({
    selector: '[clickEnter]'
})
export class ClickEnterDirective {
    constructor() {
    }

    @Output()
    public clickEnter = new EventEmitter<KeyboardEvent>();

    @HostListener('document:keydown.enter', ['$event'])
    public onKeydown(event: KeyboardEvent): void {
        this.clickEnter.emit(event);
    }
}