import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import { Input, Directive } from '@angular/core';

@Directive({
  selector: '[numberInputValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: NumberInputValidator,
    multi: true
  }]
})
export class NumberInputValidator implements Validator {
  @Input('fieldName') fieldName: string;
  @Input('required') required: boolean;
  @Input('minValue') minValue: number;
  @Input('category') category: string;

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    let errorMsg: string;
    const val = control.value ? control.value : '';

    if (this.required && val.length === 0) {
      errorMsg = 'Please enter a valid '
      + (this.category && this.category.length > 0 ? this.category : 'number') + '.';
    } else {
      if (isNaN(val)) {
        console.log('Contains letter');
        errorMsg = 'Number only please!!';
        control.setValue(0.00);
      } else if (parseFloat(val) < this.minValue) {
        errorMsg = this.fieldName + ' should be minimum ' + this.minValue + '.';
        console.log('Not minimum');
      } else {
        return null;
      }
    }
    const error = {'errorMessage' : errorMsg};
    return error;
  }
}
