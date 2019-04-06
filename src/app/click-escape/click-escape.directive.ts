import {Directive, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
    selector: '[clickEscape]'
})
export class ClickEscapeDirective {
    constructor() {
    }

    @Output()
    public clickEscape = new EventEmitter<KeyboardEvent>();

    @HostListener('document:keydown.escape', ['$event'])
    public onKeydown(event: KeyboardEvent): void {
        this.clickEscape.emit(event);
    }
}