// 技術メモリスト取得用API

import axios from "axios";

import { NextResponse } from "next/server";

export async function GET() {
  const res = await axios(
    `https://firestore.googleapis.com/v1/projects/${process.env.FIREBASE_PROJECTID}/databases/(default)/documents/threads`
  );
  const data = await res.data.documents;
  return NextResponse.json({
    data,
  });
}
