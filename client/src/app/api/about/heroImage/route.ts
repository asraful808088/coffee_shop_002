import FileUploader from "@/lib/fileUploadhandler/fileUploadhandler";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest, res) {
  return NextResponse.json({ success: true });
}

export async function POST(req: NextRequest, res) {
  const formData = await req.formData();
  const fileUploadResult = FileUploader({
    data: formData,
    backStap: "../../../../../../",
  });
  console.log(formData);
  return NextResponse.json({ success: true });
}
