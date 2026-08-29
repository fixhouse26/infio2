import { NextResponse } from "next/server";

function clean(value: unknown) {
  if (Array.isArray(value)) return value.map(String).join(", ");
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return String(value ?? "");
}

function summary(data: Record<string, unknown>) {
  const rows: [string,string][] = [
    ["Source page", clean(data.sourcePage)],["Name", clean(data.name)],["Email", clean(data.email)],["Phone", clean(data.phone)],
    ["Destination", clean(data.destination)],["Departure city", clean(data.departureCity)],["Dates", clean(data.dates)],["Date flexibility", clean(data.flexibility)],
    ["Travelers", clean(data.travelers)],["Places", clean(data.places)],["Other place", clean(data.otherPlace)],["Attractions", clean(data.attractions)],["Hotels", clean(data.hotels)],["Room needs", clean(data.roomNeeds)],["Hotel location", clean(data.hotelLocation)],
    ["Flight cabin", clean(data.flightCabin)],["Flight preference", clean(data.flightPreference)],["Trip pace", clean(data.pace)],["Free time", clean(data.freeTime)],["Meals", clean(data.meals)],
    ["Extras", clean(data.extras)],["Budget", clean(data.budget)],["Visa help", clean(data.visaHelp)],["Notes", clean(data.notes)]
  ];
  return rows.map(([a,b])=>`${a}: ${b}`).join("\n");
}

export async function POST(request: Request) {
  const data = await request.json() as Record<string, unknown>;
  if (data.companyWebsite) return NextResponse.json({ok:true});
  if (!data.name || !data.email) return NextResponse.json({ok:false,error:"Name and email are required."},{status:400});

  const text = summary(data);
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.TRAVEL_LEAD_EMAIL || "info@infio2.com";
  const from = process.env.TRAVEL_FROM_EMAIL || "InfiO2 Travel <noreply@infio2.com>";

  if (!apiKey) {
    return NextResponse.json({ok:false,fallback:"mailto",summary:text},{status:503});
  }

  const headers = {"Authorization":`Bearer ${apiKey}`,"Content-Type":"application/json"};

  // 1) Deliver the complete structured lead to InfiO2.
  const response = await fetch("https://api.resend.com/emails",{
    method:"POST",
    headers,
    body:JSON.stringify({
      from, to:[to],
      reply_to:String(data.email),
      subject:`InfiO2 custom trip request — ${clean(data.destination) || "New inquiry"} — ${clean(data.name)}`,
      text
    })
  });

  if (!response.ok) {
    return NextResponse.json({ok:false,fallback:"mailto",summary:text},{status:502});
  }

  // 2) Send an automatic acknowledgement to the traveler.
  // A failure here does not discard a successfully delivered lead.
  try {
    await fetch("https://api.resend.com/emails",{
      method:"POST",
      headers,
      body:JSON.stringify({
        from,
        to:[String(data.email)],
        reply_to:to,
        subject:"We received your InfiO2 trip request",
        text:`Hi ${clean(data.name)},\n\nThank you for sharing your travel preferences with InfiO2. We received your custom trip request for ${clean(data.destination) || "your upcoming trip"}.\n\nOur team will review the destinations, experiences, hotel level, flight preferences, pace, free-time preferences and other details you selected before responding.\n\nIf you need to add anything, reply to this email or contact info@infio2.com.\n\nInfiO2 Travel\nInfinite Oxygen. Infinite Experiences.\nhttps://www.infio2.com`
      })
    });
  } catch {}

  return NextResponse.json({ok:true});
}
