import React from 'react'
import './PageTemplate.css'

function PageTemplate({ title, children }) {
  return (
    <div className="page-template">
      <div className="page-header">
        <h1>{title}</h1>
      </div>
      <div className="page-content">
        {children || <p>해당 페이지는 개발 예정입니다.</p>}
      </div>
    </div>
  )
}

export default PageTemplate
