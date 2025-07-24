import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"",component:AuthLayoutComponent,children:[
        {path:"login",component:LoginComponent,title:"login"},
        {path:"register",component:RegisterComponent,title:"register"},
        // {path:"forget",component:ForgetpasswordComponent,title:"forget"}

    ]},
    {path:"",component:MainLayoutComponent,children:[
        {path:"home",loadComponent:()=>import('./pages/home/home.component').then(c=>c.HomeComponent),},
        {path:"about",loadComponent:()=>import('./pages/about/about.component').then(c=>c.AboutComponent),},
        {path:"contact",loadComponent:()=>import('./pages/contact/contact.component').then(c=>c.ContactComponent),},
        {path:"notes",loadComponent:()=>import('./pages/notes/notes.component').then(c=>c.NotesComponent),},


        

    ]},
    {path:"**",loadComponent:()=>import('./pages/not-found/not-found.component').then(c=>c.NotFoundComponent)},
   
];
