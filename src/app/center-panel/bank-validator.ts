import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[BankBalanceValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: BankBalanceValidator,
    multi: true
  }]
})
export class BankBalanceValidator implements Validator {
  @Input('maxBalance') maxBalance: number;

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    let errorMsg: string;
    const val = control.value ? control.value : '';
    const value = parseFloat(val);
    console.log('maxBalance ', this.maxBalance, value);
    if (value > this.maxBalance) {
      // errorMsg = 'Maximum amount can be &#8377;' +  this.maxBalance;
      errorMsg = undefined;
    } else {
        return null;
      }
    // console.log('errorMsg ', errorMsg);
    const error = {'errorMessage' : errorMsg};
    return error;
  }

}
