import { MenuItem } from 'src/fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'fa-home',
        route: '/dashboard',
        submenu: null
    },
    {
        text: 'User',
        icon: 'fa-user',
        route: '/user',
        submenu: null
    },
    {
        text: 'Customers',
        icon: 'fa-briefcase',
        route: '/customers',
        submenu: null
    },
    {
        text: 'Settings',
        icon: 'fa-wrench',
        route: '/settings',
        submenu: null
    }
];