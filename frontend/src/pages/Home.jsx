import React from 'react'
import PageTemplate from './PageTemplate'

function Home() {
  return (
    <PageTemplate title="BobTax 법인세 신고 시스템">
      <div style={{ textAlign: 'center', padding: '50px 0' }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>환영합니다</h2>
        <p style={{ fontSize: '18px', color: '#7f8c8d', lineHeight: '1.8' }}>
          4인 이하 법인을 위한 회계 및 법인세 신고 데이터 제공 프로그램입니다.
          <br />
          상단 메뉴에서 원하는 기능을 선택하세요.
        </p>
        <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ padding: '20px', background: '#ecf0f1', borderRadius: '8px', minWidth: '200px' }}>
            <h3 style={{ color: '#2c3e50', margin: '0 0 10px 0' }}>부가세 신고</h3>
            <p style={{ margin: 0, fontSize: '14px' }}>부가가치세 신고 및 조회</p>
          </div>
          <div style={{ padding: '20px', background: '#ecf0f1', borderRadius: '8px', minWidth: '200px' }}>
            <h3 style={{ color: '#2c3e50', margin: '0 0 10px 0' }}>원천세 신고</h3>
            <p style={{ margin: 0, fontSize: '14px' }}>원천세 신고 및 조회</p>
          </div>
          <div style={{ padding: '20px', background: '#ecf0f1', borderRadius: '8px', minWidth: '200px' }}>
            <h3 style={{ color: '#2c3e50', margin: '0 0 10px 0' }}>법인세 자료생성</h3>
            <p style={{ margin: 0, fontSize: '14px' }}>법인세 신고 자료 생성</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}

export default Home
