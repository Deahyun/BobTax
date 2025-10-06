# BobTax Frontend (React + Vite)

## 설치 및 실행

### 1. 패키지 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 http://localhost:3000 접속

### 3. 빌드

```bash
npm run build
```

## 프로젝트 구조

```
frontend/
├── src/
│   ├── App.jsx          # 메인 앱 컴포넌트
│   ├── App.css         # 스타일
│   └── main.jsx        # 진입점
├── public/             # 정적 파일
├── index.html          # HTML 템플릿
├── vite.config.js      # Vite 설정
├── package.json        # 프로젝트 정보 및 의존성
└── README.md
```

## 주요 패키지

- **React** - UI 라이브러리
- **Vite** - 빌드 도구 및 개발 서버
- **Axios** - HTTP 클라이언트
- **React Router DOM** - 라우팅

## Backend API 연동

Vite proxy 설정을 통해 `/api/*` 요청은 자동으로 `http://localhost:8000`으로 전달됩니다.

```javascript
// API 호출 예시
import axios from 'axios'

const response = await axios.get('/api/test')
```

## 개발 시 주의사항

1. Backend 서버(FastAPI)가 8000 포트에서 실행 중이어야 API 연동 가능
2. CORS 설정은 Backend에서 처리됨
3. Excel 업로드 등의 기능 개발시 cp949 인코딩 고려
