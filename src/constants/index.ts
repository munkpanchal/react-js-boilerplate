import { dashboard, grc, grcAgent, grcRepo, reports, secArc, soc } from './images';

import type { HeaderItemType, SidebarItemType } from '../types';

export const HEADER_ITEMS: HeaderItemType[] = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'About Us',
        path: '/about',
    },
    {
        title: 'Contact',
        path: '/contact',
    },
];

export const SIDEBAR_ITEMS: SidebarItemType[] = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: dashboard,
    },
    {
        title: 'GRC',
        path: '/grc',
        icon: grc,
        children: [
            {
                title: 'GRC Agent',
                path: '/grc/grc-agent',
                icon: grcAgent,
            },
            {
                title: 'GRC Repo',
                path: '/grc/grc-repo',
                icon: grcRepo,
            },
        ],
    },
    {
        title: 'SecArc',
        path: '/secarc',
        icon: secArc,
    },
    {
        title: 'SoC',
        path: '/soc',
        icon: soc,
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: reports,
    },
];
export const SIDEBAR_ITEMS_TITLE = [
    {
        title: 'GRC',
        path: '/grc',
        icon: grc,
    },
    {
        title: 'GRC Agent',
        path: '/grc/grc-agent',
        icon: grc,
    },
    {
        title: 'GRC Repo',
        path: '/grc/grc-repo',
        icon: grc,
    },
    {
        title: 'SecArc',
        path: '/secarc',
        icon: secArc,
    },

    {
        title: 'SoC',
        path: '/soc',
        icon: soc,
    },

    {
        title: 'Reports',
        path: '/reports',
        icon: reports,
    },
];
