# BobTax Backend (FastAPI)

## 설치 및 실행

### 1. 가상환경 생성 및 활성화

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/Mac
python -m venv venv
source venv/bin/activate
```

### 2. 패키지 설치

```bash
pip install -r requirements.txt
```

### 3. 서버 실행

```bash
# 개발 서버 (자동 재시작)
python main.py

# 또는 uvicorn 직접 실행
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### 4. API 문서 확인

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## 프로젝트 구조

```
backend/
├── main.py              # FastAPI 앱 진입점
├── requirements.txt     # Python 패키지 의존성
├── .env.example        # 환경변수 예시
├── api/                # API 라우터
│   ├── __init__.py
│   └── routes.py       # API 엔드포인트
└── README.md
```

## API 엔드포인트

- `GET /` - 서버 정보
- `GET /health` - 헬스체크
- `GET /api/test` - API 테스트
- `POST /api/upload/excel` - Excel 파일 업로드
- `GET /api/accounts` - 계정과목 목록

## 개발 참고사항

- Excel 파일은 cp949 인코딩 처리
- 국세청 파일은 UTF-8 인코딩 사용
- CORS는 기본적으로 localhost:5173 허용 (Vite)
