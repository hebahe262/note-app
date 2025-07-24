import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
// import { RouterOutlet } from "../../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";

import { FooterComponent } from "../footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {

}
