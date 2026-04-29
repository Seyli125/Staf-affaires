import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, fonction, entreprise, email, phone, message, track, answers, selectedDate, selectedTime } = body;

    const trackLabel = track === "ventes" ? "Commercial / Ventes" : "Manager / Leadership";

    const answersHtml = Object.entries(answers as Record<string, string>)
      .map(([key, value]) => `<tr><td style="padding:6px 12px;color:#666;font-size:14px;">${key}</td><td style="padding:6px 12px;font-weight:600;font-size:14px;">${value}</td></tr>`)
      .join("");

    const { error } = await resend.emails.send({
      from: "STAF Affaires <onboarding@resend.dev>",
      to: ["saidtaaroust@gmail.com"],
      subject: `Nouvelle réservation — ${firstName} (${trackLabel})`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;border-radius:12px;overflow:hidden;">
          <div style="background:#1a2b5c;padding:32px;text-align:center;">
            <h1 style="color:#fff;margin:0;font-size:22px;">Nouvelle réservation d'appel</h1>
            <p style="color:#ffffff99;margin:8px 0 0;font-size:14px;">STAF Affaires — Formulaire de prise de rendez-vous</p>
          </div>

          <div style="padding:32px;background:#fff;">

            <h2 style="color:#1a2b5c;font-size:16px;margin:0 0 16px;border-bottom:2px solid #f0f0f0;padding-bottom:8px;">📅 Créneau réservé</h2>
            <p style="margin:0 0 6px;font-size:15px;"><strong>Date :</strong> ${selectedDate}</p>
            <p style="margin:0 0 24px;font-size:15px;"><strong>Heure :</strong> ${selectedTime}</p>

            <h2 style="color:#1a2b5c;font-size:16px;margin:0 0 16px;border-bottom:2px solid #f0f0f0;padding-bottom:8px;">👤 Coordonnées</h2>
            <p style="margin:0 0 6px;font-size:15px;"><strong>Prénom :</strong> ${firstName}</p>
            ${fonction ? `<p style="margin:0 0 6px;font-size:15px;"><strong>Fonction :</strong> ${fonction}</p>` : ""}
            ${entreprise ? `<p style="margin:0 0 6px;font-size:15px;"><strong>Entreprise :</strong> ${entreprise}</p>` : ""}
            <p style="margin:0 0 6px;font-size:15px;"><strong>Email :</strong> <a href="mailto:${email}" style="color:#e8581c;">${email}</a></p>
            ${phone ? `<p style="margin:0 0 24px;font-size:15px;"><strong>Téléphone :</strong> ${phone}</p>` : "<br/>"}

            <h2 style="color:#1a2b5c;font-size:16px;margin:0 0 16px;border-bottom:2px solid #f0f0f0;padding-bottom:8px;">🎯 Parcours : ${trackLabel}</h2>
            <table style="width:100%;border-collapse:collapse;background:#f9f9f9;border-radius:8px;overflow:hidden;">
              <thead>
                <tr style="background:#f0f0f0;">
                  <th style="padding:8px 12px;text-align:left;font-size:13px;color:#999;font-weight:600;">Question</th>
                  <th style="padding:8px 12px;text-align:left;font-size:13px;color:#999;font-weight:600;">Réponse</th>
                </tr>
              </thead>
              <tbody>${answersHtml}</tbody>
            </table>

            ${message ? `
            <h2 style="color:#1a2b5c;font-size:16px;margin:24px 0 12px;border-bottom:2px solid #f0f0f0;padding-bottom:8px;">💬 Message</h2>
            <p style="font-size:15px;color:#444;background:#f9f9f9;padding:16px;border-radius:8px;margin:0;">${message}</p>
            ` : ""}
          </div>

          <div style="padding:20px 32px;background:#f0f0f0;text-align:center;">
            <p style="margin:0;font-size:12px;color:#999;">Réservation effectuée depuis staf-affaires.fr</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Booking email error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
