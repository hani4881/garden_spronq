import React, { useState } from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { SidebarData } from './SidebarData';
import './components.css';
import { IconContext } from 'react-icons';

function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <Link to="#" className='menu-bars'>
                        <MenuOpenIcon style={{ color: 'white' }} onClick={showSidebar} /> 
                    </Link><div className='title'><h3>Garden mushrooms</h3></div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-item' onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className='manu-bars'>
                                <CloseIcon style={{ color: 'white' }} />
                            </Link><div className='title'><h3>Garden mushrooms</h3></div>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}
export default Navbar;
