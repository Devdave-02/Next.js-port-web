import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // 🔑 Setup transporter (use your real credentials or env variables)
    const transporter = nodemailer.createTransport({
      service: "gmail", // or "hotmail", "yahoo", or custom SMTP
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your app password (not your normal email password)
      },
    });

    // ✉️ Send mail
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // you receive the messages here
      subject: `New message from ${name}`,
      text: message,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    });

    return NextResponse.json(
      { success: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
