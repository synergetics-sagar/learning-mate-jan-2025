import { FormControl } from "@angular/forms"

export interface UserForm {
    id?: FormControl<string>
    name: FormControl<string>
    email: FormControl<string>
    gender: FormControl<string>
    role: FormControl<string>
    tnc: FormControl<boolean>
}
