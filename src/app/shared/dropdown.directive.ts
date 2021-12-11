import { Directive, HostBinding, HostListener } from "@angular/core";
@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{
    //adds a css when the element it sits on is clicked on
   @HostBinding('class.open') isOpen =  false;

   @HostListener('click') toggleOpen() {
       this.isOpen = !this.isOpen;
   }

}