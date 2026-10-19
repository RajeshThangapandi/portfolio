import { NextResponse } from "next/server";
import { PERSONAL_INFO } from "@/data/portfolio";

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  company?: string;
  honeypot?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Anti-spam honeypot check
    if (body.honeypot && body.honeypot.trim().length > 0) {
      return NextResponse.json(
        { ok: false, error: "Spam detected." },
        { status: 400 }
      );
    }

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const subject = (body.subject || "Portfolio Inquiry").trim();
    const message = (body.message || "").trim();
    const company = (body.company || "").trim();

    if (name.length < 2) {
      return NextResponse.json(
        { ok: false, error: "Please enter your name (at least 2 characters)." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (message.length < 15) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please include a brief message (at least 15 characters).",
        },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY;
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    const recipientEmail =
      process.env.CONTACT_RECIPIENT_EMAIL || PERSONAL_INFO.email;

    // 1. Resend API integration when RESEND_API_KEY is configured
    if (resendApiKey) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from:
            process.env.RESEND_FROM_EMAIL ||
            "Portfolio Contact <onboarding@resend.dev>",
          to: [recipientEmail],
          reply_to: email,
          subject: `[Portfolio] ${subject} — from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nCompany: ${
            company || "N/A"
          }\n\nMessage:\n${message}`,
        }),
      });

      if (!resendRes.ok) {
        const errData = await resendRes.text();
        return NextResponse.json(
          {
            ok: false,
            error: `Email delivery service returned an error (${resendRes.status}).`,
            details: errData,
          },
          { status: 502 }
        );
      }

      return NextResponse.json({
        ok: true,
        mode: "resend",
        message: "Your message has been delivered directly to Rajesh T's inbox.",
      });
    }

    // 2. Web3Forms integration when WEB3FORMS_ACCESS_KEY is configured
    if (web3FormsKey) {
      const web3Res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name,
          email,
          subject: `[Portfolio] ${subject}`,
          company,
          message,
        }),
      });

      const web3Json = (await web3Res.json()) as { success?: boolean; message?: string };
      if (!web3Res.ok || !web3Json.success) {
        return NextResponse.json(
          {
            ok: false,
            error:
              web3Json.message || "Web3Forms service could not deliver message.",
          },
          { status: 502 }
        );
      }

      return NextResponse.json({
        ok: true,
        mode: "web3forms",
        message: "Your message has been delivered directly to Rajesh T.",
      });
    }

    // 3. Formspree integration when FORMSPREE_ENDPOINT is configured
    if (formspreeEndpoint) {
      const fsRes = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          subject,
          message,
        }),
      });

      if (!fsRes.ok) {
        return NextResponse.json(
          {
            ok: false,
            error: "Formspree endpoint returned a delivery error.",
          },
          { status: 502 }
        );
      }

      return NextResponse.json({
        ok: true,
        mode: "formspree",
        message: "Your message has been delivered directly to Rajesh T.",
      });
    }

    // Never simulate a fake success if no SMTP/API provider is configured.
    // Return explicit status + prebuilt mailto & WhatsApp fallback links.
    const formattedBody = `Hi Rajesh,\n\n${message}\n\n---\nFrom: ${name}${
      company ? ` (${company})` : ""
    }\nReply Email: ${email}`;
    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${subject} — ${name}`
    )}&body=${encodeURIComponent(formattedBody)}`;

    return NextResponse.json(
      {
        ok: false,
        code: "PROVIDER_NOT_CONFIGURED",
        error:
          "Server email transport (RESEND_API_KEY / WEB3FORMS_ACCESS_KEY) is not configured in this environment yet. Use the verified direct email or WhatsApp dispatch below to send your formatted message immediately.",
        mailtoUrl,
      },
      { status: 503 }
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Malformed request payload. Please verify your inputs.",
      },
      { status: 400 }
    );
  }
}
