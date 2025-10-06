# CLAUDE.md

이 파일은 Claude Code가 BobTax 프로젝트 작업 시 참고하는 가이드 문서입니다.

## 프로젝트 개요

**BobTax** - 4인 이하 법인을 위한 회계 및 법인세 신고 데이터 제공 시스템

### 프로젝트 구조

```
Projects_BobTax/
├── Data/                    # Excel 데이터 파일
│   └── excel/
│       ├── 매입/           # 신용카드, 전자세금계산서 매입
│       └── 매출/           # 전자세금계산서 매출
├── Develop/                # (구) 프로그램 소스코드
├── Docs/                   # 문서
│   ├── ref.txt            # 메뉴 구조 참고
│   └── 법인세_신고_프로그램_UI_및_권한_설계서.docx
├── TaxService/            # 주요 개발 디렉토리
│   ├── backend/           # FastAPI 백엔드
│   ├── frontend/          # React + Vite 프론트엔드
│   └── Docs/              # 프로젝트 문서
├── tmp/                   # 임시 파일
├── claude_notes/          # Claude 작업 기록
└── CLAUDE.md             # 이 파일
```

## TaxService 프로젝트 상세

### 기술 스택

**Backend (FastAPI)**
- FastAPI 0.115.0
- Uvicorn (ASGI 서버)
- Pandas 2.0.3 - Excel 데이터 처리
- OpenPyXL 3.1.5 - Excel 파일 처리
- Python-multipart - 파일 업로드
- Pydantic - 데이터 검증

**Frontend (React + Vite)**
- React 18
- Vite (빌드 도구)
- React Router DOM - 라우팅
- Axios - HTTP 클라이언트

### 포트 설정

- Backend: `http://localhost:8000`
- Frontend: `http://localhost:3000`
- API Proxy: `/api` → `http://localhost:8000`

## Backend 구조

```
backend/
├── main.py              # FastAPI 앱 진입점
├── requirements.txt     # Python 패키지 의존성
├── .env.example        # 환경변수 예시
├── .gitignore
├── api/
│   ├── __init__.py
│   └── routes.py       # API 엔드포인트
└── README.md
```

### 주요 API 엔드포인트

- `GET /` - 서버 정보
- `GET /health` - 헬스체크
- `GET /api/test` - API 테스트
- `POST /api/upload/excel` - Excel 파일 업로드
- `GET /api/accounts` - 계정과목 목록

### Backend 실행 방법

```bash
cd C:\Root\Projects_BobTax\TaxService\backend

# 가상환경 생성 및 활성화 (Windows)
python -m venv venv
venv\Scripts\activate

# 패키지 설치
pip install -r requirements.txt

# 서버 실행
python main.py
```

## Frontend 구조

```
frontend/
├── src/
│   ├── App.jsx              # 라우팅 설정
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   ├── components/          # UI 컴포넌트
│   │   ├── Header.jsx/css   # 상단 메뉴
│   │   ├── Sidebar.jsx/css  # 좌측 메뉴
│   │   ├── Footer.jsx/css   # 하단 Copyright
│   │   └── Layout.jsx/css   # 전체 레이아웃
│   ├── pages/               # 페이지 컴포넌트
│   │   ├── Home.jsx         # 홈페이지
│   │   ├── GenericPage.jsx  # 공통 페이지 템플릿
│   │   └── PageTemplate.jsx/css
│   └── data/
│       └── menuData.js      # 메뉴 구조 정의
├── public/
├── index.html
├── vite.config.js           # Vite 설정 (Proxy 포함)
├── package.json
└── README.md
```

### Frontend 실행 방법

```bash
cd C:\Root\Projects_BobTax\TaxService\frontend

# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```

## 메뉴 구조

전체 9개 대분류, 37개 세부 메뉴로 구성

### 1. 기본 환경설정
- 기초자산 (`/basic-settings/assets`)
- 계좌정보 (`/basic-settings/account`)
- 신용카드정보 (`/basic-settings/credit-card`)
- 현금카드정보 (`/basic-settings/cash-card`)

### 2. 부가세 신고
- 부가세 신고 (`/vat/filing`)
- 부가세 조회 (`/vat/inquiry`)

### 3. 원천세 신고
- 원천세 신고 (`/withholding-tax/filing`)
- 원천세 조회 (`/withholding-tax/inquiry`)

### 4. 법인세 신고 자료생성
- 법인세 신고 자료생성 (`/corporate-tax/generate`)

### 5. 직원 관리
- 직원 등록 (`/employee/register`)
- 직원 조회 (`/employee/inquiry`)

### 6. 급여 관리
- 근로소득 급여지급 (`/salary/earned-income`)
- 사업소득 급여지급 (`/salary/business-income`)
- 일용근로자 급여지급 (`/salary/daily-worker`)
- 급여조회 (`/salary/inquiry`)

### 7. 지급명세서 제출
- 근로소득 지급명세서 (`/payment-statement/earned-income`)
- 근로소득 간이지급명세서 (`/payment-statement/earned-simple`)
- 사업소득 지급명세서 (`/payment-statement/business-income`)
- 퇴직소득 지급명세서 (`/payment-statement/retirement`)

