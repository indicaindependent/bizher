# NY BizHer LLC Wizard

[![Live App](https://img.shields.io/badge/Live%20App-bizher.osintnet.uk-ef4444?style=for-the-badge&logo=cloudflare)](https://bizher.osintnet.uk)
[![Platform](https://img.shields.io/badge/Platform-Cloudflare%20Workers-f38020?style=for-the-badge&logo=cloudflare)](https://workers.cloudflare.com)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](LICENSE)
[![Language](https://img.shields.io/badge/Language-EN%20%2F%20ES-3b82f6?style=for-the-badge)](https://bizher.osintnet.uk)
[![State](https://img.shields.io/badge/State-New%20York-1d4ed8?style=for-the-badge)](https://dos.ny.gov)
[![Free Tool](https://img.shields.io/badge/Cost-Free%20to%20Use-a855f7?style=for-the-badge)](#)

> **The free, step-by-step guide to forming your New York LLC and getting WBE/MWBE certified — built for women entrepreneurs.**

---

## ✨ Features

| Feature | Details |
|---|---|
| 🏛️ **5-Step Wizard** | Foundation → Articles → Publication → EIN & Ops → WBE/MWBE |
| 📄 **Document Generation** | Auto-generates Articles of Organization + Operating Agreement |
| 💰 **Real Costs Upfront** | Filing $200 · Publication $600–2K · Cert of Pub $50 · EIN FREE · WBE FREE |
| 🌐 **Bilingual** | Full English + Spanish (EN/ES toggle) |
| 📱 **Mobile First** | Fully responsive — works on any device |
| ⚖️ **Legally Accurate** | Reflects current NY DOS law, BCL, and MWBE regulations (2026) |
| 🔓 **No Login Required** | Zero friction — start immediately |
| ♿ **Accessible** | WCAG-compliant labels, contrast, and keyboard navigation |

---

## 📋 The 5 Steps

### Step 1 — Business Foundation
LLC name, county, organizer, registered agent, address, business purpose, membership type.

### Step 2 — Articles of Organization
Generates a ready-to-file Articles of Organization. Direct link to NY DOS e-filing ($200 fee). NAICS code guidance included.

### Step 3 — Publication Requirement
Explains the NY mandatory publication rule (2 newspapers × 6 weeks). Links to county clerk newspaper lists. Generates Certificate of Publication checklist.

### Step 4 — EIN & Operating Agreement
IRS EIN application walkthrough (free, instant). Generates a single-member or multi-member Operating Agreement PDF.

### Step 5 — WBE / MWBE Certification
Full guidance on NYS MWBE certification, NYC MWBE, and federal WOSB/EDWOSB programs. Eligibility checklist + application links.

---

## 🏗️ Architecture

```
Browser → Cloudflare Worker (bizher-wizard)
                │
                ├── HTML/CSS/JS served inline (no external CDN)
                ├── Draft saved to localStorage
                └── Document generation: client-side JS
```

- **Runtime:** Cloudflare Workers (Edge, 0ms cold start)
- **Storage:** `localStorage` for draft persistence (no backend required)
- **Hosting:** `bizher.osintnet.uk` (Cloudflare proxied)
- **Dependencies:** Zero external JS or CSS dependencies

---

## 🚀 Deployment

```bash
# Deploy to Cloudflare Workers
curl -X PUT \
  "https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/workers/scripts/bizher-wizard" \
  -H "Authorization: Bearer ${CF_API_TOKEN}" \
  -H "Content-Type: application/javascript" \
  --data-binary @worker.js
```

Then add a Worker Route: `bizher.osintnet.uk/*` → `bizher-wizard`

---

## ⚖️ Legal Disclaimer

This tool provides **general legal information only, not legal advice**. No attorney-client relationship is formed. Always verify current requirements with the [NY Department of State](https://dos.ny.gov) and a licensed NY attorney before filing.

---

## 🤝 Built By

**Indica Independent Media** — [osintnet.uk](https://osintnet.uk)

Part of the VPDLNY initiative: knowledge as a weapon for vulnerable communities.

---

*Deployed May 2026 · MIT License*
