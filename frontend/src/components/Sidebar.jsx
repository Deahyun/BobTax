import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Sidebar.css'

function Sidebar({ selectedMenu }) {
  const location = useLocation()

  if (!selectedMenu) {
    return (
      <aside className="sidebar">
        <div className="sidebar-empty">
          <p>상단 메뉴를 선택하세요</p>
        </div>
      </aside>
    )
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-title">
        <h2>{selectedMenu.title}</h2>
      </div>
      <nav className="sidebar-nav">
        {selectedMenu.subMenus.map((subMenu) => (
          <Link
            key={subMenu.id}
            to={subMenu.path}
            className={`sidebar-item ${location.pathname === subMenu.path ? 'active' : ''}`}
          >
            {subMenu.title}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
