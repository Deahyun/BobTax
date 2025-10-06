import React from 'react'
import PageTemplate from './PageTemplate'

function GenericPage({ title }) {
  return (
    <PageTemplate title={title}>
      <div style={{ textAlign: 'center', padding: '40px 20px' }}>
        <h2 style={{ color: '#3498db', marginBottom: '20px' }}>{title}</h2>
        <p style={{ fontSize: '16px', color: '#7f8c8d' }}>
          이 페이지는 개발 예정입니다.
        </p>
      </div>
    </PageTemplate>
  )
}

export default GenericPage
