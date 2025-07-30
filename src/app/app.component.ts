import { FlowbiteService } from './core/services/flowbite/flowbite.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NgxSpinnerComponent } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgxSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss' ,
})
export class AppComponent implements OnInit , AfterViewInit {
  title = 'note-app';
    constructor(private FlowbiteService: FlowbiteService) {}


  ngOnInit(): void {
    this.FlowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }



  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      if (typeof initFlowbite === 'function') {
        setTimeout(() => initFlowbite(), 0);
      }
    }
  }
}
