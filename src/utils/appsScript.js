export const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxZG7waQeGJQGPvqVtMw9EQFXRr3c83YX5t8q5UpNpj7-gZD4t9yyQRW2gsh-ay6Fzl/exec";

/** Sheet tab names in your Google Spreadsheet */
export const SHEETS = {
  ENQUIRIES: "EquiryData",
  PROJECT_INTERESTS: "userIntrested Projects",
};

/**
 * Sends form fields to Google Apps Script (Google Sheet).
 * Pass sheetName so Apps Script can write to the correct tab.
 */
export async function sendToAppsScript(fields) {
  const body = new URLSearchParams();

  Object.entries(fields).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      body.append(key, String(value));
    }
  });

  await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    body,
    keepalive: true,
  });
}

export function getSessionUserData() {
  try {
    const raw = sessionStorage.getItem("sessionFormData");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
