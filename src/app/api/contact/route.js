// app/api/contact/route.js

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";


export async function POST(request) {
  const body = await request.json();
  const { name, email, object, phone, message } = body;

  const isEmailValid = async (email) => {
    try {
      const access_key = process.env.MAILBOXLAYER_API_KEY;
      const res = await fetch(
        `https://apilayer.net/api/check?access_key=${access_key}&email=${email}`
      );
  
      if (!res.ok) {
        console.error("Failed to validate email. HTTP status:", res.status);
        return false;
      }
  
      const data = await res.json();
  
      return data.format_valid && data.smtp_check;
    } catch (err) {
      console.error("Email validation error:", err);
      return false;
    }
  };
  
 
  if (!name || !email || !object || !phone || !message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
    });
  }

  if (!(await isEmailValid(email))) {
    return NextResponse.json(
      {
        success: false,
        message: "Email address appears to be invalid or unreachable.",
      },
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Allow unverified TLS certificates (useful in some cases)
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: email, // <--- this is key
      subject: `Message from ${name} - ${object}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Email failed to send" }), {
      status: 500,
    });
  }
}

//
