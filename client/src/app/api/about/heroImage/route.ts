import FileUploader from "@/lib/fileUploadhandler/fileUploadhandler";
import getAboutHero from "@/lib/mongo/operation/get/aboutHero";
import insertAboutHero from "@/lib/mongo/operation/insert/aboutHero";
import AboutHero from "@/lib/mongo/Schema/aboutHero/aboutHero";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest, res) {
  const reuslt = await getAboutHero();
  return NextResponse.json({ success: true, data: reuslt });
}

export async function POST(req: NextRequest, res) {
  const formData = await req.formData();
  const fileUploadResult = await FileUploader({
    checkOnlyFile: true,
    data: formData,
    backStap: "../../../../../../",
  });
  if (fileUploadResult.title && fileUploadResult.description) {
    try {
      await AboutHero.deleteMany();
    } catch (error) {}
    let data;
    try {
      data = {
        fullFile: fileUploadResult.fileItems,
        title: fileUploadResult.title,
        description: fileUploadResult.description,
      };
      await insertAboutHero(data);
    } catch (error) {}
    return NextResponse.json(
      { success: true, data: { ...data } },
      { status: 200 }
    );
  } else {
    return NextResponse.json({ success: false }, { status: 400 });
  }
  console.log(fileUploadResult);
}
