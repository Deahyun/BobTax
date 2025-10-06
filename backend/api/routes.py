from fastapi import APIRouter, UploadFile, File, HTTPException
from typing import List
import pandas as pd
from io import BytesIO

router = APIRouter()

@router.get("/test")
async def test():
    """API 테스트 엔드포인트"""
    return {"message": "API is working!"}

@router.post("/upload/excel")
async def upload_excel(file: UploadFile = File(...)):
    """Excel 파일 업로드 및 미리보기"""
    try:
        if not file.filename.endswith(('.xlsx', '.xls')):
            raise HTTPException(status_code=400, detail="Excel 파일만 업로드 가능합니다.")

        contents = await file.read()
        df = pd.read_excel(BytesIO(contents))

        return {
            "filename": file.filename,
            "rows": len(df),
            "columns": list(df.columns),
            "preview": df.head(5).to_dict(orient='records')
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"파일 처리 중 오류: {str(e)}")

@router.get("/accounts")
async def get_accounts():
    """계정과목 목록 조회"""
    # 추후 DB 또는 설정 파일에서 불러오기
    accounts = [
        {"code": "1410", "name": "보통예금"},
        {"code": "2110", "name": "매입채무"},
        {"code": "6110", "name": "급여"},
    ]
    return accounts
