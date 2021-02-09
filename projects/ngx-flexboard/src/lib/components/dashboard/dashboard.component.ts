import { Component, OnInit, Input, ComponentFactoryResolver, ViewChildren, ViewContainerRef, QueryList, ViewChild, Compiler, TemplateRef, ComponentRef, AfterViewInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { DashboardLayout } from '../../models/dashboard-layout.model';
import { COMPONENTREGISTRY } from './component.registry';

export interface TileItem {
  component: any;
  data?: any;
}

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  /** 
   * @var _tiles | array para las celdas del grid
   * @todo En el futuro se implementará con servicio para carga dinámica
   */
  
  public _layout: DashboardLayout;
  public _tileItems = [ {component: COMPONENTREGISTRY.getTypeFor("ChartDefaultComponent"), data: {type: 'pie', uuid: uuidv4()}},
                        {component: COMPONENTREGISTRY.getTypeFor("ChartDefaultComponent"), data: {type: 'bar', uuid: uuidv4()}},
                        {component: COMPONENTREGISTRY.getTypeFor("ChartDefaultComponent"), data: {type: 'doughnut', uuid: uuidv4()}},
                        {component: COMPONENTREGISTRY.getTypeFor("ChartDefaultComponent"), data: {type: 'lines', uuid: uuidv4()}},                        
                        {component: COMPONENTREGISTRY.getTypeFor("ChartDefaultComponent"), data: {type: 'pie', uuid: uuidv4()}},
                        {component: COMPONENTREGISTRY.getTypeFor("ChartDefaultComponent"), data: {type: 'bar', uuid: uuidv4()}},
                        {component: COMPONENTREGISTRY.getTypeFor("ChartDefaultComponent"), data: {type: 'pie', uuid: uuidv4()}},
                        {component: COMPONENTREGISTRY.getTypeFor("ChartDefaultComponent"), data: {type: 'bar', uuid: uuidv4()}},
                        {component: COMPONENTREGISTRY.getTypeFor("ChartDefaultComponent"), data: {type: 'pie', uuid: uuidv4()}}
                      ];
                      
  // selected layout option
  @Input() set layout(layout: DashboardLayout) {
    this._layout = layout;
  }

  @Input() tileItems;


  // load all the ViewContainerRef targets by id
  @ViewChildren('dynamic', { read: ViewContainerRef }) public widgetTargets: QueryList<ViewContainerRef>;


  constructor( private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void 
  {

  }

  ngAfterViewInit(): void
  {
    this.widgetTargets.changes
        .subscribe(() => this.widgetTargets.toArray().forEach( (target: ViewContainerRef, index) =>  this.loadComponent(target, index)
        ))
    
    console.log(this.tileItems);
    console.log(this._tileItems);


  }

  public loadComponent( target: ViewContainerRef, index: number )
  {    
    //let currentItemIndex = Math.floor(Math.random() * this.tileItems.length);
    let currentItem = this._tileItems[index];

    console.log("loadComponent target: " + this.widgetTargets.first)
    

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(currentItem.component);
    let componentRef: any = target.createComponent(componentFactory);
    componentRef.instance.mode = currentItem.data;
  
  }

}
