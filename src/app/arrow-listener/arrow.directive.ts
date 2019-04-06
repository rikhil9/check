import {Directive, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
    selector: '[arrowUpDown]'
})
export class ArrowDirective {
    constructor() {
    }

    @Output()
    public arrowPressed = new EventEmitter<KeyboardEvent>();


    @HostListener('document:keydown.ArrowDown', ['$event'])
    @HostListener('document:keydown.ArrowUp', ['$event'])
    public onKeydown(event: KeyboardEvent): void {
        this.arrowPressed.emit(event);
    }
}