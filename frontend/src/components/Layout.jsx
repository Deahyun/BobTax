import React, { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { menuData } from '../data/menuData'
import './Layout.css'

function Layout() {
  const [selectedMenu, setSelectedMenu] = useState(null)
  const location = useLocation()

  // 현재 경로에 따라 선택된 메뉴 자동 설정
  useEffect(() => {
    const currentPath = location.pathname
    const foundMenu = menuData.find(menu =>
      menu.subMenus.some(sub => sub.path === currentPath)
    )
    if (foundMenu) {
      setSelectedMenu(foundMenu)
    }
  }, [location])

  return (
    <div className="layout">
      <Header selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />
      <div className="layout-body">
        <Sidebar selectedMenu={selectedMenu} />
        <main className="layout-content">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
