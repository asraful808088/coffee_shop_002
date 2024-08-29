import getFavorite from "@/lib/mongo/operation/get/getFavoriteItems";
import insertFavorite from "@/lib/mongo/operation/insert/insertFavorite";
import Favorite from "@/lib/mongo/Schema/favorite/favorite";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const email = formData.get("email");
  const prodect_name = formData.get("prodect_name");
  const convert = formData.get("convert");
  let convertNow = false;
  let data = null;
  if (convert == "true") {
    convertNow = true;
    try {
      await insertFavorite({ email, prodect_name });
      data = await getFavorite({ email, prodect_name });
    } catch (error) {}
  } else {
    convertNow = false;
    try {
      await Favorite.deleteMany({ email, prodect_name });
    } catch (error) {}
  }
  return NextResponse.json({ success: true, convert: convertNow, data });
}