### 8. 회계 관리
- 전표입력 (`/accounting/journal`)
- 계정별원장 (`/accounting/ledger`)
- 시산표 (`/accounting/trial-balance`)
- 손익계산서 (`/accounting/income-statement`)
- 재무상태표 (`/accounting/balance-sheet`)

### 9. 시스템 관리
- 사용자 관리 (`/system/user`)
- 권한 관리 (`/system/permission`)
- 로그 관리 (`/system/log`)
- 백업/복원 (`/system/backup`)

## 파일 인코딩 정책

### Excel 파일 (.xlsx, .xls)
```python
# UTF-8 사용 - 문제 없음
df = pd.read_excel('파일.xlsx')  # encoding 파라미터 불필요
df.to_excel('출력.xlsx', index=False)
```
**이유**: Excel 파일은 내부적으로 XML 기반이며 UTF-8로 저장됨

### CSV 파일 (.csv)
```python
# Windows Excel 호환을 위해 CP949 사용
df = pd.read_csv('파일.csv', encoding='cp949')
df.to_csv('출력.csv', encoding='cp949', index=False)
```
**이유**: Windows Excel이 기본적으로 CP949로 CSV를 저장/읽기

### 국세청 파일 변환
```python
# UTF-8 또는 EUC-KR 사용
with open('vat_report.txt', 'w', encoding='utf-8') as f:
    f.write(data)
```
**이유**: 국세청 파일변환 시스템 요구사항

### 콘솔 출력
```python
# Windows 콘솔은 CP949 사용
print('처리 완료')  # OK
# print('✅ 완료')  # 이모지 사용 금지 - UnicodeEncodeError 발생
```

## Git 버전 관리

### Repository 정보
- **GitHub Repository**: https://github.com/Deahyun/BobTax
- **Branch**: main
- **User**: Deahyun (tegaget@gmail.com)
- **SSH Key**: ~/.ssh/BobTax

### Git 설정 확인
```bash
cd C:\Root\Projects_BobTax\TaxService
git remote -v
git status
git log --oneline
```

### 주요 Git 명령어
```bash
# 변경사항 커밋
git add .
git commit -m "커밋 메시지"

# GitHub에 push
git push origin main

# 최신 코드 받기
git pull origin main

# 브랜치 확인
git branch -a
```

### .gitignore 설정
- Backend: Python 가상환경, __pycache__, .env
- Frontend: node_modules, dist, .env

## 복식부기 체계

- 모든 거래는 차변/대변으로 분개
- 전표번호 체계: T001-1, P001-1, S001-1 형식
- 표준 계정코드: 4자리 (예: 1410, 2110, 6110)
- 매입세액공제: 공제/불공제/부분공제 구분

## 부가가치세 전자신고 개발 참고문서

### 필수 참고 문서
1. **`Docs/부가세규칙_202509.md`** - 국세청 파일변환 규칙
   - 신고서 코드 체계, 레코드 구조, 데이터 형식 규칙

2. **`Docs/부가세파일변환_개발가이드.md`** - 실제 개발 코드 예시
   - XML/TXT 파일 구조, Python 예시, 변환 로직

### 부가세 파일변환 핵심 규칙
```python
# 국세청 파일 형식 필수사항
- 인코딩: UTF-8 또는 EUC-KR
- 날짜: YYYYMMDD (하이픈 없음)
- 금액: 정수 (콤마 없음)
- 사업자번호: 10자리 (하이픈 없음)
- 레코드길이: 고정길이 준수 (19/23/27/34/38자리)
```

## 개발 시 주의사항

1. **Excel 파일 작업시 항상 UTF-8 사용 (cp949 아님)**
2. **한글 출력시 이모지 사용 금지**
3. **Windows 콘솔 호환성 우선**
4. **부가세 관련 개발시 반드시 Docs 폴더 참고문서 확인**

## 추가 문서

프로젝트 관련 추가 문서는 `TaxService/Docs/` 폴더에 마크다운 형식으로 저장:

```
TaxService/Docs/
├── ref.txt                              # 메뉴 구조 참고
├── 법인세_신고_프로그램_UI_및_권한_설계서.docx
└── [추가 문서].md                       # 필요시 추가
```

## 현재 개발 상태 (2025-10-06)

### 완료된 작업
- [x] FastAPI + React + Vite 기본 개발 환경 구축
- [x] 전체 메뉴 구조 설계 및 구현 (9개 대분류, 37개 세부 메뉴)
- [x] Header, Sidebar, Footer 레이아웃 완성
- [x] React Router 기반 라우팅 설정
- [x] Backend API 기본 구조 (Excel 업로드, 계정과목 조회)
- [x] Git 저장소 초기화 및 GitHub 연동

### 다음 작업 예정
- [ ] 각 메뉴별 페이지 상세 구현
- [ ] Excel 데이터 업로드/파싱 기능
- [ ] 복식부기 전표 생성 로직
- [ ] 부가가치세 신고 데이터 생성
- [ ] 법인세 신고 데이터 생성
- [ ] 데이터베이스 연동 (PostgreSQL)
- [ ] 사용자 인증 및 권한 관리

## 참고 링크

- [Backend README](./TaxService/backend/README.md)
- [Frontend README](./TaxService/frontend/README.md)
- [TaxService README](./TaxService/README.md)
- [GitHub Repository](https://github.com/Deahyun/BobTax)
