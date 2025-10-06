import React from 'react'
import { menuData } from '../data/menuData'
import './Header.css'

function Header({ selectedMenu, onMenuSelect }) {
  return (
    <header className="header">
      <div className="header-title">
        <h1>BobTax 법인세 신고 시스템</h1>
      </div>
      <nav className="header-nav">
        {menuData.map((menu) => (
          <button
            key={menu.id}
            className={`nav-item ${selectedMenu?.id === menu.id ? 'active' : ''}`}
            onClick={() => onMenuSelect(menu)}
          >
            {menu.title}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header
