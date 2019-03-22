import { MenuItem } from 'src/fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'fa-home',
        route: '/authenticated/dashboard',
        submenu: null
    },
    {
        text: 'Usuários',
        icon: 'fa-user',
        route: '/authenticated/user',
        submenu: null
    },
    {
        text: 'Credenciado',
        icon: 'fa-briefcase',
        route: null,
        submenu: [
            {
                text: 'Selecionar',
                icon: 'fa-arrow-alt-circle-right',
                route: null,
                submenu: [
                    {
                        text: 'Interior',
                        icon: 'fa-tractor',
                        route: '/authenticated/customer-selection/country-side',
                        submenu: null
                    },
                    {
                        text: 'RMR',
                        icon: 'fa-city',
                        route: '/authenticated/customer-selection/city',
                        submenu: null  
                    }
                ]
            },
            {
                text: 'Cadastrar',
                icon: 'fa-pen',
                route: '/authenticated/customer',
                submenu: null  
            },
            {
                text: 'Editais',
                icon: 'fa-book-open',
                route: '/authenticated/customer-options/announcement',
                submenu: null 
            }
        ]
    },
    {
        text: 'Manutenção',
        icon: 'fa-wrench',
        route: null,
        submenu: [
            {
                text: 'Acesso',
                icon: 'fa-book-open',
                route: '/authenticated/access',
                submenu: null 
            },
            {
                text: 'Configurar',
                icon: 'fa-cog',
                route: '/authenticated/settings',
                submenu: null 
            }
        ]
    }
];