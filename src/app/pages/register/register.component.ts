import { routes } from './../../app.routes';
import { Component, inject, Inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private readonly  _authService = inject (AuthService);
  private readonly  _router = inject (Router);
  private readonly  _toastrService = inject (ToastrService);

  isLoading:boolean =false;
  succesMsg:string ="";
  errMsg:string ="";

  registerForm =new FormGroup({
    name:new FormControl(null ,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl(null ,[Validators.required,Validators.email]),
    password:new FormControl(null ,[Validators.required,Validators.pattern(/^[A-Z]\w{6,}$/)]),
    age:new FormControl(null ,[Validators.required,Validators.pattern(/^(1[0-9]|[2-7][0-9]|80)$/)]),
    phone:new FormControl(null ,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),

  });


  submitRegisterForm():void{

    // console.log(this.registerForm.value);
   if(this.registerForm.valid){
    
    this.isLoading =true;
   this._authService.sendRegisterData(this.registerForm.value).subscribe({
    next:(res) =>{
      if(res.msg === 'done'){
        console.log(res);

         // toster
        this._toastrService.success(res.msg,'GoodNotes');

        // 3ashan ywdeny 3la el login fe wa2at mo3yab b2ah
        setTimeout(() => {
          this._router.navigate(['/login'])
        }, 600);

      }
      this.isLoading = false;
      // show success msg
      this.succesMsg =res.msg;
    },
    error:(err)=>{
      console.log(err);
      // this._toastrService.error(err.msg,'faild');
       this.isLoading = false;
      //  show error
      this.errMsg = err.error.msg;
    },
   })

   }
  // 3ashan agbar el user ymlahom kolhom
   else{
   this.registerForm.markAllAsTouched();
   }

  }

}
