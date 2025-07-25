import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private readonly  _authService = inject (AuthService);
  private readonly  _router = inject (Router);

  isLoading:boolean =false;
  succesMsg:string ="";
  errMsg:string ="";

  loginForm =new FormGroup({
   
    email:new FormControl(null ,[Validators.required,Validators.email]),
    password:new FormControl(null ,[Validators.required,Validators.pattern(/^[A-Z]\w{6,}$/)]),
   

  });


  submitLoginForm():void{

    // console.log(this.LoginForm.value);
   if(this.loginForm.valid){
    
    this.isLoading =true;
   this._authService.sendLoginData(this.loginForm.value).subscribe({
    next:(res) =>{
      if(res.msg === 'done'){
        console.log(res);
       
        // save token
        localStorage.setItem('userToken',res.token)


        // 3ashan ywdeny 3la el home fe wa2at mo3yab b2ah
        setTimeout(() => {
          this._router.navigate(['/home'])
        }, 600);

      }
      this.isLoading = false;
      // show success msg
      this.succesMsg =res.msg;
    },
    error:(err)=>{
      console.log(err);
       this.isLoading = false;
      //  show error
      this.errMsg = err.error.msg;
    },
   })

   }
  // 3ashan agbar el user ymlahom kolhom
   else{
   this.loginForm.markAllAsTouched();
   }

  }

}
