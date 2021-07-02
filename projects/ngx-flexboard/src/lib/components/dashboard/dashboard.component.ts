import { Component,
         Input,
         ComponentFactoryResolver,
         ViewChildren,
         ViewContainerRef,
         QueryList,
         AfterViewInit,
         ChangeDetectorRef,
         ChangeDetectionStrategy } from '@angular/core';
import { TileItem, TileItemDescriptor } from '../../models/tileitem';
import { TILE_ITEMS } from '../../constants/tileitems';
import { DashboardLayout } from '../../models/dashboard-layout.model';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements AfterViewInit {

  public _layout: DashboardLayout;
  public _tileItems: TileItem[] = TILE_ITEMS;
                      
  @Input() tileItems: TileItemDescriptor[];
  @Input() set layout(layout: DashboardLayout) {
    this._layout = layout;
  }

  // load all the ViewContainerRef targets by id
  @ViewChildren('dynamic', { read: ViewContainerRef }) public widgetTargets: QueryList<ViewContainerRef>;

  constructor( private componentFactoryResolver: ComponentFactoryResolver, private changeDetector: ChangeDetectorRef)
  { }

  ngAfterViewInit(): void
  {
    this.widgetTargets
    .toArray()
    .forEach( (target: ViewContainerRef, index) =>  
            this.loadComponent(target, index) );
  }

  public loadComponent( target: ViewContainerRef, index: number )
  {
    let currentItem = this._tileItems[index];    

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(currentItem.component);
    let componentRef: any = target.createComponent(componentFactory);
    componentRef.instance.mode = currentItem.data;

    this.changeDetector.detectChanges(); 
  }
}
