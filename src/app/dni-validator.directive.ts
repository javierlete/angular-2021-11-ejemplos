import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

const LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";

/** A hero's name can't match the given regular expression */
export function dniValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if(control.value.trim().length === 0) {
            return null;
        }
        const dni: string = control.value;

        const numero: number = +dni.substring(0, 8);
        const letra: string = dni[8];

        const letraCalculada = LETRAS[numero % 23];

        return letra === letraCalculada ? null: {dniValidator: {value: control.value}};
    };
}
