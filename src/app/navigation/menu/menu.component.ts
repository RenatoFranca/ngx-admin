import {
  AfterContentInit,
  Component
} from '@angular/core';
import {
  fadeInOutMedium,
  fadeInOutSmall
} from '../../_animations/fade-in-out';
import { zoomInOutMedium } from '../../_animations/zoom-in-out';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    fadeInOutMedium,
    fadeInOutSmall,
    zoomInOutMedium
  ]
})
export class MenuComponent implements AfterContentInit {

  loaded = false;

  menuSimpleHtml = `
    <button mat-button [matMenuTriggerFor]="menu">Menu</button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item>Item 1</button>
      <button mat-menu-item>Item 2</button>
    </mat-menu>
  `;

  menuSimpleTypeScript = `
    import { MatMenuModule } from '@angular/material';
    
    @NgModule({
      imports: [
        MatMenuModule,
      ],
    })
    export class SomeModule { }
  `;

  menuSimpleCss = `
    /** No CSS for this example */
  `;

  constructor() { }

  ngAfterContentInit() {
    this.loaded = true;
  }

}