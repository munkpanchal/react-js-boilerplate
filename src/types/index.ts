export type HeaderItemType = {
    title: string;
    path: string;
};

export type SidebarChildType = {
    title: string;
    path: string;
    icon: string;
};

export type SidebarItemType = {
    title: string;
    path: string;
    icon: string;
    children?: SidebarChildType[];
};
