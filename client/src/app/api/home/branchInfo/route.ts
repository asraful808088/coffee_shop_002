import FileUploader from "@/lib/fileUploadhandler/fileUploadhandler";
import getHomeHero from "@/lib/mongo/operation/get/getData";
import insertContent from "@/lib/mongo/operation/insert/insert";
import HomeHero from "@/lib/mongo/Schema/homeHero/homeHero";
import { NextRequest, NextResponse } from "next/server";

const POST = async (req: NextRequest, res) => {
    return NextResponse.json({})
};

export { GET, POST };
