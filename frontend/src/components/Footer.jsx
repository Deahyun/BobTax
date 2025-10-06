import React from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>COPYRIGHT (C) {currentYear} BobTax. ALL RIGHTS RESERVED.</p>
    </footer>
  )
}

export default Footer
