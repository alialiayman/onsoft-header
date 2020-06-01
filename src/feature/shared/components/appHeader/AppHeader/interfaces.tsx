
export interface IMenuItem {
    name: string,
    title: string;
    width?: string;
    icon?: any;
    color: "primary" | "secondary" | "inherit";
    menuItems?: IMenuItem[]
}


export interface IHeaderConfig {
    logo: string;
    elevation?: number;
    sideMenu: {
        title: string;
        items: IMenuItem[]
    };
    toprightButtons: IMenuItem[];
}

export interface IButtonState {
    name: string;
    open: boolean;
    anchorElement: string;
}

export interface state {
    drawerOpen: boolean;
    buttons: IButtonState[],
    sidebar: { selectedItem: string, selectedSubItem: string,  anchorElement: any | null }
}