import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import {  NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
 
  const _ngxSpinnerService =inject(NgxSpinnerService);
  //logic req
  //show loading sc
  _ngxSpinnerService.show();
  
  
  return next(req).pipe(finalize(()=>{
   //logic two case (next,err)
   _ngxSpinnerService.hide();


  }));  //logic res //jide loding sc
};
