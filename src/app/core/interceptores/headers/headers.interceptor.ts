import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {

const _pLATFORM_ID =inject(PLATFORM_ID);

// logic el5as be raqest
//nb3at el token
//a5dna nos5ah mn req 
//w3ashan ntaked akter n3ml if 3ashan ykon fe token orady
if(isPlatformBrowser(_pLATFORM_ID)){
  if(localStorage.getItem('userToken') !==null){
req = req.clone({
  setHeaders:{
  token: `3b8ny__${localStorage.getItem('userToken')!}`
  }
});
};
}


  return next(req);   //logic 5as bl res
};
