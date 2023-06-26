import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import HelpIcon from '@mui/icons-material/Help';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        path: "/home",
        cName: 'nav-text'
    },
    {
        title: "Garden Map",
        icon: <MapIcon />,
        path: "/GardenMap",
        cName: 'nav-text'
    },
    {
        title: "Book Online",
        icon: <BookOnlineIcon />,
        path: "/BookOnline",
        cName: 'nav-text'
    },
    {
        title: "About",
        icon: <HelpIcon />,
        path: "/about",
        cName: 'nav-text'
    },
];
