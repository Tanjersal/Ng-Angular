import { FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

export function ForbiddenName(name: FormControl): ValidatorFn {
  return (control: AbstractControl): { [s: string]: any } | null => {

    const names = ['Fabien', 'Arnaud'];

    console.log(name);

    if (names.indexOf(name.value) === - 1) {
      return { forbidden: { value: name.value } };
    } else {
      return null;
    }
  };
}

// export function ForbiddenNames(name: FormControl): { [s: string]: boolean } | null {
//   const names = ['Arnaud', 'Fabien'];

//   if (names.indexOf(name.value) === - 1) {
//     return { forbidden: true };
//   } else {
//     return null;
//   }
// }
