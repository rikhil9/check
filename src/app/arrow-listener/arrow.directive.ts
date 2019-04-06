import {Directive, Output, EventEmitter, HostListener} from '@angular/core';
/**
 * Directive to listen Up and Down arrow
 */
@Directive({
    selector: '[arrowPressed]'
})
export class ArrowDirective {

    @Output()
    public arrowPressed = new EventEmitter<KeyboardEvent>();

    @HostListener('document:keydown.ArrowDown', ['$event'])
    @HostListener('document:keydown.ArrowUp', ['$event'])
    public onKeydown(event: KeyboardEvent): void {
        this.arrowPressed.emit(event);
    }
}
