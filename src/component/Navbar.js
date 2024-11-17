import React from 'react';
import '../App.css';

const Navbar = () => {
    const menuList = ['Home', '스케줄러', '공부방', '랭킹', '마이페이지'];
    return (
        <nav className='navbar'>
            <ul className='menu-list'>
                {menuList.map((menu, index) => (
                    <li key={index}>{menu}</li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
