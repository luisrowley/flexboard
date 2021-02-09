export interface DashboardLayout {
    title: string; 
    rows: DashboardRow[];
}

export interface DashboardRow {
    rowspan: number;
    tiles: DashboardTile[];
}

export interface DashboardTile {
    colspan: number;
    size: string;
    isAuto?: boolean;
    component?: string; // change to boolean; if component is to be displayed
    rows?: DashboardRow[]; // used for nesting
}