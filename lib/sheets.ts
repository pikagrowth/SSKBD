import { LeadData } from "./types";

export async function sendLeadToSheet(lead: LeadData): Promise<boolean> {
  const url = process.env.GOOGLE_SHEET_WEBAPP_URL;
  
  if (!url) {
    console.error("❌ ERROR: Missing GOOGLE_SHEET_WEBAPP_URL in environment variables.");
    return false;
  }

  try {
    // Explicitly structure the simplified payload for the Apps Script
    const payload = {
      name: lead.name,
      mobile: lead.mobile,
      email: lead.email || "Not Provided",
      purpose: lead.purpose || "Not Specified",
      message: lead.message || "No Message",
      source: "Website Form"
    };

    console.log("🔄 Syncing Lead to Google Sheets Master Database...");

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const text = await response.text();

    try {
      const result = JSON.parse(text);
      if (result.status === 'success' || result.result === 'success') {
        console.log("✅ Google Sheets Updated Successfully!");
        return true;
      } else {
        console.error("❌ Google Apps Script Error:", result);
        return false;
      }
    } catch (parseError) {
      console.error("❌ Sheets API failed to return valid JSON. Check Web App Deployment settings (Must be 'Anyone'). Response snippet:", text.substring(0, 150));
      return false;
    }
  } catch (error) {
    console.error("❌ Network error connecting to Google Sheets:", error);
    return false;
  }
}