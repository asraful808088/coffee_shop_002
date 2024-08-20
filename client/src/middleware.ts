import { NextResponse } from "next/server";
import { redisDB } from "./lib/radius/config";
export function middleware(req) {
  const res = NextResponse.next();
  res.headers.append("Access-Control-Allow-Origin", "*");
  return res;
}
export const config = {
  matcher: ["/api/:path*"],
};
