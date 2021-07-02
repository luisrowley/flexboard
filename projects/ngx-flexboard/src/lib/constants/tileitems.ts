import { COMPONENTREGISTRY } from '../helpers/component.registry';
import { TileItem } from '../models/tileitem';
import { v4 as uuidv4 } from 'uuid';

export const TILE_ITEMS: TileItem[] = [ 
{component: COMPONENTREGISTRY.getTypeFor("ChartDefaultComponent"), data: {type: 'pie', uuid: uuidv4()}},
{component: COMPONENTREGISTRY.getTypeFor("ChartDefaultComponent"), data: {type: 'bar', uuid: uuidv4()}},
{component: COMPONENTREGISTRY.getTypeFor("ChartDefaultComponent"), data: {type: 'doughnut', uuid: uuidv4()}},
{component: COMPONENTREGISTRY.getTypeFor("ChartDefaultComponent"), data: {type: 'lines', uuid: uuidv4()}},
{component: COMPONENTREGISTRY.getTypeFor("ChartDefaultComponent"), data: {type: 'pie', uuid: uuidv4()}},
{component: COMPONENTREGISTRY.getTypeFor("ChartDefaultComponent"), data: {type: 'bar', uuid: uuidv4()}},
{component: COMPONENTREGISTRY.getTypeFor("ChartDefaultComponent"), data: {type: 'pie', uuid: uuidv4()}},
{component: COMPONENTREGISTRY.getTypeFor("ChartDefaultComponent"), data: {type: 'bar', uuid: uuidv4()}},
{component: COMPONENTREGISTRY.getTypeFor("ChartDefaultComponent"), data: {type: 'pie', uuid: uuidv4()}}
];