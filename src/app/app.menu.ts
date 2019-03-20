import { MenuItem } from 'src/fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'glyphicon-dashboard',
        route: '/dashboard',
        submenu: null
    },
    {
        text: 'User',
        icon: 'glyphicon-user',
        route: '/user',
        submenu: null
    },
    {
        text: 'Settings',
        icon: 'glyphicon-wrench',
        route: '/settings',
        submenu: null
    }
];