import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  //fetch Data

  const id = params.id;

  try {
    await connect();

    const posts = await Post.findOne({ _id: id });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch {
    return new NextResponse("Database Connection Failed", { status: 500 });
  }
};
