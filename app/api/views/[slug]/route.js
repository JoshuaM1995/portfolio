import { createClient } from "redis";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { slug } = params;

  console.log("views", { slug });

  const client = createClient({
    url: process.env.PORTFOLIO_REDIS_URL,
  });

  await client.connect();

  const existingViews = await client.get(`${slug}_views`);
  const viewCount = existingViews ? parseInt(existingViews) : 0;
  const newViewCount = viewCount + 1;

  console.log("existingViews", viewCount);

  await client.set(`${slug}_views`, newViewCount);

  return NextResponse.json({ views: newViewCount });
}
