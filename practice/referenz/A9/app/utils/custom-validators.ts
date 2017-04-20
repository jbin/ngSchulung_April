import { FormControl } from '@angular/forms';
export class CustomValidators {

    static positiveNumber(ctrl: FormControl): {[key: string]: boolean} {
        const val: number = Number(ctrl.value);
        return val >= 0 ? null : {'positiveNumber': true};
    }
}
