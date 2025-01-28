import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  signupForm: FormGroup // Declaration
  nameError: string = ""
  emailError: string = ""
  genderError: string = ""
  roleError: string = ""
  tncError: string = ""
  // [a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$
  constructor(){
    // Initialization
    this.signupForm = new FormGroup({
      full_name: new FormControl("", [Validators.required, Validators.minLength(5)]),
      email: new FormControl("", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      gender: new FormControl("", [Validators.required]),
      role: new FormControl("", [Validators.required]),
      tnc: new FormControl(false, [Validators.requiredTrue])
    })

    // let fullNameControl = this.signupForm.get("full_name")
    // let fullNameObservable = fullNameControl?.valueChanges
    // fullNameObservable?.subscribe(()=>{
    //   this.setNameError()
    // })
    this.signupForm.get("full_name")?.valueChanges.subscribe(()=>this.setNameError())
    this.signupForm.get("email")?.valueChanges.subscribe(()=>this.setEmailError())
    this.signupForm.get("tnc")?.valueChanges.subscribe(()=>this.setTncError())
    this.signupForm.get("role")?.valueChanges.subscribe(()=>this.setRoleError())
    this.signupForm.get("gender")?.valueChanges.subscribe(()=>this.setGenderError())
  }


  handleSubmit(){
    if(this.signupForm.valid){
      console.log(this.signupForm.value)
    }
    this.setEmailError()
    this.setGenderError()
    this.setRoleError()
    this.setTncError() 
  }

  setNameError(){
    let fullNameControl = this.signupForm.get("full_name")

    if(fullNameControl?.hasError("required")){
      this.nameError = "Name is Rquired!"
    }
    else if(fullNameControl?.hasError("minlength")){
      this.nameError = "Name must atleast 5 characters long!"
    }
    else{
      this.nameError = ""
    }
  }

  setEmailError(){
    let emailControl = this.signupForm.get("email")

    if(emailControl?.hasError("required")){
      this.emailError = "Email is Rquired!"
    }
    else if(emailControl?.hasError("pattern")){
      this.emailError = "Invalid email format!"
    }
    else{
      this.emailError = ""
    }
  }

  setGenderError(){
    let genderControl = this.signupForm.get("gender")

    if(genderControl?.hasError("required")){
      this.genderError = "Gender is Rquired!"
    }
    else{
      this.genderError = ""
    }
  }

  setRoleError(){
    let roleControl = this.signupForm.get("role")

    if(roleControl?.hasError("required")){
      this.roleError = "Role is Rquired!"
    }
    else{
      this.roleError = ""
    }
  }

  setTncError(){
    let tncControl = this.signupForm.get("tnc")

    if(tncControl?.hasError("required")){
      this.tncError = "Tnc is Rquired!"
    }
    else{
      this.tncError = ""
    }
  }

}
