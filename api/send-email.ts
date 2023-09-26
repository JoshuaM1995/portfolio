import type { VercelRequest, VercelResponse } from "@vercel/node";
import postmark from "postmark";
import dotenv from "dotenv";

dotenv.config({ path: "./api/.env" });

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (!request.url) return response.status(400);

  const { searchParams } = new URL(
    request.url,
    `http://${request.headers.host}`
  );

  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const subject = searchParams.get("subject");
  const message = searchParams.get("message");

  const client = new postmark.ServerClient(process.env.POSTMARK_API_TOKEN);

  const res = await client.sendEmail({
    From: "info@joshuamcnabb.ca",
    To: process.env.BUSINESS_EMAIL,
    Subject: `Contact Form Submission - ${subject}`,
    HtmlBody: `<b>Name:</b> ${name}<br />
      <b>Email:</b> ${email}<br />
      <b>Message:</b><br />
      ${message}<br />`,
    TextBody: "Testing",
    MessageStream: "outbound",
  });

  if (res.Message === "OK") {
    return response.status(200).json({ success: true });
  }

  return response.status(400).json({ success: false });
}
