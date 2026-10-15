import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body.name !== "string" || typeof body.email !== "string" || typeof body.message !== "string") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Placeholder: log in development. Swap for Resend, Formspree, or a CRM webhook.
  console.info("[contact]", {
    name: body.name.slice(0, 200),
    email: body.email.slice(0, 200),
    message: body.message.slice(0, 5000),
  });

  return NextResponse.json({ ok: true });
}
