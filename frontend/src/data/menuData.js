// 메뉴 구조 정의
export const menuData = [
  {
    id: 'basic-settings',
    title: '기본 환경설정',
    subMenus: [
      { id: 'basic-assets', title: '기초자산', path: '/basic-settings/assets' },
      { id: 'corp-info', title: '법인 기본정보', path: '/basic-settings/corp-info' },
      { id: 'stock-info', title: '주식 및 지분 정보', path: '/basic-settings/stock-info' },
      { id: 'account-info', title: '계좌정보', path: '/basic-settings/account' },
      { id: 'credit-card', title: '신용카드정보', path: '/basic-settings/credit-card' },
      { id: 'cash-card', title: '현금카드정보', path: '/basic-settings/cash-card' }
    ]
  },
  {
    id: 'vat',
    title: '부가세 신고',
    subMenus: [
      { id: 'vat-filing', title: '부가세 신고', path: '/vat/filing' },
      { id: 'vat-inquiry', title: '부가세 조회', path: '/vat/inquiry' }
    ]
  },
  {
    id: 'withholding-tax',
    title: '원천세 신고',
    subMenus: [
      { id: 'withholding-filing', title: '원천세 신고', path: '/withholding-tax/filing' },
      { id: 'withholding-inquiry', title: '원천세 조회', path: '/withholding-tax/inquiry' }
    ]
  },
  {
    id: 'corporate-tax',
    title: '법인세 신고 자료생성',
    subMenus: [
      { id: 'corporate-tax-generate', title: '법인세 신고 자료생성', path: '/corporate-tax/generate' }
    ]
  },
  {
    id: 'employee',
    title: '직원 관리',
    subMenus: [
      { id: 'employee-register', title: '직원 등록', path: '/employee/register' },
      { id: 'employee-inquiry', title: '직원 조회', path: '/employee/inquiry' }
    ]
  },
  {
    id: 'salary',
    title: '급여 관리',
    subMenus: [
      { id: 'salary-earned-income', title: '근로소득 급여지급', path: '/salary/earned-income' },
      { id: 'salary-business-income', title: '사업소득 급여지급', path: '/salary/business-income' },
      { id: 'salary-daily-worker', title: '일용근로자 급여지급', path: '/salary/daily-worker' },
      { id: 'salary-inquiry', title: '급여조회', path: '/salary/inquiry' }
    ]
  },
  {
    id: 'payment-statement',
    title: '지급명세서 제출',
    subMenus: [
      { id: 'ps-earned-income', title: '근로소득 지급명세서', path: '/payment-statement/earned-income' },
      { id: 'ps-earned-simple', title: '근로소득 간이지급명세서', path: '/payment-statement/earned-simple' },
      { id: 'ps-business-income', title: '사업소득 지급명세서', path: '/payment-statement/business-income' },
      { id: 'ps-retirement', title: '퇴직소득 지급명세서', path: '/payment-statement/retirement' }
    ]
  },
  {
    id: 'accounting',
    title: '회계 관리',
    subMenus: [
      { id: 'accounting-journal', title: '전표입력', path: '/accounting/journal' },
      { id: 'accounting-ledger', title: '계정별원장', path: '/accounting/ledger' },
      { id: 'accounting-trial-balance', title: '시산표', path: '/accounting/trial-balance' },
      { id: 'accounting-income-statement', title: '손익계산서', path: '/accounting/income-statement' },
      { id: 'accounting-balance-sheet', title: '재무상태표', path: '/accounting/balance-sheet' }
    ]
  },
  {
    id: 'system',
    title: '시스템 관리',
    subMenus: [
      { id: 'system-user', title: '사용자 관리', path: '/system/user' },
      { id: 'system-permission', title: '권한 관리', path: '/system/permission' },
      { id: 'system-log', title: '로그 관리', path: '/system/log' },
      { id: 'system-backup', title: '백업/복원', path: '/system/backup' }
    ]
  }
]
