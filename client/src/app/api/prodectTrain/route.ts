import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest, res) {
  const formData = (await req.formData()).get("data");
  const result = await axios.post(
    "http://127.0.0.1:9000/similar/",
    JSON.parse(formData)
  );
  if (result?.data?.success) {
    // console.log(result?.data)
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false });
  }
  return NextResponse.json({ success: false });

}
