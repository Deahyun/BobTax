# Git Commit History

BobTax 프로젝트의 Git 커밋 이력을 관리하는 문서입니다.

---

## 2025-10-06

### 82b2a46 - feat: 기본 환경설정 메뉴에 법인 기본정보, 주식 및 지분 정보 추가

**Date:** 2025-10-06 15:25
**Author:** Deahyun <tegaget@gmail.com>

**변경 사항:**
- menuData.js: 법인 기본정보, 주식 및 지분 정보 메뉴 추가
- App.jsx: 신규 메뉴 라우팅 추가
- Docs/ref.txt → Docs/메뉴구성.txt 파일명 변경
- 기본 환경설정 메뉴 순서: 기초자산 > 법인 기본정보 > 주식 및 지분 정보 > 계좌정보 > 신용카드정보 > 현금카드정보

**신규 라우트:**
- `/basic-settings/corp-info` - 법인 기본정보
- `/basic-settings/stock-info` - 주식 및 지분 정보

🤖 Generated with [Claude Code](https://claude.com/claude-code)

---

### 3705cd7 - docs: CLAUDE.md 프로젝트 가이드 문서 추가

**Date:** 2025-10-06 14:59
**Author:** Deahyun <tegaget@gmail.com>

**변경 사항:**
- 프로젝트 개요 및 구조 정리
- Backend/Frontend 상세 설명
- 전체 메뉴 구조 (9개 대분류, 37개 세부)
- Git 버전 관리 정보
- 파일 인코딩 정책
- 개발 진행 상황 기록

**추가된 파일:**
- `CLAUDE.md` - 프로젝트 전체 가이드 문서

🤖 Generated with [Claude Code](https://claude.com/claude-code)

---

### 050c6a3 - Initial commit: BobTax 법인세 신고 시스템

**Date:** 2025-10-06 13:50
**Author:** Deahyun <tegaget@gmail.com>

**변경 사항:**
- FastAPI backend 기본 구조 설정
- React + Vite frontend 레이아웃 구현
- 9개 대분류, 37개 세부 메뉴 구성
- Header, Sidebar, Footer 레이아웃 완성
- React Router 설정 완료

**프로젝트 구조:**
```
TaxService/
├── backend/           # FastAPI 백엔드
├── frontend/          # React + Vite 프론트엔드
├── Docs/             # 문서
└── README.md
```

**기술 스택:**
- Backend: FastAPI, Uvicorn, Pandas, OpenPyXL
- Frontend: React, Vite, React Router, Axios

🤖 Generated with [Claude Code](https://claude.com/claude-code)

---

## Commit 작성 규칙

### Commit Message 형식
```
<type>: <subject>

<body>

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

### Type 종류
- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 포맷팅, 세미콜론 누락 등
- `refactor`: 코드 리팩토링
- `test`: 테스트 코드 추가
- `chore`: 빌드 업무 수정, 패키지 매니저 설정 등

### 작성 예시
```bash
git commit -m "$(cat <<'EOF'
feat: 부가세 신고 기능 구현

- 부가세 신고서 생성 로직 추가
- Excel 데이터 파싱 기능 구현
- 국세청 파일 변환 기능 추가

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

---

## 참고

- **GitHub Repository**: https://github.com/Deahyun/BobTax
- **Branch**: main
- **최신 커밋**: 82b2a46
