/**
 * Paste this into your Google Apps Script project (Extensions → Apps Script),
 * then Deploy → New deployment → Web app
 *   Execute as: Me
 *   Who has access: Anyone
 *
 * Create two tabs in the spreadsheet named exactly:
 *   - Enquiries
 *   - ProjectInterests
 * (or leave empty — this script creates them automatically)
 */

function doPost(e) {
  try {
    var p = (e && e.parameter) || {};
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    var sheetName = p.sheetName || (p.type === "project_click" ? "ProjectInterests" : "Enquiries");
    var sheet = getOrCreateSheet_(ss, sheetName);

    if (sheetName === "ProjectInterests") {
      ensureHeaders_(sheet, [
        "Timestamp",
        "Name",
        "Phone",
        "Email",
        "Message",
        "Project Title",
        "Project ID",
        "Category",
        "Location",
      ]);

      sheet.appendRow([
        new Date(),
        p.name || "",
        p.phone || "",
        p.email || "",
        p.message || "",
        p.projectTitle || "",
        p.projectId || "",
        p.projectCategory || "",
        p.projectLocation || "",
      ]);
    } else {
      // Enquiries sheet
      ensureHeaders_(sheet, [
        "Timestamp",
        "Name",
        "Phone",
        "Email",
        "Message",
      ]);

      sheet.appendRow([
        new Date(),
        p.name || "",
        p.phone || "",
        p.email || "",
        p.message || "",
      ]);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", sheet: sheetName }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheet_(ss, name) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
  }
  return sheet;
}

function ensureHeaders_(sheet, headers) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
  }
}
