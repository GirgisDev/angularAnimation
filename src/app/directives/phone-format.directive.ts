import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPhoneFormat]'
})
export class PhoneFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur () {
    let value = this.el.nativeElement.value;
    if ((/\(\d{3}\)\d{3}\-\d{3}/g).test(value) || !value)
      return;
    value = value.match(/.{1,3}/g);
    value[0] = '(' + value[0] + ')';
    value[1] = value[1] + '-'
    value = value.join('');
    this.el.nativeElement.value = value;
  }

}
