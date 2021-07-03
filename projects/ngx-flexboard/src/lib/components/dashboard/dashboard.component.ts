import { Component,
         Input,
         ComponentFactoryResolver,
         ViewChildren,
         ViewContainerRef,
         QueryList,
         AfterViewInit,
         ChangeDetectorRef,
         ChangeDetectionStrategy, 
         OnInit} from '@angular/core';
import { TileItem, TileItemDescriptor } from '../../models/tileitem';
import { DashboardLayout } from '../../models/dashboard-layout.model';
import { COMPONENTREGISTRY } from '../../helpers/component.registry';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, AfterViewInit {

  public _layout: DashboardLayout;
  public _tileItems: TileItem[];
                      
  @Input() tileItems: TileItemDescriptor[];
  @Input() set layout(layout: DashboardLayout) {
    this._layout = layout;
  }

  // load all the ViewContainerRef targets by id
  @ViewChildren('dynamic', { read: ViewContainerRef }) 
  public widgetTargets: QueryList<ViewContainerRef>;

  constructor( 
    private componentFactoryResolver: ComponentFactoryResolver, 
    private changeDetector: ChangeDetectorRef
  ){ }

  ngOnInit(): void 
  {
    this.generateTileItems();
  }

  ngAfterViewInit(): void
  {
    this.widgetTargets
    .toArray()
    .forEach( (target: ViewContainerRef, index) => {
        this.loadComponent(target, index);
    });
  }

  private generateTileItems(): void
  {
    if(this.tileItems)
    {
      this._tileItems = this.tileItems.map(item => {
        return {
          component: COMPONENTREGISTRY.getTypeFor(item.className), 
          data: item.data
        }
      })
    }
  }

  private loadComponent(target: ViewContainerRef, index: number)
  {
    let currentItem = this._tileItems[index];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(currentItem.component);
    let componentRef: any = target.createComponent(componentFactory);
    componentRef.instance.mode = currentItem.data;

    this.changeDetector.detectChanges(); 
  }
}
