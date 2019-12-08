import { Directive } from '@angular/core';

@Directive({
  selector: '[appPremium]'
})
export class PremiumDirective {
  //  Directive is a declarable
  //  Every use of directive creates an instance
  //  It is not advisable to change the selector of a directive
  //  as it can cause conflicts with HTML attributes of built -in directives
  constructor() {
    console.log('Directive created');
  }
}
