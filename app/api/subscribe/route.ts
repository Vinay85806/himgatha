import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  let email: string | undefined;
  let phone: string | undefined;
  try {
    const body = await request.json();
    email = body?.email?.trim();
    phone = body?.phone?.trim();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }
  if (!phone) {
    return NextResponse.json(
      { error: "Please enter your phone number." },
      { status: 400 }
    );
  }

  const { error } = await supabase.from("subscribers").insert({ email });

  // 23505 = unique violation → already subscribed, treat as success.
  if (error && error.code !== "23505") {
    console.error("Subscribe failed:", error.message);
    return NextResponse.json(
      { error: "Could not subscribe. Please try again." },
      { status: 500 }
    );
  }

  // Also record it as an enquiry so it shows up in the admin dashboard.
  const { error: enquiryError } = await supabase.from("enquiries").insert({
    name: email.split("@")[0],
    email,
    phone,
    message: "Subscribed to the newsletter from the homepage footer.",
    package_title: "Newsletter Signup",
  });
  if (enquiryError) {
    console.error("Newsletter enquiry insert failed:", enquiryError.message);
  }

  return NextResponse.json({ ok: true });
}
