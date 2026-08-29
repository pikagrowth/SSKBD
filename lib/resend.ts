import { Resend } from 'resend';
import { LeadData } from './types';

// Using the NOTIFY_EMAIL from your new .env structure
const TO_EMAIL = process.env.NOTIFY_EMAIL || 'info@samarthkrupabuilders.com';
const FROM_EMAIL = 'SSKBD Website <onboarding@resend.dev>';

// ==========================================
// EMAIL HTML UI GENERATOR (HELPER)
// ==========================================
const generateEmailHTML = (title: string, accentColor: string, fields: { label: string; value: string | undefined }[]) => {
  const rowsHtml = fields
    .filter(f => f.value && f.value !== "N/A" && f.value !== "Not Provided")
    .map(f => `
      <tr>
        <td style="padding: 16px 0; border-bottom: 1px solid #f0f0f0;">
          <div style="font-size: 11px; color: #888888; text-transform: uppercase; font-weight: bold; letter-spacing: 1px; margin-bottom: 4px;">
            ${f.label}
          </div>
          <div style="font-size: 16px; color: #111412; font-weight: 600;">
            ${f.value}
          </div>
        </td>
      </tr>
    `).join('');

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f4f5f4; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        
        <!-- Main Card -->
        <div style="background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.05); border: 1px solid #eaeaea;">
          
          <!-- Header -->
          <div style="background-color: #111412; padding: 40px 30px; text-align: center; border-bottom: 4px solid ${accentColor};">
            <h2 style="color: ${accentColor}; margin: 0 0 10px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 3px;">
              Shree Samarth Krupa Builders & Developers
            </h2>
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">
              ${title}
            </h1>
          </div>

          <!-- Body / Data Table -->
          <div style="padding: 30px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
              ${rowsHtml}
            </table>
          </div>

          <!-- Footer -->
          <div style="background-color: #f9fafa; padding: 20px; text-align: center; border-top: 1px solid #f0f0f0;">
            <p style="margin: 0; font-size: 12px; color: #999999;">
              Securely generated via Shree Samarth Krupa Builders & Developers Website<br/>
              ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
            </p>
          </div>

        </div>
      </div>
    </body>
  </html>
  `;
};

// ==========================================
// UNIFIED ENQUIRY EMAIL
// ==========================================
export async function sendEnquiryEmail(lead: LeadData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { success: false, error: 'Missing Resend API Key' };
  
  const resend = new Resend(apiKey);
  try {
    const htmlContent = generateEmailHTML("New Website Enquiry", "#B84A24", [
      { label: "Lead Name", value: lead.name },
      { label: "Mobile Number", value: lead.mobile },
      { label: "Email Address", value: lead.email },
      { label: "Purpose of Enquiry", value: lead.purpose },
      { label: "Message", value: lead.message },
    ]);

    const data = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New Enquiry: ${lead.name} (${lead.purpose || 'General'})`,
      html: htmlContent,
    });
    console.log("✅ Enquiry Email Sent:", data);
    return { success: true, data };
  } catch (error) {
    console.error("❌ Resend Error:", error);
    return { success: false, error };
  }
}