import { Component } from '@angular/core';
import { unevenLayout } from './constants/layout.mock';
import { TILE_ITEMS } from './constants/tileitems.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public layout;
  public tileItems;

  ngOnInit(){
    this.layout = unevenLayout;
    this.tileItems = TILE_ITEMS;
  }
}
