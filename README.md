# BobTax - 법인세 신고 데이터 제공 시스템

4인 이하 법인을 위한 회계 및 법인세 신고 데이터 제공 프로그램

## 프로젝트 구조

```
TaxService/
├── backend/          # FastAPI 백엔드
│   ├── main.py
│   ├── api/
│   ├── requirements.txt
│   └── README.md
├── frontend/         # React + Vite 프론트엔드
│   ├── src/
│   ├── package.json
│   └── README.md
└── README.md        # 이 파일
```

## 기술 스택

### Backend
- **FastAPI** - Python 웹 프레임워크
- **Uvicorn** - ASGI 서버
- **Pandas** - 데이터 처리
- **OpenPyXL** - Excel 파일 처리

### Frontend
- **React** - UI 라이브러리
- **Vite** - 빌드 도구
- **Axios** - HTTP 클라이언트
- **React Router** - 라우팅

## 빠른 시작

### 1. Backend 실행

```bash
cd backend

# 가상환경 생성 및 활성화 (Windows)
python -m venv venv
venv\Scripts\activate

# 패키지 설치
pip install -r requirements.txt

# 서버 실행
python main.py
```

Backend 서버: http://localhost:8000
API 문서: http://localhost:8000/docs

### 2. Frontend 실행

```bash
cd frontend

# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```

Frontend 애플리케이션: http://localhost:3000

## 개발 가이드

### API 연동

Frontend에서 Backend API 호출 시 Vite proxy를 통해 자동 라우팅됩니다:

```javascript
// Frontend에서
import axios from 'axios'

// /api로 시작하는 요청은 자동으로 http://localhost:8000으로 프록시됨
const response = await axios.get('/api/test')
```

### 파일 인코딩 정책

#### ✅ Excel 파일 (.xlsx, .xls)
```python
# UTF-8 사용 - 문제 없음
df = pd.read_excel('파일.xlsx')  # encoding 파라미터 불필요
df.to_excel('출력.xlsx', index=False)
```

**이유**: Excel 파일은 내부적으로 XML 기반이며 UTF-8로 저장됨. pandas와 openpyxl이 자동 처리.

#### ⚠️ CSV 파일 (.csv)
```python
# Windows Excel 호환을 위해 CP949 사용
df = pd.read_csv('파일.csv', encoding='cp949')
df.to_csv('출력.csv', encoding='cp949', index=False)
```

**이유**: Windows Excel이 기본적으로 CP949로 CSV를 저장/읽기 때문.

#### 🏛️ 국세청 파일 변환
```python
# UTF-8 또는 EUC-KR 사용
with open('vat_report.txt', 'w', encoding='utf-8') as f:
    f.write(data)
```

**이유**: 국세청 파일변환 시스템 요구사항 ([Docs/부가세규칙_202509.md](../Docs/부가세규칙_202509.md) 참조).

#### 💻 콘솔 출력
```python
# Windows 콘솔은 CP949 사용
print('처리 완료')  # OK
# print('✅ 완료')  # 이모지 사용 금지 - UnicodeEncodeError 발생
```

**주의**: Windows 터미널에서 이모지나 특수 유니코드 문자 출력 시 오류 발생. ASCII 문자 사용 권장.

## 주요 기능 (예정)

- [ ] Excel 파일 업로드 및 파싱
- [ ] 복식부기 전표 생성
- [ ] 부가가치세 신고 데이터 생성
- [ ] 법인세 신고 데이터 생성
- [ ] 계정과목 관리
- [ ] 거래처 관리

## 포트 설정

- Backend: `8000`
- Frontend: `3000`

## 참고 문서

- [Backend README](./backend/README.md)
- [Frontend README](./frontend/README.md)
- 프로젝트 루트의 `CLAUDE.md` - 개발 가이드라인
- `Docs/부가세규칙_202509.md` - 국세청 파일변환 규칙
- `Docs/부가세파일변환_개발가이드.md` - 개발 코드 예시
