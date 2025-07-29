import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errosInterceptor: HttpInterceptorFn = (req, next) => {

const _toastrService =inject(ToastrService);

  return next(req).pipe(

  catchError((err)=>{
    console.log('errors From interceptor',err);

    _toastrService.error(err.error.msg);
    

    return throwError(()=>err);
  })
  );
};
