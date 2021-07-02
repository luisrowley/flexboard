import { ComponentClass } from "../registers/component.registry";

export interface TileItem {
    component: ComponentClass;
    data?: any;
}

export interface TileItemDescriptor {
    className: string;
    data?: any;
}
