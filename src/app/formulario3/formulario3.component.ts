import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css']
})
export class Formulario3Component {

  constructor (private fb: FormBuilder){

  }

  get name(){
    return this.formUser.get('name') as FormControl;
  }

  get email(){
    return this.formUser.get('email') as FormControl;
  }

  // formUser = new FormGroup({
  //   'name': new FormControl('', Validators.required),
  //   'email': new FormControl('', [Validators.required , Validators.email ])
  // })

  formUser = this.fb.group({
    'email': ['', Validators.required],
    'name' : ['', [Validators.required , Validators.email ]]
  })

  procesar(){
    console.log(this.formUser.value);
  }


  // name = new FormControl('', Validators.required);
  // email = new FormControl('', [Validators.required , Validators.email ]);

}
