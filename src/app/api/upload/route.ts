import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import fs from "fs";

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
      return NextResponse.json({ success: false, error: "No file uploaded" });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save to public directory
    const publicPath = path.join(process.cwd(), "public");
    
    if (!fs.existsSync(publicPath)) {
      await mkdir(publicPath, { recursive: true });
    }
    
    const filePath = path.join(publicPath, "resume.pdf");

    await writeFile(filePath, buffer);
    console.log(`Saved file to ${filePath}`);

    return NextResponse.json({ success: true, path: "/resume.pdf" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to upload file" });
  }
}
