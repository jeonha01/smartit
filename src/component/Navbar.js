import React, { useState } from 'react';
import '../App.css';

const Navbar = () => {
    const menuList = ['Home', '스케줄러', '공부방', '랭킹', '마이페이지'];
    const [activeMenu, setActiveMenu] = useState('Home'); // 초기값: 'Home'

    return (
        <nav className='navbar'>
            <ul className='menu-list'>
                {menuList.map((menu, index) => (
                    <li
                        key={index}
                        className={`menu-item ${activeMenu === menu ? 'active' : ''}`} // 활성화된 메뉴에 클래스 추가
                        onClick={() => setActiveMenu(menu)} // 클릭 시 상태 업데이트
                    >
                        {menu}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;


