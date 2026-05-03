import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please complete the required fields." },
        { status: 400 }
      );
    }

    const html =
      "<h2>New Crystal Dreams Singing Group enquiry</h2>" +
      "<p><strong>Name:</strong> " + name + "</p>" +
      "<p><strong>Email:</strong> " + email + "</p>" +
      "<p><strong>Phone:</strong> " + (phone || "Not provided") + "</p>" +
      "<p><strong>Message:</strong></p>" +
      "<p>" + message.replace(/\n/g, "<br />") + "</p>";

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Crystal Dreams <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "hannahblastland3@gmail.com",
      subject: "New Crystal Dreams enquiry from " + name,
      replyTo: email,
      html: html,
    });

    return NextResponse.redirect(new URL("/contact?sent=true", req.url));
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}