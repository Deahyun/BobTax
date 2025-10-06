import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import GenericPage from './pages/GenericPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* 기본 환경설정 */}
          <Route path="/basic-settings/assets" element={<GenericPage title="기초자산" />} />
          <Route path="/basic-settings/account" element={<GenericPage title="계좌정보" />} />
          <Route path="/basic-settings/credit-card" element={<GenericPage title="신용카드정보" />} />
          <Route path="/basic-settings/cash-card" element={<GenericPage title="현금카드정보" />} />

          {/* 부가세 신고 */}
          <Route path="/vat/filing" element={<GenericPage title="부가세 신고" />} />
          <Route path="/vat/inquiry" element={<GenericPage title="부가세 조회" />} />

          {/* 원천세 신고 */}
          <Route path="/withholding-tax/filing" element={<GenericPage title="원천세 신고" />} />
          <Route path="/withholding-tax/inquiry" element={<GenericPage title="원천세 조회" />} />

          {/* 법인세 신고 자료생성 */}
          <Route path="/corporate-tax/generate" element={<GenericPage title="법인세 신고 자료생성" />} />

          {/* 직원 관리 */}
          <Route path="/employee/register" element={<GenericPage title="직원 등록" />} />
          <Route path="/employee/inquiry" element={<GenericPage title="직원 조회" />} />

          {/* 급여 관리 */}
          <Route path="/salary/earned-income" element={<GenericPage title="근로소득 급여지급" />} />
          <Route path="/salary/business-income" element={<GenericPage title="사업소득 급여지급" />} />
          <Route path="/salary/daily-worker" element={<GenericPage title="일용근로자 급여지급" />} />
          <Route path="/salary/inquiry" element={<GenericPage title="급여조회" />} />

          {/* 지급명세서 제출 */}
          <Route path="/payment-statement/earned-income" element={<GenericPage title="근로소득 지급명세서" />} />
          <Route path="/payment-statement/earned-simple" element={<GenericPage title="근로소득 간이지급명세서" />} />
          <Route path="/payment-statement/business-income" element={<GenericPage title="사업소득 지급명세서" />} />
          <Route path="/payment-statement/retirement" element={<GenericPage title="퇴직소득 지급명세서" />} />

          {/* 회계 관리 */}
          <Route path="/accounting/journal" element={<GenericPage title="전표입력" />} />
          <Route path="/accounting/ledger" element={<GenericPage title="계정별원장" />} />
          <Route path="/accounting/trial-balance" element={<GenericPage title="시산표" />} />
          <Route path="/accounting/income-statement" element={<GenericPage title="손익계산서" />} />
          <Route path="/accounting/balance-sheet" element={<GenericPage title="재무상태표" />} />

          {/* 시스템 관리 */}
          <Route path="/system/user" element={<GenericPage title="사용자 관리" />} />
          <Route path="/system/permission" element={<GenericPage title="권한 관리" />} />
          <Route path="/system/log" element={<GenericPage title="로그 관리" />} />
          <Route path="/system/backup" element={<GenericPage title="백업/복원" />} />

          {/* 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
