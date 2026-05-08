// NY BizHer v2.0 — Fixed & Enhanced
// bizher.osintnet.uk | May 2026
// ZERO HTML entities in JS — all strings use plain Unicode

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  return new Response(getHTML(), {
    status: 200,
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
    }
  });
}

function getHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NY BizHer -- Free LLC Wizard for Women</title>
<meta name="description" content="Free step-by-step guide to forming a New York LLC and getting WBE/MWBE certified for women entrepreneurs.">
<style>
:root{
  --navy:#0d1b3e;--navy2:#162450;--gold:#f0c040;--gold2:#fad96a;
  --white:#fff;--offwhite:#f4f6fb;--text:#1a1a2e;--muted:#556080;
  --border:#d0d8f0;--green:#22c55e;--red:#ef4444;--amber:#f59e0b;
  --radius:12px;--shadow:0 4px 24px rgba(13,27,62,.12);
}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:var(--offwhite);color:var(--text);min-height:100vh}

/* HEADER */
.hdr{background:linear-gradient(135deg,var(--navy),#1a2f6e);color:#fff;padding:clamp(20px,4vw,40px) clamp(16px,5vw,60px);position:relative;overflow:hidden}
.hdr::before{content:'';position:absolute;top:-50%;right:-10%;width:400px;height:400px;background:radial-gradient(circle,rgba(240,192,64,.15),transparent 70%);pointer-events:none}
.hdr-inner{max-width:900px;margin:0 auto;position:relative}
.badge{display:inline-block;background:rgba(240,192,64,.2);border:1px solid rgba(240,192,64,.4);color:var(--gold);font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:4px 12px;border-radius:20px;margin-bottom:12px}
.hdr h1{font-size:clamp(1.6rem,4vw,2.8rem);font-weight:800;line-height:1.2;margin-bottom:8px}
.hdr h1 span{color:var(--gold)}
.hdr p{font-size:clamp(.9rem,2vw,1.1rem);color:rgba(255,255,255,.8);max-width:600px;line-height:1.6}
.lang-tog{position:absolute;top:0;right:0;display:flex;gap:8px}
.lbtn{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:#fff;padding:6px 14px;border-radius:20px;cursor:pointer;font-size:13px;font-weight:600;transition:all .2s}
.lbtn.on,.lbtn:hover{background:var(--gold);color:var(--navy);border-color:var(--gold)}

/* COST BANNER */
.cbanner{background:#fffbeb;border-bottom:2px solid #fde68a;padding:10px clamp(16px,5vw,60px)}
.cinner{max-width:900px;margin:0 auto;display:flex;flex-wrap:wrap;gap:14px;align-items:center}
.clabel{font-weight:700;font-size:13px;color:#92400e}
.citems{display:flex;flex-wrap:wrap;gap:12px}
.ci{display:flex;align-items:center;gap:5px;font-size:12px;color:#78350f}
.dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.dr{background:var(--red)}.da{background:var(--amber)}.dg{background:var(--green)}

/* LAYOUT */
.main{max-width:900px;margin:0 auto;padding:clamp(16px,4vw,40px) clamp(16px,5vw,60px)}

/* PROGRESS */
.prog{margin-bottom:32px}
.srow{display:flex;align-items:center;width:100%}
.snode{display:flex;flex-direction:column;align-items:center;flex:1;cursor:pointer}
.scirc{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;border:2px solid var(--border);background:#fff;color:var(--muted);transition:all .3s;position:relative;z-index:1}
.snode.done .scirc{background:var(--green);border-color:var(--green);color:#fff}
.snode.active .scirc{background:var(--navy);border-color:var(--gold);color:var(--gold);box-shadow:0 0 0 4px rgba(240,192,64,.2)}
.slbl{font-size:10px;font-weight:600;color:var(--muted);margin-top:6px;text-align:center;white-space:nowrap}
.snode.active .slbl{color:var(--navy)}
.snode.done .slbl{color:var(--green)}
.sline{flex:1;height:2px;background:var(--border);margin-bottom:28px;transition:background .3s}
.sline.done{background:var(--green)}

/* CARD */
.card{background:#fff;border-radius:var(--radius);box-shadow:var(--shadow);padding:clamp(20px,4vw,40px);margin-bottom:24px}
.ctitle{font-size:1.3rem;font-weight:800;color:var(--navy);margin-bottom:6px;display:flex;align-items:center;gap:10px}
.csub{font-size:.9rem;color:var(--muted);margin-bottom:24px;line-height:1.5}

/* FORM */
.fg{margin-bottom:20px}
label{display:block;font-size:13px;font-weight:700;color:var(--navy);margin-bottom:6px}
.req{color:var(--red);margin-left:2px}
input[type=text],input[type=email],input[type=date],select,textarea{width:100%;padding:10px 14px;border:1.5px solid var(--border);border-radius:8px;font-size:15px;color:var(--text);background:#fff;transition:border-color .2s;font-family:inherit}
input:focus,select:focus,textarea:focus{outline:none;border-color:var(--navy);box-shadow:0 0 0 3px rgba(13,27,62,.08)}
textarea{resize:vertical;min-height:80px}
.fhint{font-size:11px;color:var(--muted);margin-top:4px;line-height:1.5}
.ferr{font-size:11px;color:var(--red);margin-top:4px;display:none;font-weight:600}

/* RADIO */
.rgroup{display:flex;flex-wrap:wrap;gap:10px;margin-top:4px}
.ropt{flex:1;min-width:140px;border:2px solid var(--border);border-radius:8px;padding:12px 16px;cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:10px}
.ropt:hover{border-color:var(--navy)}
.ropt.sel{border-color:var(--navy);background:#f0f4ff}
.rdot{width:16px;height:16px;border-radius:50%;border:2px solid var(--border);flex-shrink:0;transition:all .2s}
.ropt.sel .rdot{border-color:var(--navy);background:var(--navy)}
.rtxt{font-size:13px;font-weight:600}

/* BUTTONS */
.brow{display:flex;gap:12px;justify-content:flex-end;flex-wrap:wrap;margin-top:24px}
.btn{padding:12px 28px;border-radius:8px;font-size:14px;font-weight:700;border:none;cursor:pointer;transition:all .2s;font-family:inherit;text-decoration:none;display:inline-flex;align-items:center;gap:6px}
.btn-p{background:var(--navy);color:#fff}
.btn-p:hover{background:var(--navy2);transform:translateY(-1px);box-shadow:0 4px 12px rgba(13,27,62,.3)}
.btn-s{background:var(--offwhite);color:var(--navy);border:1.5px solid var(--border)}
.btn-s:hover{background:var(--border)}
.btn-g{background:var(--gold);color:var(--navy)}
.btn-g:hover{background:var(--gold2);transform:translateY(-1px)}
.btn-sm{padding:7px 16px;font-size:12px}

/* INFO BOXES */
.ib{border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;margin:16px 0}
.ib.blue{background:#eff6ff;border-left:4px solid #3b82f6;color:#1e40af}
.ib.amber{background:#fffbeb;border-left:4px solid var(--amber);color:#78350f}
.ib.red{background:#fef2f2;border-left:4px solid var(--red);color:#7f1d1d}
.ib.green{background:#f0fdf4;border-left:4px solid var(--green);color:#14532d}
.ib.gold{background:#fefce8;border-left:4px solid var(--gold);color:#713f12}
.ib strong{font-weight:700}
.ib a{color:inherit;font-weight:700}

/* TABLES */
.tbl{width:100%;border-collapse:collapse;margin:16px 0;font-size:13px}
.tbl th{background:var(--navy);color:#fff;padding:10px 14px;text-align:left}
.tbl td{padding:10px 14px;border-bottom:1px solid var(--border)}
.tbl tr:last-child td{font-weight:700;background:#fffbeb}
.free{color:var(--green);font-weight:700}

/* CHECKLIST */
.cklist{list-style:none}
.cklist li{display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px}
.cklist li:last-child{border-bottom:none}
.chkbox{width:20px;height:20px;flex-shrink:0;border:2px solid var(--border);border-radius:4px;cursor:pointer;transition:all .2s;margin-top:1px;display:flex;align-items:center;justify-content:center;user-select:none}
.chkbox.on{background:var(--green);border-color:var(--green);color:#fff;font-size:12px;font-weight:700}
.clbl{flex:1;line-height:1.5}
.clbl strong{color:var(--navy);display:block;font-size:13px}
.clbl span{color:var(--muted);font-size:11px}
.cgtitle{font-weight:800;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin:16px 0 6px}

/* DOC OUTPUT */
.docout{background:#f8faff;border:1.5px solid var(--border);border-radius:8px;padding:20px 24px;font-family:'Courier New',monospace;font-size:12px;line-height:1.8;white-space:pre-wrap;max-height:420px;overflow-y:auto;color:var(--text)}
.dact{display:flex;gap:10px;margin-top:12px;flex-wrap:wrap}

/* COUNTY GRID */
.cgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px;margin:16px 0}
.ccard{border:1.5px solid var(--border);border-radius:8px;padding:12px 14px;font-size:12px}
.cname{font-weight:700;color:var(--navy);margin-bottom:4px}
.ccost{color:var(--red);font-weight:700;font-size:13px}
.cnote{color:var(--muted);font-size:11px}

/* ACCORDION */
.acc{border:1.5px solid var(--border);border-radius:8px;overflow:hidden;margin:12px 0}
.acch{padding:14px 18px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;font-weight:700;font-size:14px;background:#fff;transition:background .2s;user-select:none}
.acch:hover{background:var(--offwhite)}
.accarr{transition:transform .3s;font-size:12px}
.accb{padding:0 18px;max-height:0;overflow:hidden;transition:max-height .4s ease,padding .3s}
.accb.open{max-height:2000px;padding:14px 18px}

/* DISCLAIMER */
.disc{background:#f0f4ff;border:1px solid #c7d2fe;border-radius:8px;padding:14px 16px;font-size:11px;color:#3730a3;line-height:1.6;margin:20px 0}

/* PROGRESS BAR */
.pbar-wrap{background:var(--offwhite);border-radius:8px;padding:14px 16px;margin-top:16px;font-size:13px}
.pbar-track{height:6px;background:var(--border);border-radius:3px;margin-top:8px;overflow:hidden}
.pbar-fill{height:100%;background:var(--green);border-radius:3px;transition:width .3s;width:0%}

/* COMPLETE */
.complete-hero{text-align:center;padding:48px 40px}

/* FOOTER */
.footer{text-align:center;padding:32px 16px;color:var(--muted);font-size:12px;line-height:1.8;border-top:1px solid var(--border);margin-top:40px}
.footer a{color:var(--navy)}

/* TOAST */
.toast{position:fixed;bottom:24px;right:24px;background:var(--navy);color:#fff;padding:10px 20px;border-radius:8px;font-size:13px;font-weight:700;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,.3);animation:fadein .3s}
@keyframes fadein{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}


/* PDF DOWNLOAD BUTTONS */
.btn-pdf{background:linear-gradient(135deg,#b8975a,#d4b278);color:#fff;border:none;padding:clamp(10px,2vw,14px) clamp(16px,3vw,28px);border-radius:8px;cursor:pointer;font-size:clamp(13px,2vw,15px);font-weight:700;letter-spacing:.5px;transition:all .25s;box-shadow:0 3px 12px rgba(184,151,90,.35);display:inline-flex;align-items:center;gap:8px}
.btn-pdf:hover{background:linear-gradient(135deg,#d4b278,#f0c040);transform:translateY(-1px);box-shadow:0 6px 20px rgba(184,151,90,.5)}
.btn-pdf:active{transform:translateY(0)}
.btn-pdf:disabled{opacity:.6;cursor:not-allowed;transform:none}
.btn-pdf-sm{background:transparent;color:#b8975a;border:1.5px solid #b8975a;padding:8px 16px;border-radius:8px;cursor:pointer;font-size:13px;font-weight:700;transition:all .2s}
.btn-pdf-sm:hover{background:#b8975a;color:#fff}
.btn-pdf-sm:disabled{opacity:.6;cursor:not-allowed}
.pdf-panel{background:linear-gradient(135deg,#0d1b3e,#162450);border-radius:12px;padding:20px 24px;margin:16px 0;border:1px solid rgba(184,151,90,.3)}
.pdf-panel-title{color:#f0c040;font-weight:800;font-size:15px;margin-bottom:6px;display:flex;align-items:center;gap:8px}
.pdf-panel-sub{color:rgba(255,255,255,.7);font-size:12px;margin-bottom:16px}
.pdf-btn-row{display:flex;flex-wrap:wrap;gap:10px;align-items:center}

@media print{.hdr,.prog,.brow,.footer,.cbanner,.lang-tog{display:none!important}.card{box-shadow:none;border:1px solid #ccc}body{background:#fff}}
@media(max-width:600px){.slbl{display:none}.lang-tog{position:static;margin-top:12px}}
</style>
</head>
<body>

<div class="hdr">
  <div class="hdr-inner">
    <div class="lang-tog">
      <button class="lbtn on" id="btn-en" onclick="setLang('en')">EN</button>
      <button class="lbtn" id="btn-es" onclick="setLang('es')">ES</button>
    </div>
    <div class="badge" id="t-badge">Free Legal Tool -- New York State</div>
    <h1>NY <span>BizHer</span> <span id="t-headline">LLC Wizard</span></h1>
    <p id="t-subhead">The free, step-by-step guide to forming your New York LLC and getting WBE/MWBE certified -- built for women entrepreneurs.</p>
  </div>
</div>

<div class="cbanner">
  <div class="cinner">
    <div class="clabel" id="t-realcost">Real Costs Upfront:</div>
    <div class="citems">
      <div class="ci"><div class="dot dr"></div><span>Filing: $200</span></div>
      <div class="ci"><div class="dot dr"></div><span>Publication: $600-$2,000</span></div>
      <div class="ci"><div class="dot da"></div><span>Cert. of Publication: $50</span></div>
      <div class="ci"><div class="dot dg"></div><span>EIN: FREE</span></div>
      <div class="ci"><div class="dot dg"></div><span id="t-wbefree">WBE Cert: FREE</span></div>
    </div>
  </div>
</div>

<div class="main">

  <!-- PROGRESS STEPS -->
  <div class="prog">
    <div class="srow">
      <div class="snode active" id="sn1" onclick="gotoStep(1)">
        <div class="scirc" id="sc1">1</div>
        <div class="slbl" id="t-s1lbl">Foundation</div>
      </div>
      <div class="sline" id="sl1"></div>
      <div class="snode" id="sn2" onclick="gotoStep(2)">
        <div class="scirc" id="sc2">2</div>
        <div class="slbl" id="t-s2lbl">Articles</div>
      </div>
      <div class="sline" id="sl2"></div>
      <div class="snode" id="sn3" onclick="gotoStep(3)">
        <div class="scirc" id="sc3">3</div>
        <div class="slbl" id="t-s3lbl">Publication</div>
      </div>
      <div class="sline" id="sl3"></div>
      <div class="snode" id="sn4" onclick="gotoStep(4)">
        <div class="scirc" id="sc4">4</div>
        <div class="slbl" id="t-s4lbl">EIN &amp; Ops</div>
      </div>
      <div class="sline" id="sl4"></div>
      <div class="snode" id="sn5" onclick="gotoStep(5)">
        <div class="scirc" id="sc5">5</div>
        <div class="slbl" id="t-s5lbl">WBE/MWBE</div>
      </div>
    </div>
  </div>

  <div id="steps">

  <!-- ========== STEP 1 ========== -->
  <div id="step1">
    <div class="card">
      <div class="ctitle">&#127963; <span id="t-s1title">Step 1: Your Business Foundation</span></div>
      <div class="csub" id="t-s1sub">Start here. Everything you enter is used to generate your legal documents and saved automatically.</div>

      <div class="ib blue">
        <strong>What is an LLC?</strong> A Limited Liability Company protects your personal assets from business debts while giving you the flexibility of a partnership. You are an "owner" called a member.
      </div>

      <div class="fg">
        <label>LLC Name <span class="req">*</span></label>
        <input type="text" id="f-name" placeholder="e.g. Bright Future Consulting LLC" oninput="saveDraft()">
        <div class="fhint">Must include "LLC" or "Limited Liability Company". Must be unique in New York State.</div>
        <div class="ferr" id="err-name">Please enter your LLC name including "LLC" or "Limited Liability Company".</div>
      </div>

      <div class="fg">
        <label>County of Business <span style="color:#f59e0b;font-size:0.8em;margin-left:4px;">(recommended)</span></label>
        <input type="text" id="f-county" list="county-list" placeholder="e.g. Queens, Kings (Brooklyn), Erie..." oninput="saveDraft()" autocomplete="off">
        <datalist id="county-list">
          <option value="New York (Manhattan)">
          <option value="Kings (Brooklyn)">
          <option value="Queens">
          <option value="Bronx">
          <option value="Richmond (Staten Island)">
          <option value="Nassau">
          <option value="Suffolk">
          <option value="Westchester">
          <option value="Rockland">
          <option value="Orange">
          <option value="Dutchess">
          <option value="Ulster">
          <option value="Sullivan">
          <option value="Putnam">
          <option value="Columbia">
          <option value="Greene">
          <option value="Albany">
          <option value="Schenectady">
          <option value="Rensselaer">
          <option value="Saratoga">
          <option value="Montgomery">
          <option value="Schoharie">
          <option value="Onondaga">
          <option value="Oneida">
          <option value="Madison">
          <option value="Cortland">
          <option value="Cayuga">
          <option value="Oswego">
          <option value="Erie">
          <option value="Niagara">
          <option value="Monroe">
          <option value="Chautauqua">
          <option value="Cattaraugus">
          <option value="Allegany">
          <option value="Wyoming">
          <option value="Genesee">
          <option value="Orleans">
          <option value="Livingston">
          <option value="Ontario">
          <option value="Wayne">
          <option value="Seneca">
          <option value="Yates">
          <option value="Steuben">
          <option value="Schuyler">
          <option value="Chemung">
          <option value="Tompkins">
          <option value="Broome">
          <option value="Tioga">
          <option value="Chenango">
          <option value="Delaware">
          <option value="Otsego">
          <option value="Clinton">
          <option value="Essex">
          <option value="Franklin">
          <option value="Hamilton">
          <option value="Jefferson">
          <option value="Lewis">
          <option value="St. Lawrence">
          <option value="Warren">
          <option value="Washington">
          <option value="Fulton">
          <option value="Herkimer">
        </datalist>
        <div class="ferr" id="err-county">Please select your county.</div>
      </div>

      <div class="fg">
        <label>LLC Type <span class="req">*</span></label>
        <div class="rgroup">
          <div class="ropt sel" id="ro-single" onclick="selType('single')">
            <div class="rdot"></div>
            <div class="rtxt">Single-Member (just me)</div>
          </div>
          <div class="ropt" id="ro-multi" onclick="selType('multi')">
            <div class="rdot"></div>
            <div class="rtxt">Multi-Member (2+ owners)</div>
          </div>
        </div>
        <input type="hidden" id="f-type" value="single">
      </div>

      <div class="fg">
        <label>Business Purpose <span class="req">*</span></label>
        <textarea id="f-purpose" rows="3" placeholder="To engage in consulting services and any other lawful business." oninput="saveDraft()"></textarea>
        <div class="fhint">Tip: A broad purpose gives you flexibility. Example: "To engage in any lawful act or activity for which limited liability companies may be organized."</div>
        <div class="ferr" id="err-purpose">Please enter your business purpose.</div>
      </div>

      <div class="fg">
        <label>Registered Agent</label>
        <div class="rgroup">
          <div class="ropt sel" id="ro-self" onclick="selAgent('self')">
            <div class="rdot"></div>
            <div class="rtxt">Myself (use my address)</div>
          </div>
          <div class="ropt" id="ro-dos" onclick="selAgent('dos')">
            <div class="rdot"></div>
            <div class="rtxt">NY Dept. of State (recommended)</div>
          </div>
        </div>
        <input type="hidden" id="f-agent" value="self">
        <div class="fhint">Using the NY Dept. of State as agent keeps your home address private from public records.</div>
      </div>

      <div class="fg">
        <label>Your Full Legal Name <span class="req">*</span></label>
        <input type="text" id="f-organizer" placeholder="Jane Maria Rodriguez" oninput="saveDraft()">
        <div class="ferr" id="err-organizer">Please enter your full legal name.</div>
      </div>

      <div class="fg">
        <label>Street Address (for Articles) <span class="req">*</span></label>
        <input type="text" id="f-address" placeholder="123 Main Street, Brooklyn, NY 11201" oninput="saveDraft()">
        <div class="ferr" id="err-address">Please enter your address.</div>
      </div>

      <div class="ib amber">
        <strong>Name Availability:</strong> Before filing, verify your name is unique on the NY DOS database.
        <br><a href="https://apps.dos.ny.gov/publicInquiry/" target="_blank" rel="noopener">Check Name Availability on NY DOS website &rarr;</a>
      </div>

      <div class="disc">
        <strong>Legal Disclaimer:</strong> This tool provides general legal information only, not legal advice. No attorney-client relationship is formed. Always verify current requirements with the NY Department of State (dos.ny.gov) and a licensed NY attorney before filing.
      </div>

      <div class="brow">
        <button class="btn btn-p" onclick="nextStep(1)">Next: Articles of Organization &rarr;</button>
      </div>
    </div>
  </div>

  <!-- ========== STEP 2 ========== -->
  <div id="step2" style="display:none">
    <div class="card">
      <div class="ctitle">&#128220; Step 2: Articles of Organization</div>
      <div class="csub">This is the official document filed with the NY Dept. of State to legally create your LLC. Filing fee: <strong>$200</strong>.</div>

      <div class="ib blue">
        <strong>Form DOS-1336-f</strong> -- File online (same-day to 2 business days) or by mail (4-6 weeks). Online filing is strongly recommended.
      </div>

      <div id="articles-out" class="docout">Fill out Step 1 to generate your Articles of Organization.</div>
      <div class="dact">
        <button id="pdf-btn-articles" class="btn btn-pdf btn-sm" onclick="downloadPDF('articles')">&#128196; Download Articles of Organization PDF</button>
        <button class="btn btn-s btn-sm" onclick="copyText('articles-out')">&#128203; Copy Text</button>
        <a href="https://apps.dos.ny.gov/publicInquiry/" target="_blank" rel="noopener" class="btn btn-s btn-sm">File Online at NY DOS &rarr;</a>
      </div>

      <div class="ib red" style="margin-top:20px">
        <strong>&#9200; The 120-Day Clock Starts When You File!</strong><br>
        Once your Articles are approved, you have exactly <strong>120 days</strong> to complete the newspaper publication requirement -- or your LLC authority to conduct business will be <strong>suspended</strong>.
      </div>

      <div class="acc">
        <div class="acch" onclick="toggleAcc(this)">
          <span>What happens after I file?</span>
          <span class="accarr">&#9660;</span>
        </div>
        <div class="accb">
          <ol style="padding-left:18px;font-size:13px;line-height:2.2">
            <li>Pay $200 filing fee (online: credit card; mail: check to "Department of State")</li>
            <li>NY DOS reviews and files your Articles (online: same-day; mail: 4-6 weeks)</li>
            <li>You receive a <strong>Filing Receipt</strong> -- save this! You need it for MWBE certification.</li>
            <li>Your LLC is legally formed -- but complete publication within 120 days</li>
            <li>Get your free EIN from IRS (Step 4)</li>
            <li>Adopt your Operating Agreement (Step 4)</li>
            <li>Open a business bank account</li>
          </ol>
        </div>
      </div>

      <div class="acc">
        <div class="acch" onclick="toggleAcc(this)">
          <span>Full Cost Breakdown</span>
          <span class="accarr">&#9660;</span>
        </div>
        <div class="accb">
          <table class="tbl">
            <thead><tr><th>Item</th><th>Cost</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td>Articles of Organization</td><td>$200</td><td>Required, paid to NY DOS</td></tr>
              <tr><td>Newspaper Publication</td><td>$600-$2,000</td><td>Varies by county -- NYC is highest</td></tr>
              <tr><td>Certificate of Publication</td><td>$50</td><td>Filed with NY DOS after publication</td></tr>
              <tr><td>EIN (IRS)</td><td class="free">FREE</td><td>Apply online at irs.gov</td></tr>
              <tr><td>Operating Agreement (this tool)</td><td class="free">FREE</td><td>Generated in Step 4</td></tr>
              <tr><td>WBE/MWBE Certification</td><td class="free">FREE</td><td>Applied through ESD</td></tr>
              <tr><td><strong>NYC Total (est.)</strong></td><td><strong>~$2,250</strong></td><td>Budget conservatively</td></tr>
              <tr><td><strong>Upstate Total (est.)</strong></td><td><strong>~$875</strong></td><td>Publication much cheaper upstate</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="disc">This tool provides general legal information only, not legal advice. No attorney-client relationship is formed. Verify all requirements with the NY Department of State and a licensed NY attorney before filing.</div>
      <div class="brow">
        <button class="btn btn-s" onclick="prevStep(2)">&larr; Back</button>
        <button class="btn btn-p" onclick="nextStep(2)">Next: Publication Requirement &rarr;</button>
      </div>
    </div>
  </div>

  <!-- ========== STEP 3 ========== -->
  <div id="step3" style="display:none">
    <div class="card">
      <div class="ctitle">&#128240; Step 3: Publication Requirement</div>
      <div class="csub">New York State requires every new LLC to publish a notice in two newspapers for six consecutive weeks. This is mandatory -- failure suspends your business.</div>

      <div class="ib red">
        <strong>&#9888; NOT Optional.</strong> Section 206 of the NY LLC Law requires publication in 2 newspapers designated by your county clerk, once per week for 6 weeks. Failure to file the Certificate of Publication within 120 days = your LLC authority is <strong>suspended</strong>.
      </div>

      <h3 style="font-size:14px;font-weight:800;margin:20px 0 10px;color:var(--navy)">Publication Costs by Region</h3>
      <div class="cgrid">
        <div class="ccard"><div class="cname">Manhattan / Brooklyn / Queens</div><div class="ccost">$1,200 - $2,000</div><div class="cnote">Most expensive in state</div></div>
        <div class="ccard"><div class="cname">Bronx / Staten Island</div><div class="ccost">$800 - $1,400</div><div class="cnote">Designated newspapers only</div></div>
        <div class="ccard"><div class="cname">Nassau / Suffolk / Westchester</div><div class="ccost">$700 - $1,100</div><div class="cnote">Suburban press rates</div></div>
        <div class="ccard"><div class="cname">Albany / Schenectady / Troy</div><div class="ccost">$600 - $900</div><div class="cnote">Capital region rates</div></div>
        <div class="ccard"><div class="cname">Buffalo / Rochester / Syracuse</div><div class="ccost">$600 - $850</div><div class="cnote">Western/Central NY</div></div>
        <div class="ccard"><div class="cname">Rural / Upstate Counties</div><div class="ccost">$500 - $750</div><div class="cnote">Generally lowest rates</div></div>
      </div>

      <h3 style="font-size:14px;font-weight:800;margin:20px 0 10px;color:var(--navy)">How to Complete Publication</h3>
      <ol style="padding-left:20px;font-size:13px;line-height:2.4">
        <li><strong>Contact your County Clerk</strong> -- Ask for the list of two designated newspapers for LLC publication in your county. Use ONLY these newspapers.</li>
        <li><strong>Contact both newspapers</strong> -- Provide your LLC name and filing date exactly as on your DOS filing receipt.</li>
        <li><strong>Publish for 6 consecutive weeks</strong> -- Once per week in each paper for 6 weeks.</li>
        <li><strong>Collect Affidavits of Publication</strong> -- Each newspaper provides a signed affidavit after completion. Keep originals.</li>
        <li><strong>File Certificate of Publication (Form 1708)</strong> -- Submit to NY DOS with both affidavits and $50 fee within 120 days.</li>
      </ol>

      <div class="ib green">
        <strong>Pro Tip:</strong> Many publication services bundle both newspapers and handle the affidavits for you. Search "[your county] LLC publication service" -- always verify they use county-designated papers.
      </div>

      <div class="ib blue">
        <strong>120-Day Deadline Calculator</strong><br>
        <label style="color:#1e40af;font-size:12px;display:block;margin:10px 0 6px">Enter your Articles of Organization filing date:</label>
        <input type="date" id="pub-date" style="width:auto" onchange="calcDeadline()">
        <div id="pub-result" style="margin-top:10px;font-weight:700;font-size:14px"></div>
      </div>

      <div class="acc">
        <div class="acch" onclick="toggleAcc(this)">
          <span>Publication Notice Template</span>
          <span class="accarr">&#9660;</span>
        </div>
        <div class="accb">
          <div id="pub-notice" class="docout">Complete Step 1 to generate your publication notice text.</div>
          <div class="dact">
            <button class="btn btn-g btn-sm" onclick="copyText('pub-notice')">&#128203; Copy Notice</button>
        <button id="pdf-btn-publication2" class="btn btn-pdf btn-sm" onclick="downloadPDF('publication')">&#128196; Download Publication Notice PDF</button>
          </div>
          <p style="font-size:11px;color:var(--muted);margin-top:8px">Note: The newspaper will draft the final notice. Provide them your exact LLC name and filing date.</p>
        </div>
      </div>

      <div class="disc">This tool provides general legal information only, not legal advice. Verify all requirements with the NY Department of State and a licensed NY attorney before filing.</div>
      <div class="brow">
        <button class="btn btn-s" onclick="prevStep(3)">&larr; Back</button>
        <button class="btn btn-p" onclick="nextStep(3)">Next: EIN &amp; Operating Agreement &rarr;</button>
      </div>
    </div>
  </div>

  <!-- ========== STEP 4 ========== -->
  <div id="step4" style="display:none">
    <div class="card">
      <div class="ctitle">&#128179; Step 4: EIN &amp; Operating Agreement</div>
      <div class="csub">Two critical steps: your free federal tax ID (instant online) and your legally required Operating Agreement.</div>

      <h3 style="font-size:15px;font-weight:800;margin-bottom:12px;color:var(--navy)">Employer Identification Number (EIN)</h3>
      <div class="ib green">
        <strong>Your EIN is 100% FREE from the IRS.</strong> Anyone charging you for an EIN is unnecessary -- apply directly at irs.gov in under 10 minutes and receive your EIN immediately.
      </div>
      <div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:8px;padding:16px;margin:16px 0">
        <div style="font-weight:800;font-size:14px;color:#14532d;margin-bottom:10px">How to Get Your EIN (IRS Form SS-4)</div>
        <ol style="padding-left:18px;font-size:13px;line-height:2.2">
          <li>Go to <a href="https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" target="_blank" rel="noopener" style="color:#14532d;font-weight:700">irs.gov/ein</a></li>
          <li>Select "Limited Liability Company" as entity type</li>
          <li>Select number of members (1 for single, 2+ for multi)</li>
          <li>Complete the online application (about 10 minutes)</li>
          <li>Receive your EIN <strong>immediately</strong> -- print and save the confirmation letter</li>
        </ol>
        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" target="_blank" rel="noopener" class="btn btn-p btn-sm" style="display:inline-flex;margin-top:10px;text-decoration:none">Apply for Free EIN at IRS.gov &rarr;</a>
      </div>

      <div style="height:1px;background:var(--border);margin:24px 0"></div>

      <h3 style="font-size:15px;font-weight:800;margin-bottom:12px;color:var(--navy)">Operating Agreement</h3>
      <div class="ib amber">
        <strong>Required by NY Law (Section 417).</strong> All LLCs must adopt a written Operating Agreement. It does NOT need to be filed with the state, but it must exist. You have up to 90 days after filing to adopt it.
      </div>

      <div class="fg">
        <label>Member Name(s) and Ownership %</label>
        <input type="text" id="f-members" placeholder="Jane Smith (100%) -- or -- Jane Smith (60%), Maria Jones (40%)" oninput="saveDraft()">
        <div class="fhint">List all members and ownership percentages. Must total 100%.</div>
      </div>

      <div class="fg">
        <label>Management Structure</label>
        <div class="rgroup">
          <div class="ropt sel" id="ro-mmember" onclick="selMgmt('member-managed')">
            <div class="rdot"></div>
            <div class="rtxt">Member-Managed (I run it)</div>
          </div>
          <div class="ropt" id="ro-mmanager" onclick="selMgmt('manager-managed')">
            <div class="rdot"></div>
            <div class="rtxt">Manager-Managed (hire a manager)</div>
          </div>
        </div>
        <input type="hidden" id="f-mgmt" value="member-managed">
      </div>

      <div class="fg">
        <label>Fiscal Year End</label>
        <select id="f-fiscal" onchange="saveDraft()">
          <option value="December 31">December 31 (most common)</option>
          <option value="March 31">March 31</option>
          <option value="June 30">June 30</option>
          <option value="September 30">September 30</option>
        </select>
      </div>

      <button class="btn btn-g" onclick="genOpAgreement()" style="margin-bottom:16px">&#128196; Generate Operating Agreement</button>
      <div id="opagree-out" class="docout" style="display:none;font-size:12px;max-height:180px"></div>
      <div id="opagree-act" class="dact" style="display:none">
        <div class="pdf-panel" style="margin-top:12px">
          <div class="pdf-panel-title">&#128196; Professional PDF Ready</div>
          <div class="pdf-panel-sub">Download a fully formatted Operating Agreement PDF — print, sign, and keep in your business records.</div>
          <div class="pdf-btn-row">
            <button id="pdf-btn-operating" class="btn btn-pdf" onclick="downloadPDF('operating')">&#128196; Download Operating Agreement PDF</button>
            <button class="btn btn-s btn-sm" onclick="copyText('opagree-out')">&#128203; Copy Text</button>
          </div>
        </div>
      </div>

      <div class="ib red" style="margin-top:16px">
        <strong>Attorney Review Strongly Recommended.</strong> This is a starting template. Have a licensed NY attorney review your Operating Agreement before signing -- especially for multi-member LLCs where profit-sharing and buyout terms matter.
      </div>

      <div class="disc">This tool provides general legal information only, not legal advice. No attorney-client relationship is formed. Have a licensed NY attorney review all documents before use.</div>
      <div class="brow">
        <button class="btn btn-s" onclick="prevStep(4)">&larr; Back</button>
        <button class="btn btn-p" onclick="nextStep(4)">Next: WBE/MWBE Certification &rarr;</button>
      </div>
    </div>
  </div>

  <!-- ========== STEP 5 ========== -->
  <div id="step5" style="display:none">
    <div class="card">
      <div class="ctitle">&#127942; Step 5: WBE/MWBE Certification</div>
      <div class="csub">Women Business Enterprise (WBE) and MWBE certifications are FREE and unlock access to billions in NY State contract opportunities.</div>

      <div class="ib gold">
        <strong>What certification gets you:</strong><br>
        - Listed in the official NY State MWBE Directory (seen by all state agencies)<br>
        - Access to NY State contract set-asides (30% MWBE goals on state contracts)<br>
        - NYC SBS certification option (NYC agency contracts)<br>
        - Port Authority of NY &amp; NJ certification option<br>
        - Erie County / City of Buffalo joint certification option<br>
        - Access to MWBE-specific loans, grants, and training programs
      </div>

      <div class="ib blue">
        <strong>Basic WBE Eligibility:</strong><br>
        - Business is at least <strong>51% owned, operated, and controlled</strong> by a woman or women<br>
        - Owner(s) must be US citizens or permanent residents<br>
        - Business must be <strong>actively conducting business in NY State</strong><br>
        - Personal Net Worth must be <strong>under $3.03 million</strong> (2026 threshold -- excludes primary home equity and business interest)<br>
        - Business must be <strong>independent</strong> -- not controlled by outside parties
      </div>

      <div class="ib amber">
        <strong>Before You Apply:</strong> Use the <a href="https://esd.ny.gov/doing-business-ny/mwbe/mwbe-certification-assessment" target="_blank" rel="noopener">ESD MWBE Assessment Tool</a> to confirm your eligibility first.
      </div>

      <h3 style="font-size:14px;font-weight:800;margin:24px 0 10px;color:var(--navy)">Complete Document Checklist (22 items)</h3>
      <p style="font-size:12px;color:var(--muted);margin-bottom:14px">Check each item as you gather it. Your progress is saved automatically.</p>

      <div class="cgtitle">Application Forms (Notarized)</div>
      <ul class="cklist">
        <li><div class="chkbox" id="c0" onclick="togChk(0)"></div><div class="clbl"><strong>Certification Affidavit</strong><span>Part of ESD application -- signed and notarized</span></div></li>
        <li><div class="chkbox" id="c1" onclick="togChk(1)"></div><div class="clbl"><strong>Personal Net Worth Affidavit (Attachment A)</strong><span>Signed and notarized -- PNW must be under $3.03M</span></div></li>
        <li><div class="chkbox" id="c2" onclick="togChk(2)"></div><div class="clbl"><strong>Personal Net Worth Worksheet (Attachment B)</strong><span>If applicable</span></div></li>
      </ul>

      <div class="cgtitle">Identity and Status</div>
      <ul class="cklist">
        <li><div class="chkbox" id="c3" onclick="togChk(3)"></div><div class="clbl"><strong>Proof of US Citizenship or Permanent Resident Status</strong><span>Passport, naturalization certificate, or green card</span></div></li>
        <li><div class="chkbox" id="c4" onclick="togChk(4)"></div><div class="clbl"><strong>Proof of Gender</strong><span>Government-issued ID showing gender</span></div></li>
        <li><div class="chkbox" id="c5" onclick="togChk(5)"></div><div class="clbl"><strong>Proof of Minority Group Status</strong><span>Only if applying for MBE in addition to WBE</span></div></li>
      </ul>

      <div class="cgtitle">Business Formation Documents</div>
      <ul class="cklist">
        <li><div class="chkbox" id="c6" onclick="togChk(6)"></div><div class="clbl"><strong>Articles of Organization AND Filing Receipt</strong><span>The original DOS-stamped receipt from Step 2</span></div></li>
        <li><div class="chkbox" id="c7" onclick="togChk(7)"></div><div class="clbl"><strong>Operating Agreement (fully executed)</strong><span>Generated and signed in Step 4</span></div></li>
        <li><div class="chkbox" id="c8" onclick="togChk(8)"></div><div class="clbl"><strong>Membership Ledger</strong><span>Shows all members and ownership percentages</span></div></li>
        <li><div class="chkbox" id="c9" onclick="togChk(9)"></div><div class="clbl"><strong>Certificate of Assumed Name</strong><span>And filing receipt -- only if doing business under a DBA name</span></div></li>
      </ul>

      <div class="cgtitle">Financial Documents</div>
      <ul class="cklist">
        <li><div class="chkbox" id="c10" onclick="togChk(10)"></div><div class="clbl"><strong>Federal and State Individual Income Tax Returns</strong><span>Most recent 2 years -- personal returns for all owners</span></div></li>
        <li><div class="chkbox" id="c11" onclick="togChk(11)"></div><div class="clbl"><strong>Business Tax Returns</strong><span>Federal and State -- for the business entity</span></div></li>
        <li><div class="chkbox" id="c12" onclick="togChk(12)"></div><div class="clbl"><strong>Form W-2s including W-3</strong><span>Issued by the business -- if applicable</span></div></li>
        <li><div class="chkbox" id="c13" onclick="togChk(13)"></div><div class="clbl"><strong>Bank Signature Cards or Bank Letter</strong><span>Shows who is authorized on the business account</span></div></li>
        <li><div class="chkbox" id="c14" onclick="togChk(14)"></div><div class="clbl"><strong>Proof of Business Capitalization</strong><span>Money, property, equipment, or expertise used to fund the business</span></div></li>
      </ul>

      <div class="cgtitle">Operations and NY Presence</div>
      <ul class="cklist">
        <li><div class="chkbox" id="c15" onclick="togChk(15)"></div><div class="clbl"><strong>Proof of NY Business Presence</strong><span>Current lease, deed, or utility bills showing NY address</span></div></li>
        <li><div class="chkbox" id="c16" onclick="togChk(16)"></div><div class="clbl"><strong>Contracts and Proof of Payment</strong><span>Client contracts, invoices paid -- shows active business</span></div></li>
        <li><div class="chkbox" id="c17" onclick="togChk(17)"></div><div class="clbl"><strong>All Licenses, Permits, and Certifications</strong><span>Any professional licenses, business permits, industry certifications</span></div></li>
      </ul>

      <div class="cgtitle">People and Background</div>
      <ul class="cklist">
        <li><div class="chkbox" id="c18" onclick="togChk(18)"></div><div class="clbl"><strong>Resumes of All Owners, Directors, Officers, and Key Employees</strong><span>Demonstrates your control and expertise in the business</span></div></li>
      </ul>

      <div class="cgtitle">Optional Add-ons (Apply Simultaneously)</div>
      <ul class="cklist">
        <li><div class="chkbox" id="c19" onclick="togChk(19)"></div><div class="clbl"><strong>NYC SBS Addendum</strong><span>For NYC Department of Small Business Services certification</span></div></li>
        <li><div class="chkbox" id="c20" onclick="togChk(20)"></div><div class="clbl"><strong>Port Authority of NY and NJ Addendum</strong><span>For Port Authority contracts</span></div></li>
        <li><div class="chkbox" id="c21" onclick="togChk(21)"></div><div class="clbl"><strong>Erie County / City of Buffalo Addendum</strong><span>For Western NY government contracts</span></div></li>
      </ul>

      <div class="pbar-wrap">
        <strong>Progress: <span id="chk-ct">0</span> / 22 items collected</strong>
        <div class="pbar-track"><div class="pbar-fill" id="pbar"></div></div>
      </div>

      <div style="margin-top:24px;padding:24px;background:var(--navy);border-radius:10px;color:#fff;text-align:center">
        <div style="font-size:32px;margin-bottom:8px">&#128640;</div>
        <div style="font-weight:800;font-size:16px;margin-bottom:8px">Ready to Apply?</div>
        <div style="font-size:13px;opacity:.85;margin-bottom:16px">Once documents are gathered, apply free through NY Empire State Development.</div>
        <a href="https://esd.ny.gov/mwbe-new-certification" target="_blank" rel="noopener" class="btn btn-g" style="text-decoration:none">Apply for MWBE Certification at ESD.NY.GOV &rarr;</a>
      </div>

      <div class="disc" style="margin-top:24px">This tool provides general legal information only, not legal advice. No attorney-client relationship is formed. Always verify with the NY Department of State, NYS Empire State Development, and a licensed NY attorney.</div>
      <div class="brow">
        <button class="btn btn-s" onclick="prevStep(5)">&larr; Back</button>
        <button class="btn btn-g" onclick="showDone()">&#127937; Finish and Print Summary</button>
      </div>
    </div>
  </div>

  <!-- ========== COMPLETE ========== -->
  <div id="step-done" style="display:none">
    <div class="card complete-hero">
      <div style="font-size:64px;margin-bottom:16px">&#127881;</div>
      <h2 style="font-size:1.8rem;font-weight:800;color:var(--navy);margin-bottom:10px">You are Ready to Launch!</h2>
      <p style="color:var(--muted);margin-bottom:28px;max-width:520px;margin-left:auto;margin-right:auto">You have completed the NY BizHer LLC Wizard. Here is your complete action checklist:</p>
      <div style="text-align:left;max-width:600px;margin:0 auto">
        <div style="background:var(--offwhite);border-radius:10px;padding:20px;margin-bottom:16px">
          <div class="cgtitle">Immediate Actions</div>
          <ul style="list-style:none;font-size:13px;line-height:2.4">
            <li>&#9744; Check your LLC name at NY DOS (dos.ny.gov)</li>
            <li>&#9744; File Articles of Organization -- pay $200</li>
            <li>&#9744; Save your DOS Filing Receipt (you need it for MWBE)</li>
            <li>&#9744; Contact county clerk for publication newspaper list</li>
            <li>&#9744; Get your free EIN at irs.gov</li>
            <li>&#9744; Sign your Operating Agreement (have attorney review first)</li>
            <li>&#9744; Open a business bank account</li>
          </ul>
        </div>
        <div style="background:var(--offwhite);border-radius:10px;padding:20px;margin-bottom:16px">
          <div class="cgtitle">Within 120 Days of Filing</div>
          <ul style="list-style:none;font-size:13px;line-height:2.4">
            <li>&#9744; Publish in 2 county-designated newspapers for 6 weeks</li>
            <li>&#9744; Collect Affidavits of Publication from both newspapers</li>
            <li>&#9744; File Certificate of Publication (Form 1708) + $50 with NY DOS</li>
          </ul>
        </div>
        <div style="background:var(--offwhite);border-radius:10px;padding:20px">
          <div class="cgtitle">When Ready</div>
          <ul style="list-style:none;font-size:13px;line-height:2.4">
            <li>&#9744; Gather all 22 MWBE certification documents</li>
            <li>&#9744; Apply free at esd.ny.gov/mwbe-new-certification</li>
          </ul>
        </div>
      </div>
      <div class="pdf-panel" style="margin-top:24px">
        <div class="pdf-panel-title" style="font-size:18px">&#127942; Your Formation Package is Ready</div>
        <div class="pdf-panel-sub" style="font-size:13px;margin-bottom:20px">Download professional, legally accurate PDF documents. All documents are generated 100% in your browser — nothing is sent to a server.</div>
        <div class="pdf-btn-row" style="justify-content:center;margin-bottom:14px">
          <button id="pdf-btn-package" class="btn btn-pdf" style="font-size:16px;padding:14px 32px" onclick="downloadPDF('package')">&#127942; Complete Formation Package (All 4 Documents)</button>
        </div>
        <div style="text-align:center;color:rgba(255,255,255,.5);font-size:11px;margin:8px 0 16px">— or download individually —</div>
        <div class="pdf-btn-row" style="justify-content:center">
          <button id="pdf-btn-articles2" class="btn btn-pdf-sm" onclick="downloadPDF('articles')">&#128196; Articles of Organization</button>
          <button id="pdf-btn-publication" class="btn btn-pdf-sm" onclick="downloadPDF('publication')">&#128196; Publication Notice</button>
          <button id="pdf-btn-operating2" class="btn btn-pdf-sm" onclick="downloadPDF('operating')">&#128196; Operating Agreement</button>
          <button id="pdf-btn-wbe" class="btn btn-pdf-sm" onclick="downloadPDF('wbe')">&#128196; WBE/MWBE Checklist</button>
        </div>
      </div>
      <div style="margin-top:16px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-s" onclick="resetWizard()">&#8635; Start Over</button>
      </div>
      <div class="disc" style="margin-top:24px;text-align:left">This tool provides general legal information only, not legal advice. Laws change -- always verify current requirements with a licensed NY attorney and the NY Department of State before filing.</div>
    </div>
  </div>

  </div><!-- end #steps -->
</div><!-- end .main -->

<div class="footer">
  <strong>NY BizHer</strong> -- A free public tool by <a href="https://osintnet.uk" target="_blank" rel="noopener">Indica Independent Media</a><br>
  Not a law firm. Not legal advice. Always consult a licensed NY attorney before filing.<br>
  Sources: <a href="https://dos.ny.gov/forming-limited-liability-company-new-york" target="_blank" rel="noopener">NY DOS LLC Guide</a> | <a href="https://esd.ny.gov/nys-mwbe-certification-documentation-requirements-llc" target="_blank" rel="noopener">NYS ESD MWBE Requirements</a> | <a href="https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" target="_blank" rel="noopener">IRS EIN</a><br>
  <span style="opacity:.6">Information current as of May 2026. Laws change -- verify before filing.</span>
</div>

<script>
// ========================
// STATE
// ========================
var curStep = 1;
var chkState = {};
var lang = 'en';

try { chkState = JSON.parse(localStorage.getItem('bh-chks') || '{}'); } catch(e){}

// ========================
// STEP NAVIGATION
// ========================
function gotoStep(n) {
  if (n < 1 || n > 5) return;
  document.getElementById('step' + curStep).style.display = 'none';
  document.getElementById('step-done').style.display = 'none';
  curStep = n;
  document.getElementById('step' + n).style.display = 'block';
  updateStepUI();
  if (n === 2) genArticles();
  if (n === 3) genPubNotice();
  window.scrollTo(0, 0);
}

function nextStep(from) {
  if (from === 1 && !validateStep1()) return;
  markDone(from);
  gotoStep(from + 1);
}

function prevStep(from) {
  gotoStep(from - 1);
}

function markDone(n) {
  var node = document.getElementById('sn' + n);
  var circ = document.getElementById('sc' + n);
  var line = document.getElementById('sl' + n);
  if (node) node.className = 'snode done';
  if (circ) circ.textContent = String.fromCharCode(10003);
  if (line) line.className = 'sline done';
}

function updateStepUI() {
  for (var i = 1; i <= 5; i++) {
    var node = document.getElementById('sn' + i);
    if (!node) continue;
    if (node.className.indexOf('done') === -1) {
      node.className = (i === curStep) ? 'snode active' : 'snode';
    }
  }
}

function showDone() {
  document.getElementById('step5').style.display = 'none';
  markDone(5);
  document.getElementById('step-done').style.display = 'block';
  window.scrollTo(0, 0);
}

function resetWizard() {
  curStep = 1;
  for (var i = 1; i <= 5; i++) {
    var node = document.getElementById('sn' + i);
    var circ = document.getElementById('sc' + i);
    var line = document.getElementById('sl' + i);
    if (node) node.className = (i === 1) ? 'snode active' : 'snode';
    if (circ) circ.textContent = String(i);
    if (line) line.className = 'sline';
    if (i > 1) document.getElementById('step' + i).style.display = 'none';
  }
  document.getElementById('step-done').style.display = 'none';
  document.getElementById('step1').style.display = 'block';
  window.scrollTo(0, 0);
}

// ========================
// VALIDATION
// ========================
function validateStep1() {
  var ok = true;
  var name = document.getElementById('f-name').value.trim();
  var county = document.getElementById('f-county').value.trim() || 'Not specified';
  var org = document.getElementById('f-organizer').value.trim();
  var addr = document.getElementById('f-address').value.trim();
  var purpose = document.getElementById('f-purpose').value.trim();

  var nameOk = name.length > 2 && (name.toUpperCase().indexOf('LLC') !== -1 || name.toUpperCase().indexOf('LIMITED LIABILITY') !== -1);
  showErr('err-name', !nameOk);
  // county is recommended but not required for step advancement
  showErr('err-county', false);
  showErr('err-organizer', !org);
  showErr('err-address', !addr);
  showErr('err-purpose', !purpose);

  if (!nameOk || !org || !addr || !purpose) {
    ok = false;
    window.scrollTo(0, 200);
  }
  return ok;
}

function showErr(id, show) {
  var el = document.getElementById(id);
  if (el) el.style.display = show ? 'block' : 'none';
}

// ========================
// RADIO SELECTORS
// ========================
function selType(v) {
  document.getElementById('f-type').value = v;
  document.getElementById('ro-single').className = 'ropt' + (v === 'single' ? ' sel' : '');
  document.getElementById('ro-multi').className = 'ropt' + (v === 'multi' ? ' sel' : '');
  saveDraft();
}

function selAgent(v) {
  document.getElementById('f-agent').value = v;
  document.getElementById('ro-self').className = 'ropt' + (v === 'self' ? ' sel' : '');
  document.getElementById('ro-dos').className = 'ropt' + (v === 'dos' ? ' sel' : '');
}

function selMgmt(v) {
  document.getElementById('f-mgmt').value = v;
  document.getElementById('ro-mmember').className = 'ropt' + (v === 'member-managed' ? ' sel' : '');
  document.getElementById('ro-mmanager').className = 'ropt' + (v === 'manager-managed' ? ' sel' : '');
}

// ========================
// ACCORDION
// ========================
function toggleAcc(hdr) {
  var body = hdr.nextElementSibling;
  var arr = hdr.querySelector('.accarr');
  var isOpen = body.className.indexOf('open') !== -1;
  body.className = isOpen ? 'accb' : 'accb open';
  if (arr) arr.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
}

// ========================
// FORM DATA
// ========================
function getFD() {
  return {
    name: (document.getElementById('f-name').value.trim() || '[LLC NAME]'),
    county: (document.getElementById('f-county').value || '[COUNTY]'),
    type: document.getElementById('f-type').value,
    purpose: (document.getElementById('f-purpose').value.trim() || 'To engage in any lawful act or activity for which limited liability companies may be organized.'),
    agent: document.getElementById('f-agent').value,
    organizer: (document.getElementById('f-organizer').value.trim() || '[ORGANIZER NAME]'),
    address: (document.getElementById('f-address').value.trim() || '[ADDRESS]'),
    members: (document.getElementById('f-members') ? document.getElementById('f-members').value.trim() : ''),
    mgmt: (document.getElementById('f-mgmt') ? document.getElementById('f-mgmt').value : 'member-managed'),
    fiscal: (document.getElementById('f-fiscal') ? document.getElementById('f-fiscal').value : 'December 31')
  };
}

// ========================
// ARTICLES GENERATOR
// ========================
function genArticles() {
  var d = getFD();
  var agentText = d.agent === 'dos'
    ? 'The Secretary of State is designated as agent of the limited liability company upon whom process against it may be served. The Secretary of State shall mail a copy of any process against it served upon the Secretary of State to: ' + d.organizer + ', ' + d.address
    : 'The registered agent is ' + d.organizer + ', located at: ' + d.address;

  var today = new Date().toLocaleDateString('en-US', {year:'numeric', month:'long', day:'numeric'});
  var lines = [
    'ARTICLES OF ORGANIZATION',
    'DOMESTIC LIMITED LIABILITY COMPANY',
    'NEW YORK STATE DEPARTMENT OF STATE',
    'Form DOS-1336-f',
    '',
    '='.repeat(50),
    '',
    'ARTICLE I -- NAME',
    '',
    'The name of the Limited Liability Company is:',
    d.name,
    '',
    '='.repeat(50),
    '',
    'ARTICLE II -- COUNTY OF OFFICE',
    '',
    'The county in New York State in which the office of the',
    'Limited Liability Company is located is:',
    d.county + ' County',
    '',
    '='.repeat(50),
    '',
    'ARTICLE III -- REGISTERED AGENT',
    '',
    agentText,
    '',
    '='.repeat(50),
    '',
    'ARTICLE IV -- PURPOSE',
    '',
    d.purpose,
    '',
    '='.repeat(50),
    '',
    'ARTICLE V -- ORGANIZER',
    '',
    'The name and address of the organizer is:',
    d.organizer,
    d.address,
    '',
    '='.repeat(50),
    '',
    'IN WITNESS WHEREOF, I have signed this document on ' + today + '.',
    '',
    'Signature of Organizer:  ___________________________',
    'Printed Name: ' + d.organizer,
    '',
    'FILING INSTRUCTIONS:',
    '- File online at: apps.dos.ny.gov (fastest -- same-day)',
    '- Or mail with $200 check payable to "Department of State"',
    '- NY Dept. of State, Division of Corporations,',
    '  One Commerce Plaza, 99 Washington Ave, Albany NY 12231',
    '- SAVE YOUR FILING RECEIPT -- required for MWBE certification',
    '- 120-day publication clock begins on your filing date',
  ];
  document.getElementById('articles-out').textContent = lines.join('\\n');
}

// ========================
// PUBLICATION NOTICE
// ========================
function genPubNotice() {
  var d = getFD();
  var lines = [
    'NOTICE OF FORMATION OF LIMITED LIABILITY COMPANY',
    '',
    'Notice of Formation of ' + d.name + ', a Limited Liability Company.',
    'Articles of Organization filed with the Secretary of State of New York',
    'on [DATE OF FILING -- enter your actual filing date].',
    'Office location: ' + d.county + ' County.',
    'Secretary of State designated as agent of LLC upon whom process',
    'against it may be served. Secretary of State shall mail a copy of',
    'any process to: ' + d.organizer + ', ' + d.address + '.',
    'Purpose: ' + d.purpose,
  ];
  var el = document.getElementById('pub-notice');
  if (el) el.textContent = lines.join('\\n');
}

// ========================
// DEADLINE CALCULATOR
// ========================
function calcDeadline() {
  var val = document.getElementById('pub-date').value;
  if (!val) return;
  var d = new Date(val + 'T12:00:00');
  d.setDate(d.getDate() + 120);
  var opts = {year:'numeric', month:'long', day:'numeric'};
  var ds = d.toLocaleDateString('en-US', opts);
  var now = new Date();
  var days = Math.ceil((d - now) / (1000 * 60 * 60 * 24));
  var color = days > 60 ? '#14532d' : days > 30 ? '#78350f' : '#7f1d1d';
  var el = document.getElementById('pub-result');
  if (el) el.innerHTML = '<span style="color:' + color + '">Deadline: <strong>' + ds + '</strong> (' + days + ' days remaining)</span>';
}

// ========================
// OPERATING AGREEMENT
// ========================
function genOpAgreement() {
  var d = getFD();
  var today = new Date().toLocaleDateString('en-US', {year:'numeric', month:'long', day:'numeric'});
  var members = d.members || d.organizer + ' (100%)';
  var isSingle = d.type === 'single';

  var lines = [
    (isSingle ? 'SINGLE-MEMBER ' : 'MULTI-MEMBER ') + 'OPERATING AGREEMENT',
    'OF ' + d.name.toUpperCase(),
    'A New York Limited Liability Company',
    '',
    '='.repeat(60),
    '',
    'This Operating Agreement is entered into as of ' + today,
    'by and among the member(s) listed below.',
    '',
    'ARTICLE I -- FORMATION',
    '',
    '1.1 Formation. The Company was formed as a limited liability',
    '    company pursuant to the New York Limited Liability Company',
    '    Law upon the filing of Articles of Organization with the',
    '    New York Department of State.',
    '',
    '1.2 Name. ' + d.name,
    '',
    '1.3 Principal Office. ' + d.county + ' County, New York.',
    '',
    '1.4 Purpose. ' + d.purpose,
    '',
    'ARTICLE II -- MEMBERS AND OWNERSHIP',
    '',
    '2.1 Members and Ownership Interests:',
    '    ' + members,
    '',
    '2.2 Additional Members. New members may only be admitted by',
    '    unanimous written consent of all existing members.',
    '',
    'ARTICLE III -- MANAGEMENT',
    '',
    '3.1 The Company shall be ' + d.mgmt + '.',
    (d.mgmt === 'member-managed'
      ? '    Each member has authority to act on behalf of the Company in the ordinary course of business.'
      : '    The members shall designate one or more managers to manage the affairs of the Company.'),
    '',
    '3.2 Major Decisions Requiring Unanimous Consent:',
    '    (a) Amendment of this Agreement',
    '    (b) Merger or dissolution',
    '    (c) Sale of substantially all assets',
    '    (d) Admission of new members',
    '    (e) Any action outside the ordinary course of business',
    '',
    'ARTICLE IV -- CAPITAL AND DISTRIBUTIONS',
    '',
    '4.1 Capital Contributions as agreed in writing by members.',
    '',
    '4.2 Distributions at such times and amounts as member(s)',
    '    determine, in proportion to ownership interests.',
    '',
    'ARTICLE V -- TAX TREATMENT',
    '',
    '5.1 The Company shall be treated as a',
    (isSingle ? '    disregarded entity' : '    partnership') + ' for federal and NY State income tax purposes,',
    '    unless members elect otherwise in writing.',
    '',
    '5.2 Fiscal Year ends: ' + d.fiscal,
    '',
    'ARTICLE VI -- TRANSFER RESTRICTIONS',
    '',
    '6.1 No member may transfer or assign their interest without',
    '    prior written consent of all other members.',
    '',
    'ARTICLE VII -- DISSOLUTION',
    '',
    '7.1 The Company shall dissolve upon:',
    '    (a) Unanimous written consent of all members',
    '    (b) Entry of a decree of judicial dissolution under NY LLC Law',
    '',
    'ARTICLE VIII -- MISCELLANEOUS',
    '',
    '8.1 Governing Law: State of New York.',
    '8.2 Entire Agreement: Supersedes all prior agreements.',
    '8.3 Amendment: Only by written consent of all members.',
    '8.4 Severability: If any provision is invalid, the remainder continues.',
    '',
    '='.repeat(60),
    '',
    'IN WITNESS WHEREOF, the member(s) execute this Agreement.',
    '',
    'Member Signature:  ___________________________',
    'Printed Name: ' + d.organizer,
    'Date: ___________________________',
    '',
    '*** HAVE A LICENSED NY ATTORNEY REVIEW BEFORE SIGNING ***',
  ];

  var el = document.getElementById('opagree-out');
  var act = document.getElementById('opagree-act');
  el.textContent = lines.join('\\n');
  el.style.display = 'block';
  act.style.display = 'flex';
}

// ========================
// CHECKLIST
// ========================
function togChk(idx) {
  chkState[idx] = !chkState[idx];
  var el = document.getElementById('c' + idx);
  if (el) {
    el.className = 'chkbox' + (chkState[idx] ? ' on' : '');
    el.textContent = chkState[idx] ? String.fromCharCode(10003) : '';
  }
  try { localStorage.setItem('bh-chks', JSON.stringify(chkState)); } catch(e){}
  updatePbar();
}

function updatePbar() {
  var count = 0;
  for (var k in chkState) { if (chkState[k]) count++; }
  var ct = document.getElementById('chk-ct');
  var bar = document.getElementById('pbar');
  if (ct) ct.textContent = String(count);
  if (bar) bar.style.width = Math.round((count / 22) * 100) + '%';
}

function restoreChks() {
  for (var k in chkState) {
    if (chkState[k]) {
      var el = document.getElementById('c' + k);
      if (el) {
        el.className = 'chkbox on';
        el.textContent = String.fromCharCode(10003);
      }
    }
  }
  updatePbar();
}

// ========================
// DRAFT SAVE / RESTORE
// ========================
function saveDraft() {
  try {
    localStorage.setItem('bh-draft', JSON.stringify({
      name: document.getElementById('f-name').value,
      county: document.getElementById('f-county').value,
      type: document.getElementById('f-type').value,
      purpose: document.getElementById('f-purpose').value,
      agent: document.getElementById('f-agent').value,
      organizer: document.getElementById('f-organizer').value,
      address: document.getElementById('f-address').value
    }));
  } catch(e) {}
}

function restoreDraft() {
  try {
    var d = JSON.parse(localStorage.getItem('bh-draft') || '{}');
    if (d.name) document.getElementById('f-name').value = d.name;
    if (d.county) document.getElementById('f-county').value = d.county;
    if (d.type) selType(d.type);
    if (d.purpose) document.getElementById('f-purpose').value = d.purpose;
    if (d.agent) selAgent(d.agent);
    if (d.organizer) document.getElementById('f-organizer').value = d.organizer;
    if (d.address) document.getElementById('f-address').value = d.address;
  } catch(e) {}
}

// ========================
// CLIPBOARD
// ========================
function copyText(id) {
  var el = document.getElementById(id);
  if (!el) return;
  var txt = el.textContent;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(txt).then(function() { showToast('Copied to clipboard!'); });
  } else {
    var ta = document.createElement('textarea');
    ta.value = txt;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('Copied!');
  }
}

function showToast(msg) {
  var t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(function() { if (t.parentNode) t.parentNode.removeChild(t); }, 2500);
}

// ========================
// TRANSLATIONS
// ========================
var TX = {
  en: { badge: 'Free Legal Tool -- New York State', headline: 'LLC Wizard', sub: 'The free, step-by-step guide to forming your New York LLC and getting WBE/MWBE certified -- built for women entrepreneurs.' },
  es: { badge: 'Herramienta Legal Gratuita -- Estado de Nueva York', headline: 'Asistente LLC', sub: 'La guia gratuita paso a paso para formar su LLC en Nueva York y obtener la certificacion WBE/MWBE -- hecha para mujeres emprendedoras.' }
};

function setLang(l) {
  lang = l;
  document.getElementById('btn-en').className = 'lbtn' + (l === 'en' ? ' on' : '');
  document.getElementById('btn-es').className = 'lbtn' + (l === 'es' ? ' on' : '');
  var tx = TX[l];
  if (!tx) return;
  var badge = document.getElementById('t-badge');
  var hl = document.getElementById('t-headline');
  var sub = document.getElementById('t-subhead');
  if (badge) badge.textContent = tx.badge;
  if (hl) hl.textContent = tx.headline;
  if (sub) sub.textContent = tx.sub;
}

// ========================
// INIT
// ========================
window.addEventListener('DOMContentLoaded', function() {
  restoreDraft();
  restoreChks();
});


// ============================================================
// ENTERPRISE PDF ENGINE — pdf-lib based
// ============================================================
// ============================================================
// NY BizHer — Enterprise PDF Engine
// Uses pdf-lib (MIT license, pure browser, ISO 32000 compliant)
// All PDF generation runs 100% client-side — no server needed
// ============================================================

// ---------- PDF CONSTANTS ----------
var PDF_MARGIN_L = 90;   // 1.25 inches at 72dpi
var PDF_MARGIN_R = 90;
var PDF_MARGIN_T = 72;   // 1 inch
var PDF_MARGIN_B = 72;
var PDF_PAGE_W = 612;    // US Letter 8.5"
var PDF_PAGE_H = 792;    // US Letter 11"
var PDF_USABLE_W = PDF_PAGE_W - PDF_MARGIN_L - PDF_MARGIN_R;  // 432pt

// Colors (RGB 0-1)
var C_NAVY   = {r:0.051, g:0.106, b:0.243};   // #0d1b3e
var C_GOLD   = {r:0.722, g:0.592, b:0.353};   // #b8975a
var C_TEXT   = {r:0.102, g:0.102, b:0.102};   // #1a1a1a
var C_MUTED  = {r:0.333, g:0.376, b:0.502};   // #556080
var C_LIGHT  = {r:0.878, g:0.894, b:0.941};   // #e0e4ef
var C_WHITE  = {r:1,     g:1,     b:1    };
var C_GREEN  = {r:0.133, g:0.545, b:0.133};
var C_RED    = {r:0.7,   g:0.1,   b:0.1  };

// ---------- LOAD PDF-LIB ----------
function loadPdfLib() {
  return new Promise(function(resolve, reject) {
    if (window.PDFLib) { resolve(window.PDFLib); return; }
    var s = document.createElement('script');
    s.src = 'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js';
    s.onload = function() { resolve(window.PDFLib); };
    s.onerror = function() { reject(new Error('Failed to load pdf-lib')); };
    document.head.appendChild(s);
  });
}

// ---------- LAYOUT ENGINE ----------
// Wraps text to fit within maxWidth, returns array of lines
function wrapText(text, font, fontSize, maxWidth) {
  if (!text) return [''];
  var words = String(text).split(' ');
  var lines = [];
  var current = '';
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var test = current ? current + ' ' + word : word;
    var w = font.widthOfTextAtSize(test, fontSize);
    if (w > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

// Draw wrapped text block, returns new Y position
function drawTextBlock(page, text, font, fontSize, color, x, y, maxWidth, lineHeight) {
  var lines = wrapText(text, font, fontSize, maxWidth);
  var lh = lineHeight || fontSize * 1.5;
  for (var i = 0; i < lines.length; i++) {
    if (y < PDF_MARGIN_B + 20) break;
    page.drawText(lines[i], { x: x, y: y, size: fontSize, font: font, color: PDFLib.rgb(color.r, color.g, color.b) });
    y -= lh;
  }
  return y;
}

// Draw a divider line
function drawDivider(page, y, color, thickness) {
  var c = color || C_LIGHT;
  var t = thickness || 0.5;
  page.drawLine({
    start: {x: PDF_MARGIN_L, y: y},
    end:   {x: PDF_PAGE_W - PDF_MARGIN_R, y: y},
    thickness: t,
    color: PDFLib.rgb(c.r, c.g, c.b)
  });
}

// Draw a filled rectangle
function drawRect(page, x, y, w, h, color) {
  page.drawRectangle({ x:x, y:y, width:w, height:h, color: PDFLib.rgb(color.r, color.g, color.b) });
}

// Draw page header band
function drawPageHeader(page, fonts, docTitle, subtitle) {
  // Navy top bar
  drawRect(page, 0, PDF_PAGE_H - 50, PDF_PAGE_W, 50, C_NAVY);
  // Title in header
  page.drawText('NY BizHer', {
    x: PDF_MARGIN_L, y: PDF_PAGE_H - 32,
    size: 14, font: fonts.bold, color: PDFLib.rgb(C_GOLD.r, C_GOLD.g, C_GOLD.b)
  });
  page.drawText('Free LLC Formation Wizard', {
    x: PDF_MARGIN_L, y: PDF_PAGE_H - 46,
    size: 8, font: fonts.regular, color: PDFLib.rgb(1,1,1)
  });
  // Doc title right side
  var titleW = fonts.bold.widthOfTextAtSize(docTitle, 10);
  page.drawText(docTitle, {
    x: PDF_PAGE_W - PDF_MARGIN_R - titleW, y: PDF_PAGE_H - 32,
    size: 10, font: fonts.bold, color: PDFLib.rgb(1,1,1)
  });
  if (subtitle) {
    var subW = fonts.regular.widthOfTextAtSize(subtitle, 8);
    page.drawText(subtitle, {
      x: PDF_PAGE_W - PDF_MARGIN_R - subW, y: PDF_PAGE_H - 46,
      size: 8, font: fonts.regular, color: PDFLib.rgb(0.8,0.8,0.8)
    });
  }
  // Gold accent line under header
  drawRect(page, 0, PDF_PAGE_H - 52, PDF_PAGE_W, 2, C_GOLD);
}

// Draw page footer
function drawPageFooter(page, fonts, pageNum, totalPages) {
  var today = new Date().toLocaleDateString('en-US', {year:'numeric',month:'long',day:'numeric'});
  drawRect(page, 0, 0, PDF_PAGE_W, 42, C_NAVY);
  page.drawText('Generated by NY BizHer (bizher.osintnet.uk) — ' + today, {
    x: PDF_MARGIN_L, y: 26,
    size: 7.5, font: fonts.regular, color: PDFLib.rgb(0.7,0.7,0.7)
  });
  page.drawText('NOT LEGAL ADVICE. Consult a licensed NY attorney before filing.', {
    x: PDF_MARGIN_L, y: 14,
    size: 7, font: fonts.regular, color: PDFLib.rgb(0.6,0.6,0.6)
  });
  var pgText = 'Page ' + pageNum + (totalPages ? ' of ' + totalPages : '');
  var pgW = fonts.regular.widthOfTextAtSize(pgText, 8);
  page.drawText(pgText, {
    x: PDF_PAGE_W - PDF_MARGIN_R - pgW, y: 20,
    size: 8, font: fonts.regular, color: PDFLib.rgb(0.7,0.7,0.7)
  });
}

// Draw a section header
function drawSectionHeader(page, fonts, title, y) {
  // Light background band
  drawRect(page, PDF_MARGIN_L - 10, y - 4, PDF_USABLE_W + 20, 22, {r:0.933,g:0.937,b:0.953});
  // Navy left accent
  drawRect(page, PDF_MARGIN_L - 10, y - 4, 4, 22, C_NAVY);
  page.drawText(title, {
    x: PDF_MARGIN_L + 4, y: y + 4,
    size: 11, font: fonts.bold, color: PDFLib.rgb(C_NAVY.r, C_NAVY.g, C_NAVY.b)
  });
  return y - 30;
}

// Draw a labeled field value row
function drawField(page, fonts, label, value, y) {
  page.drawText(label + ':', {
    x: PDF_MARGIN_L, y: y,
    size: 9, font: fonts.bold, color: PDFLib.rgb(C_MUTED.r, C_MUTED.g, C_MUTED.b)
  });
  var labelW = fonts.bold.widthOfTextAtSize(label + ':', 9) + 10;
  var valLines = wrapText(value || 'Not specified', fonts.regular, 11, PDF_USABLE_W - labelW);
  page.drawText(valLines[0] || '', {
    x: PDF_MARGIN_L + labelW, y: y,
    size: 11, font: fonts.regular, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b)
  });
  y -= 18;
  for (var i = 1; i < valLines.length; i++) {
    page.drawText(valLines[i], {
      x: PDF_MARGIN_L + labelW, y: y,
      size: 11, font: fonts.regular, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b)
    });
    y -= 18;
  }
  return y - 4;
}

// Draw info box (bordered notice)
function drawInfoBox(page, fonts, title, lines, y, borderColor) {
  var bc = borderColor || C_NAVY;
  var lineH = 16;
  var boxH = (title ? 20 : 0) + lines.length * lineH + 20;
  // Border rect
  page.drawRectangle({
    x: PDF_MARGIN_L, y: y - boxH, width: PDF_USABLE_W, height: boxH,
    borderColor: PDFLib.rgb(bc.r, bc.g, bc.b), borderWidth: 1,
    color: PDFLib.rgb(0.972, 0.976, 0.988)
  });
  // Left accent
  drawRect(page, PDF_MARGIN_L, y - boxH, 3, boxH, bc);
  var ty = y - 14;
  if (title) {
    page.drawText(title, {
      x: PDF_MARGIN_L + 14, y: ty,
      size: 10, font: fonts.bold, color: PDFLib.rgb(bc.r, bc.g, bc.b)
    });
    ty -= 18;
  }
  for (var i = 0; i < lines.length; i++) {
    page.drawText(lines[i], {
      x: PDF_MARGIN_L + 14, y: ty,
      size: 9, font: fonts.regular, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b)
    });
    ty -= lineH;
  }
  return y - boxH - 12;
}

// Signature block
function drawSignatureBlock(page, fonts, label, name, y) {
  drawDivider(page, y - 30, C_TEXT, 0.75);
  page.drawText(label, {
    x: PDF_MARGIN_L, y: y - 44,
    size: 10, font: fonts.bold, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b)
  });
  page.drawText('Printed Name: ' + (name || '________________________________'), {
    x: PDF_MARGIN_L, y: y - 60,
    size: 10, font: fonts.regular, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b)
  });
  page.drawText('Date: ___________________________', {
    x: PDF_PAGE_W - PDF_MARGIN_R - 200, y: y - 60,
    size: 10, font: fonts.regular, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b)
  });
  return y - 80;
}

// ============================================================
// DOCUMENT 1: ARTICLES OF ORGANIZATION
// ============================================================
async function generateArticlesPDF(pdfLib, fonts, d) {
  var doc = await pdfLib.PDFDocument.create();
  doc.setTitle('Articles of Organization — ' + d.name);
  doc.setAuthor('NY BizHer / Indica Independent Media');
  doc.setSubject('New York LLC Articles of Organization (DOS-1336-f equivalent)');
  doc.setCreator('NY BizHer (bizher.osintnet.uk)');
  doc.setCreationDate(new Date());

  // Embed fonts
  var timesRoman = await doc.embedFont(pdfLib.StandardFonts.TimesRoman);
  var timesBold  = await doc.embedFont(pdfLib.StandardFonts.TimesRomanBold);
  var helvetica  = await doc.embedFont(pdfLib.StandardFonts.Helvetica);
  var helBold    = await doc.embedFont(pdfLib.StandardFonts.HelveticaBold);
  var f = { regular: timesRoman, bold: timesBold, sans: helvetica, sansBold: helBold };

  // --- PAGE 1: COVER ---
  var pg = doc.addPage([PDF_PAGE_W, PDF_PAGE_H]);
  drawPageHeader(pg, {regular:f.sans, bold:f.sansBold}, 'Articles of Organization', 'Form DOS-1336-f Equivalent');

  var y = PDF_PAGE_H - 80;

  // Big title block
  drawRect(pg, PDF_MARGIN_L, y - 110, PDF_USABLE_W, 110, {r:0.949,g:0.953,b:0.969});
  drawRect(pg, PDF_MARGIN_L, y - 110, PDF_USABLE_W, 4, C_NAVY);
  drawRect(pg, PDF_MARGIN_L, y - 110, 4, 110, C_GOLD);

  pg.drawText('ARTICLES OF ORGANIZATION', {
    x: PDF_MARGIN_L + 20, y: y - 30,
    size: 22, font: f.bold, color: PDFLib.rgb(C_NAVY.r, C_NAVY.g, C_NAVY.b)
  });
  pg.drawText('DOMESTIC LIMITED LIABILITY COMPANY', {
    x: PDF_MARGIN_L + 20, y: y - 52,
    size: 13, font: f.bold, color: PDFLib.rgb(C_NAVY.r, C_NAVY.g, C_NAVY.b)
  });
  pg.drawText('NEW YORK STATE DEPARTMENT OF STATE', {
    x: PDF_MARGIN_L + 20, y: y - 70,
    size: 11, font: f.regular, color: PDFLib.rgb(C_MUTED.r, C_MUTED.g, C_MUTED.b)
  });
  pg.drawText('Pursuant to New York Limited Liability Company Law', {
    x: PDF_MARGIN_L + 20, y: y - 86,
    size: 10, font: f.regular, color: PDFLib.rgb(C_MUTED.r, C_MUTED.g, C_MUTED.b)
  });
  pg.drawText('Prepared by NY BizHer — Free Legal Tool', {
    x: PDF_MARGIN_L + 20, y: y - 102,
    size: 9, font: f.regular, color: PDFLib.rgb(C_GOLD.r, C_GOLD.g, C_GOLD.b)
  });

  y -= 130;

  // Section I — Name
  y = drawSectionHeader(pg, {regular:f.regular, bold:f.sansBold}, 'ARTICLE I — NAME', y);
  y -= 10;
  pg.drawText('The name of the Limited Liability Company is:', {
    x: PDF_MARGIN_L, y: y,
    size: 11, font: f.regular, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b)
  });
  y -= 22;
  pg.drawText(d.name, {
    x: PDF_MARGIN_L, y: y,
    size: 16, font: f.bold, color: PDFLib.rgb(C_NAVY.r, C_NAVY.g, C_NAVY.b)
  });
  y -= 28;

  // Section II — County
  y = drawSectionHeader(pg, {regular:f.regular, bold:f.sansBold}, 'ARTICLE II — COUNTY OF PRINCIPAL OFFICE', y);
  y -= 10;
  pg.drawText('The county in New York State in which the office of the Limited Liability Company', {
    x: PDF_MARGIN_L, y: y, size: 11, font: f.regular, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b)
  });
  y -= 16;
  pg.drawText('is located is:', {
    x: PDF_MARGIN_L, y: y, size: 11, font: f.regular, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b)
  });
  y -= 22;
  pg.drawText(d.county + ' County, New York', {
    x: PDF_MARGIN_L, y: y, size: 14, font: f.bold, color: PDFLib.rgb(C_NAVY.r, C_NAVY.g, C_NAVY.b)
  });
  y -= 28;

  // Section III — Registered Agent
  y = drawSectionHeader(pg, {regular:f.regular, bold:f.sansBold}, 'ARTICLE III — REGISTERED AGENT', y);
  y -= 10;
  var agentText = (d.agent === 'dos')
    ? 'The Secretary of State of New York is designated as agent of the Limited Liability Company upon whom process against it may be served. The Secretary of State shall mail a copy of any process against it served upon the Secretary of State to: ' + d.organizer + ', ' + d.address + '.'
    : 'The following is the registered agent upon whom process against the Company may be served: ' + d.organizer + ', located at ' + d.address + '.';
  y = drawTextBlock(pg, agentText, f.regular, 11, C_TEXT, PDF_MARGIN_L, y, PDF_USABLE_W, 17);
  y -= 16;

  // Section IV — Purpose
  y = drawSectionHeader(pg, {regular:f.regular, bold:f.sansBold}, 'ARTICLE IV — PURPOSE', y);
  y -= 10;
  y = drawTextBlock(pg, d.purpose, f.regular, 11, C_TEXT, PDF_MARGIN_L, y, PDF_USABLE_W, 17);
  y -= 16;

  // Section V — Organizer
  y = drawSectionHeader(pg, {regular:f.regular, bold:f.sansBold}, 'ARTICLE V — ORGANIZER', y);
  y -= 10;
  pg.drawText('The name and address of the organizer is:', {
    x: PDF_MARGIN_L, y: y, size: 11, font: f.regular, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b)
  });
  y -= 20;
  pg.drawText(d.organizer, {
    x: PDF_MARGIN_L, y: y, size: 12, font: f.bold, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b)
  });
  y -= 18;
  pg.drawText(d.address, {
    x: PDF_MARGIN_L, y: y, size: 11, font: f.regular, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b)
  });
  y -= 32;

  // IN WITNESS / Signature
  var today = new Date().toLocaleDateString('en-US', {year:'numeric',month:'long',day:'numeric'});
  pg.drawText('IN WITNESS WHEREOF, I have executed this document on ' + today + '.', {
    x: PDF_MARGIN_L, y: y, size: 11, font: f.regular, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b)
  });
  y -= 10;
  y = drawSignatureBlock(pg, {regular:f.regular, bold:f.bold}, 'Signature of Organizer: ________________________________', d.organizer, y);

  drawPageFooter(pg, {regular:f.sans, bold:f.sansBold}, 1, 2);

  // --- PAGE 2: FILING INSTRUCTIONS ---
  var pg2 = doc.addPage([PDF_PAGE_W, PDF_PAGE_H]);
  drawPageHeader(pg2, {regular:f.sans, bold:f.sansBold}, 'Filing Instructions', 'Articles of Organization');
  y = PDF_PAGE_H - 90;

  pg2.drawText('FILING INSTRUCTIONS', {
    x: PDF_MARGIN_L, y: y, size: 18, font: f.bold, color: PDFLib.rgb(C_NAVY.r, C_NAVY.g, C_NAVY.b)
  });
  y -= 8;
  drawDivider(pg2, y, C_GOLD, 2);
  y -= 20;

  y = drawInfoBox(pg2, {regular:f.sans, bold:f.sansBold}, 'FILING FEE: $200.00 (non-refundable)', [
    'Make check or money order payable to: "Department of State"',
    'Online payment: credit/debit card accepted at apps.dos.ny.gov'
  ], y, C_NAVY);

  y -= 8;
  y = drawSectionHeader(pg2, {regular:f.regular, bold:f.sansBold}, 'Option 1: File Online (FASTEST — Recommended)', y);
  y -= 10;
  y = drawTextBlock(pg2, '1. Go to: apps.dos.ny.gov', f.regular, 11, C_TEXT, PDF_MARGIN_L, y, PDF_USABLE_W, 17);
  y = drawTextBlock(pg2, '2. Create or log into your NY.gov ID account', f.regular, 11, C_TEXT, PDF_MARGIN_L, y, PDF_USABLE_W, 17);
  y = drawTextBlock(pg2, '3. Select "File Articles of Organization" and enter your information', f.regular, 11, C_TEXT, PDF_MARGIN_L, y, PDF_USABLE_W, 17);
  y = drawTextBlock(pg2, '4. Pay $200 filing fee online — same-day processing available', f.regular, 11, C_TEXT, PDF_MARGIN_L, y, PDF_USABLE_W, 17);
  y = drawTextBlock(pg2, '5. SAVE your stamped filing receipt — required for MWBE certification', f.bold, 11, C_NAVY, PDF_MARGIN_L, y, PDF_USABLE_W, 17);
  y -= 16;

  y = drawSectionHeader(pg2, {regular:f.regular, bold:f.sansBold}, 'Option 2: File By Mail', y);
  y -= 10;
  y = drawTextBlock(pg2, 'Mail this document with a check for $200 to:', f.regular, 11, C_TEXT, PDF_MARGIN_L, y, PDF_USABLE_W, 17);
  y -= 6;
  drawRect(pg2, PDF_MARGIN_L, y - 56, PDF_USABLE_W / 2, 60, {r:0.949,g:0.953,b:0.969});
  pg2.drawText('New York Department of State', { x: PDF_MARGIN_L + 12, y: y - 14, size: 11, font: f.bold, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b) });
  pg2.drawText('Division of Corporations', { x: PDF_MARGIN_L + 12, y: y - 28, size: 11, font: f.regular, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b) });
  pg2.drawText('One Commerce Plaza, 99 Washington Avenue', { x: PDF_MARGIN_L + 12, y: y - 42, size: 11, font: f.regular, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b) });
  pg2.drawText('Albany, New York 12231', { x: PDF_MARGIN_L + 12, y: y - 56, size: 11, font: f.regular, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b) });
  y -= 76;

  y = drawInfoBox(pg2, {regular:f.sans, bold:f.sansBold}, 'CRITICAL: 120-Day Publication Deadline', [
    'Your 120-day publication clock starts on your FILING DATE.',
    'You MUST publish in 2 newspapers for 6 weeks within 120 days.',
    'Failure to publish results in SUSPENSION of your LLC.',
    'See your Publication Notice document for newspaper instructions.'
  ], y, C_RED);

  drawPageFooter(pg2, {regular:f.sans, bold:f.sansBold}, 2, 2);

  return doc;
}

// ============================================================
// DOCUMENT 2: PUBLICATION NOTICE
// ============================================================
async function generatePublicationPDF(pdfLib, fonts, d) {
  var doc = await pdfLib.PDFDocument.create();
  doc.setTitle('Publication Notice — ' + d.name);
  doc.setSubject('NY LLC Publication Requirement (LLC Law Section 206)');
  doc.setCreator('NY BizHer (bizher.osintnet.uk)');
  doc.setCreationDate(new Date());

  var timesRoman = await doc.embedFont(pdfLib.StandardFonts.TimesRoman);
  var timesBold  = await doc.embedFont(pdfLib.StandardFonts.TimesRomanBold);
  var helvetica  = await doc.embedFont(pdfLib.StandardFonts.Helvetica);
  var helBold    = await doc.embedFont(pdfLib.StandardFonts.HelveticaBold);
  var f = { regular: timesRoman, bold: timesBold, sans: helvetica, sansBold: helBold };

  var pg = doc.addPage([PDF_PAGE_W, PDF_PAGE_H]);
  drawPageHeader(pg, {regular:f.sans, bold:f.sansBold}, 'Publication Notice', 'LLC Law § 206');

  var y = PDF_PAGE_H - 90;

  pg.drawText('PUBLICATION NOTICE', {
    x: PDF_MARGIN_L, y: y, size: 18, font: f.bold, color: PDFLib.rgb(C_NAVY.r, C_NAVY.g, C_NAVY.b)
  });
  y -= 8;
  drawDivider(pg, y, C_GOLD, 2);
  y -= 20;

  pg.drawText('New York Limited Liability Company Law, Section 206 — Required Publication', {
    x: PDF_MARGIN_L, y: y, size: 10, font: f.regular, color: PDFLib.rgb(C_MUTED.r, C_MUTED.g, C_MUTED.b)
  });
  y -= 28;

  // The legal notice text box
  y = drawSectionHeader(pg, {regular:f.regular, bold:f.sansBold}, 'OFFICIAL NOTICE TEXT — Submit this EXACT text to both newspapers', y);
  y -= 10;

  // Notice box
  var noticeLines = [
    'NOTICE OF FORMATION OF LIMITED LIABILITY COMPANY',
    '',
    'Notice of Formation of ' + d.name + ', a Limited Liability Company.',
    'Articles of Organization were filed with the Secretary of State',
    'of New York (SSNY) on [INSERT YOUR ACTUAL FILING DATE].',
    'Office location: ' + d.county + ' County.',
    'SSNY has been designated as agent of the LLC upon whom process',
    'against it may be served. SSNY shall mail a copy of any process',
    'to: ' + d.organizer + ', ' + d.address + '.',
    'Purpose: ' + d.purpose
  ];
  var noteH = noticeLines.length * 16 + 24;
  // pdf-lib ready
  pg.drawRectangle({
    x: PDF_MARGIN_L, y: y - noteH, width: PDF_USABLE_W, height: noteH,
    color: PDFLib.rgb(0.972, 0.976, 0.988),
    borderColor: PDFLib.rgb(C_NAVY.r, C_NAVY.g, C_NAVY.b), borderWidth: 1.5
  });
  drawRect(pg, PDF_MARGIN_L, y - noteH, 4, noteH, C_GOLD);
  var ny = y - 14;
  for (var i = 0; i < noticeLines.length; i++) {
    pg.drawText(noticeLines[i], {
      x: PDF_MARGIN_L + 14, y: ny,
      size: noticeLines[i] === '' ? 6 : (i === 0 ? 11 : 10),
      font: i === 0 ? f.bold : f.regular,
      color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b)
    });
    ny -= (noticeLines[i] === '' ? 8 : 16);
  }
  y -= noteH + 16;

  y = drawInfoBox(pg, {regular:f.sans, bold:f.sansBold}, 'Where to publish — contact your County Clerk', [
    'The County Clerk of ' + d.county + ' County designates 2 newspapers for publication.',
    'Call: Look up "' + d.county + ' County Clerk" at dos.ny.gov for the current phone/address.',
    'Ask: "Which newspapers are designated for LLC publication notices in ' + d.county + ' County?"',
    'Cost: Varies by county — from ~$40 (rural) to $2,000+ (Manhattan/NYC counties).',
    'Timeline: You must publish for 6 CONSECUTIVE WEEKS in BOTH newspapers.',
    'Deadline: Within 120 days of your Articles of Organization filing date.'
  ], y, C_NAVY);

  y -= 8;
  y = drawInfoBox(pg, {regular:f.sans, bold:f.sansBold}, 'After Publishing — Certificate of Publication', [
    '1. Each newspaper will send you an Affidavit of Publication after your 6-week run.',
    '2. File both affidavits + Certificate of Publication (DOS-1706) with DOS.',
    '3. Filing fee: $50 payable to "Department of State".',
    '4. File within 120 days of your Articles of Organization filing date.'
  ], y, C_GREEN);

  drawPageFooter(pg, {regular:f.sans, bold:f.sansBold}, 1, 1);

  return doc;
}

// ============================================================
// DOCUMENT 3: OPERATING AGREEMENT
// ============================================================
async function generateOperatingAgreementPDF(pdfLib, fonts, d) {
  var doc = await pdfLib.PDFDocument.create();
  doc.setTitle('Operating Agreement — ' + d.name);
  doc.setSubject('New York LLC Operating Agreement');
  doc.setCreator('NY BizHer (bizher.osintnet.uk)');
  doc.setCreationDate(new Date());

  var timesRoman = await doc.embedFont(pdfLib.StandardFonts.TimesRoman);
  var timesBold  = await doc.embedFont(pdfLib.StandardFonts.TimesRomanBold);
  var helvetica  = await doc.embedFont(pdfLib.StandardFonts.Helvetica);
  var helBold    = await doc.embedFont(pdfLib.StandardFonts.HelveticaBold);
  var f = { regular: timesRoman, bold: timesBold, sans: helvetica, sansBold: helBold };

  var today = new Date().toLocaleDateString('en-US', {year:'numeric',month:'long',day:'numeric'});
  var mgmtType = (d.mgmt === 'manager-managed') ? 'Manager-Managed' : 'Member-Managed';

  // --- PAGE 1 ---
  var pg = doc.addPage([PDF_PAGE_W, PDF_PAGE_H]);
  drawPageHeader(pg, {regular:f.sans, bold:f.sansBold}, 'Operating Agreement', d.name);

  var y = PDF_PAGE_H - 90;

  // Title block
  pg.drawText('OPERATING AGREEMENT', {
    x: PDF_MARGIN_L, y: y, size: 20, font: f.bold, color: PDFLib.rgb(C_NAVY.r, C_NAVY.g, C_NAVY.b)
  });
  y -= 8;
  drawDivider(pg, y, C_GOLD, 2);
  y -= 16;
  pg.drawText('OF', { x: PDF_MARGIN_L, y: y, size: 13, font: f.regular, color: PDFLib.rgb(C_MUTED.r, C_MUTED.g, C_MUTED.b) });
  y -= 20;
  pg.drawText(d.name, { x: PDF_MARGIN_L, y: y, size: 16, font: f.bold, color: PDFLib.rgb(C_NAVY.r, C_NAVY.g, C_NAVY.b) });
  y -= 20;
  pg.drawText('A ' + mgmtType + ' New York Limited Liability Company', {
    x: PDF_MARGIN_L, y: y, size: 11, font: f.regular, color: PDFLib.rgb(C_MUTED.r, C_MUTED.g, C_MUTED.b)
  });
  y -= 32;

  pg.drawText('This Operating Agreement ("Agreement") is entered into as of ' + today + ', by and', {
    x: PDF_MARGIN_L, y: y, size: 11, font: f.regular, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b)
  });
  y -= 16;
  pg.drawText('among the members listed below ("Members") of ' + d.name + ' (the "Company"),', {
    x: PDF_MARGIN_L, y: y, size: 11, font: f.regular, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b)
  });
  y -= 16;
  pg.drawText('a limited liability company organized under the New York Limited Liability Company Law.', {
    x: PDF_MARGIN_L, y: y, size: 11, font: f.regular, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b)
  });
  y -= 28;

  // Section 1 — Formation
  y = drawSectionHeader(pg, {regular:f.regular, bold:f.sansBold}, 'ARTICLE 1 — FORMATION AND TERM', y);
  y -= 10;
  var art1 = '1.1 The Company was formed pursuant to the New York Limited Liability Company Law by filing Articles of Organization with the New York Department of State. 1.2 The term of the Company shall be perpetual unless dissolved in accordance with this Agreement or applicable law.';
  y = drawTextBlock(pg, art1, f.regular, 11, C_TEXT, PDF_MARGIN_L, y, PDF_USABLE_W, 17);
  y -= 16;

  // Section 2 — Principal Office
  y = drawSectionHeader(pg, {regular:f.regular, bold:f.sansBold}, 'ARTICLE 2 — PRINCIPAL OFFICE AND REGISTERED AGENT', y);
  y -= 10;
  y = drawField(pg, {regular:f.regular, bold:f.bold}, 'Principal Office', d.address, y);
  y = drawField(pg, {regular:f.regular, bold:f.bold}, 'County', d.county + ' County, New York', y);
  y = drawField(pg, {regular:f.regular, bold:f.bold}, 'Registered Agent', d.agent === 'dos' ? 'New York Secretary of State' : d.organizer, y);
  y -= 16;

  // Section 3 — Members
  y = drawSectionHeader(pg, {regular:f.regular, bold:f.sansBold}, 'ARTICLE 3 — MEMBERS AND OWNERSHIP', y);
  y -= 10;
  // Parse members string
  var membersList = d.members ? d.members.split(',') : [d.organizer + ' (100%)'];
  for (var i = 0; i < membersList.length; i++) {
    var mline = membersList[i].trim();
    if (mline) {
      pg.drawText(String.fromCharCode(8226) + ' ' + mline, {
        x: PDF_MARGIN_L + 10, y: y, size: 11, font: f.regular, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b)
      });
      y -= 18;
    }
  }
  y -= 10;
  y = drawTextBlock(pg, '3.2 Each Member\'s rights and obligations with respect to the Company shall be as set forth in this Agreement. No Member shall have the right to assign, transfer, or encumber their membership interest without the prior written consent of a majority of the other Members.', f.regular, 11, C_TEXT, PDF_MARGIN_L, y, PDF_USABLE_W, 17);
  y -= 16;

  // Section 4 — Management
  y = drawSectionHeader(pg, {regular:f.regular, bold:f.sansBold}, 'ARTICLE 4 — MANAGEMENT', y);
  y -= 10;
  if (d.mgmt === 'manager-managed') {
    y = drawTextBlock(pg, '4.1 The business and affairs of the Company shall be managed by one or more Managers designated by the Members. The Members shall designate one or more managers to manage the affairs of the Company. A Manager need not be a Member. The Managers shall have full authority to act on behalf of the Company in the ordinary course of business.', f.regular, 11, C_TEXT, PDF_MARGIN_L, y, PDF_USABLE_W, 17);
  } else {
    y = drawTextBlock(pg, '4.1 The Company shall be Member-Managed. Each Member shall have full authority to act on behalf of the Company in the ordinary course of business. Major decisions requiring unanimous consent include: amendment of this Agreement, admission of new Members, dissolution, sale of substantially all assets, and incurrence of debt exceeding $10,000.', f.regular, 11, C_TEXT, PDF_MARGIN_L, y, PDF_USABLE_W, 17);
  }
  y -= 8;

  drawPageFooter(pg, {regular:f.sans, bold:f.sansBold}, 1, 3);

  // --- PAGE 2 ---
  var pg2 = doc.addPage([PDF_PAGE_W, PDF_PAGE_H]);
  drawPageHeader(pg2, {regular:f.sans, bold:f.sansBold}, 'Operating Agreement', d.name + ' — Page 2');
  y = PDF_PAGE_H - 90;

  // Section 5 — Capital and Profits
  y = drawSectionHeader(pg2, {regular:f.regular, bold:f.sansBold}, 'ARTICLE 5 — CAPITAL CONTRIBUTIONS AND PROFIT DISTRIBUTION', y);
  y -= 10;
  y = drawTextBlock(pg2, '5.1 Members may make capital contributions as agreed upon in writing. No Member shall be required to make any additional capital contribution. 5.2 Net profits and losses of the Company shall be allocated among Members in proportion to their respective membership interests. Distributions shall be made at such times and in such amounts as determined by the Members. No distribution shall be made if it would render the Company unable to pay its debts as they become due.', f.regular, 11, C_TEXT, PDF_MARGIN_L, y, PDF_USABLE_W, 17);
  y -= 16;

  // Section 6 — Books and Records
  y = drawSectionHeader(pg2, {regular:f.regular, bold:f.sansBold}, 'ARTICLE 6 — BOOKS, RECORDS AND FISCAL YEAR', y);
  y -= 10;
  y = drawField(pg2, {regular:f.regular, bold:f.bold}, 'Fiscal Year End', d.fiscal || 'December 31', y);
  y = drawTextBlock(pg2, '6.2 The Company shall maintain at its principal office: (a) a current list of the full name and business address of each Member; (b) a copy of the Articles of Organization and all amendments; (c) copies of the Company\'s federal, state, and local income tax returns for the 3 most recent years; (d) a copy of this Operating Agreement including all amendments. Each Member shall have the right to inspect and copy the Company\'s books and records upon reasonable notice.', f.regular, 11, C_TEXT, PDF_MARGIN_L, y, PDF_USABLE_W, 17);
  y -= 16;

  // Section 7 — Taxes
  y = drawSectionHeader(pg2, {regular:f.regular, bold:f.sansBold}, 'ARTICLE 7 — TAX MATTERS', y);
  y -= 10;
  y = drawTextBlock(pg2, '7.1 The Company shall be treated as a partnership for federal and state income tax purposes (or as a disregarded entity if there is a single Member), unless the Members elect otherwise. Each Member shall report their allocable share of Company income, gain, loss, deduction, and credit on their individual tax return. The Company shall file all required federal, state, and local tax returns and information returns.', f.regular, 11, C_TEXT, PDF_MARGIN_L, y, PDF_USABLE_W, 17);
  y -= 16;

  // Section 8 — Dissolution
  y = drawSectionHeader(pg2, {regular:f.regular, bold:f.sansBold}, 'ARTICLE 8 — DISSOLUTION AND WINDING UP', y);
  y -= 10;
  y = drawTextBlock(pg2, '8.1 The Company shall be dissolved upon: (a) the written consent of all Members; (b) the occurrence of any event that makes it unlawful for the Company to continue its business; (c) entry of a judicial dissolution decree. 8.2 Upon dissolution, the assets shall be applied in the following order: (i) payment of Company debts and liabilities; (ii) payment to Members in respect of their capital contributions; (iii) distribution of remaining assets to Members in proportion to their membership interests.', f.regular, 11, C_TEXT, PDF_MARGIN_L, y, PDF_USABLE_W, 17);
  y -= 16;

  // Section 9 — Miscellaneous
  y = drawSectionHeader(pg2, {regular:f.regular, bold:f.sansBold}, 'ARTICLE 9 — GENERAL PROVISIONS', y);
  y -= 10;
  y = drawTextBlock(pg2, '9.1 GOVERNING LAW: This Agreement shall be governed by the laws of the State of New York. 9.2 ENTIRE AGREEMENT: This Agreement constitutes the entire agreement among the Members with respect to the subject matter and supersedes all prior agreements. 9.3 AMENDMENTS: This Agreement may be amended only by the written consent of all Members. 9.4 SEVERABILITY: If any provision is unenforceable, the remaining provisions shall remain in full force. 9.5 COUNTERPARTS: This Agreement may be executed in counterparts.', f.regular, 11, C_TEXT, PDF_MARGIN_L, y, PDF_USABLE_W, 17);
  y -= 20;

  drawPageFooter(pg2, {regular:f.sans, bold:f.sansBold}, 2, 3);

  // --- PAGE 3: SIGNATURE PAGE ---
  var pg3 = doc.addPage([PDF_PAGE_W, PDF_PAGE_H]);
  drawPageHeader(pg3, {regular:f.sans, bold:f.sansBold}, 'Operating Agreement', 'Signature Page');
  y = PDF_PAGE_H - 90;

  pg3.drawText('SIGNATURE PAGE', {
    x: PDF_MARGIN_L, y: y, size: 18, font: f.bold, color: PDFLib.rgb(C_NAVY.r, C_NAVY.g, C_NAVY.b)
  });
  y -= 8;
  drawDivider(pg3, y, C_GOLD, 2);
  y -= 20;

  pg3.drawText('IN WITNESS WHEREOF, the undersigned Members have executed this Operating Agreement', {
    x: PDF_MARGIN_L, y: y, size: 11, font: f.regular, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b)
  });
  y -= 16;
  pg3.drawText('as of the date first written above.', {
    x: PDF_MARGIN_L, y: y, size: 11, font: f.regular, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b)
  });
  y -= 32;

  // Parse members for signatures
  var sigMembers = d.members ? d.members.split(',') : [d.organizer];
  for (var s = 0; s < sigMembers.length && s < 4; s++) {
    var sname = sigMembers[s].replace(/\([^)]*\)/g, '').trim() || 'Member ' + (s+1);
    y = drawSignatureBlock(pg3, {regular:f.regular, bold:f.bold}, 'Member Signature: ________________________________', sname, y);
    y -= 10;
  }

  y -= 20;
  y = drawInfoBox(pg3, {regular:f.sans, bold:f.sansBold}, 'IMPORTANT NOTES', [
    'This Operating Agreement does NOT need to be filed with New York State.',
    'Keep the original signed document in your business records permanently.',
    'Provide copies to your bank when opening a business checking account.',
    'Review and update this agreement when members change or major decisions are made.',
    'Consider having an NY-licensed attorney review this agreement for your specific situation.'
  ], y, C_NAVY);

  drawPageFooter(pg3, {regular:f.sans, bold:f.sansBold}, 3, 3);

  return doc;
}

// ============================================================
// DOCUMENT 4: WBE/MWBE CHECKLIST
// ============================================================
async function generateWBEChecklistPDF(pdfLib, fonts, d) {
  var doc = await pdfLib.PDFDocument.create();
  doc.setTitle('WBE/MWBE Certification Checklist — ' + d.name);
  doc.setSubject('New York State WBE/MWBE Application Guide');
  doc.setCreator('NY BizHer (bizher.osintnet.uk)');
  doc.setCreationDate(new Date());

  var timesRoman = await doc.embedFont(pdfLib.StandardFonts.TimesRoman);
  var timesBold  = await doc.embedFont(pdfLib.StandardFonts.TimesRomanBold);
  var helvetica  = await doc.embedFont(pdfLib.StandardFonts.Helvetica);
  var helBold    = await doc.embedFont(pdfLib.StandardFonts.HelveticaBold);
  var f = { regular: timesRoman, bold: timesBold, sans: helvetica, sansBold: helBold };

  var pg = doc.addPage([PDF_PAGE_W, PDF_PAGE_H]);
  drawPageHeader(pg, {regular:f.sans, bold:f.sansBold}, 'WBE/MWBE Certification', 'Empire State Development');

  var y = PDF_PAGE_H - 90;

  pg.drawText('WBE / MWBE CERTIFICATION GUIDE', {
    x: PDF_MARGIN_L, y: y, size: 18, font: f.bold, color: PDFLib.rgb(C_NAVY.r, C_NAVY.g, C_NAVY.b)
  });
  y -= 8;
  drawDivider(pg, y, C_GOLD, 2);
  y -= 14;
  pg.drawText('New York State Empire State Development — Free Certification Program', {
    x: PDF_MARGIN_L, y: y, size: 10, font: f.regular, color: PDFLib.rgb(C_MUTED.r, C_MUTED.g, C_MUTED.b)
  });
  y -= 24;

  y = drawInfoBox(pg, {regular:f.sans, bold:f.sansBold}, 'What This Certification Gets You (FREE to apply)', [
    'Listed in NY State MWBE Directory — seen by ALL state agencies and contractors',
    'Access to billions in NYS procurement set-aside contracts',
    'Priority consideration for state agency contracts, grants, and loans',
    'Business development resources through Empire State Development',
    'NYC M/WBE certification accepted in parallel (separate application)'
  ], y, C_GREEN);

  y -= 8;
  y = drawSectionHeader(pg, {regular:f.regular, bold:f.sansBold}, 'ELIGIBILITY REQUIREMENTS (Must meet ALL)', y);
  y -= 10;
  var reqs = [
    'Business is at least 51% owned, operated, and controlled by women and/or minorities',
    'Owner(s) must be U.S. citizens or permanent resident aliens',
    'Business must be legally organized in New York State (your LLC qualifies)',
    'Owner must have day-to-day management and operational control',
    'Business must be "small" per federal SBA size standards for your NAICS code',
    'Owner must demonstrate expertise in their field'
  ];
  for (var r = 0; r < reqs.length; r++) {
    pg.drawRectangle({ x: PDF_MARGIN_L + 2, y: y - 2, width: 9, height: 9, borderColor: PDFLib.rgb(C_NAVY.r, C_NAVY.g, C_NAVY.b), borderWidth: 1, color: PDFLib.rgb(1,1,1) });
    pg.drawText(reqs[r], { x: PDF_MARGIN_L + 18, y: y, size: 10, font: f.regular, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b) });
    y -= 18;
  }
  y -= 10;

  y = drawSectionHeader(pg, {regular:f.regular, bold:f.sansBold}, 'REQUIRED DOCUMENTS — Prepare These Now', y);
  y -= 10;

  var docs_list = [
    ['Articles of Organization (stamped/filed copy)', 'From your DOS filing receipt'],
    ['Certificate of Publication (when complete)', 'Filed after newspaper publication'],
    ['EIN Confirmation Letter (IRS CP 575)', 'From IRS after EIN application'],
    ['Business bank account statements (3 months)', 'Shows active business operations'],
    ['Federal/state tax returns (3 years if applicable)', 'Or "N/A if newly formed"'],
    ['Operating Agreement (signed copy)', 'Proves ownership structure'],
    ['Owner\'s personal tax returns (3 years)', 'Demonstrates individual control'],
    ['Photo ID for each 51%+ owner', 'Passport or driver\'s license'],
    ['Proof of business address', 'Utility bill, lease, or deed'],
    ['Resume/CV for each qualifying owner', 'Shows expertise in the field']
  ];

  for (var di = 0; di < docs_list.length; di++) {
    pg.drawRectangle({ x: PDF_MARGIN_L + 2, y: y - 2, width: 9, height: 9, borderColor: PDFLib.rgb(C_NAVY.r, C_NAVY.g, C_NAVY.b), borderWidth: 1, color: PDFLib.rgb(1,1,1) });
    pg.drawText(docs_list[di][0], { x: PDF_MARGIN_L + 18, y: y, size: 10, font: f.bold, color: PDFLib.rgb(C_TEXT.r, C_TEXT.g, C_TEXT.b) });
    var noteW = f.regular.widthOfTextAtSize('(' + docs_list[di][1] + ')', 9);
    pg.drawText('(' + docs_list[di][1] + ')', { x: PDF_PAGE_W - PDF_MARGIN_R - noteW, y: y, size: 9, font: f.regular, color: PDFLib.rgb(C_MUTED.r, C_MUTED.g, C_MUTED.b) });
    y -= 18;
  }
  y -= 8;

  y = drawInfoBox(pg, {regular:f.sans, bold:f.sansBold}, 'HOW TO APPLY', [
    'Portal: ny.newcertification.com (create a free account)',
    'All documents upload as PDF directly in the portal',
    'Processing time: 60-90 days after complete application',
    'NYC M/WBE parallel application: nyc.gov/sbs (separate process, also free)',
    'Technical help: MWBEcertification@esdny.gov'
  ], y, C_NAVY);

  drawPageFooter(pg, {regular:f.sans, bold:f.sansBold}, 1, 1);

  return doc;
}

// ============================================================
// DOCUMENT 5: COMPLETE FORMATION PACKAGE (merged)
// ============================================================
async function generateFullPackagePDF(pdfLib, f, d) {
  // Generate each doc separately, then merge
  var docs = await Promise.all([
    generateArticlesPDF(pdfLib, f, d),
    generatePublicationPDF(pdfLib, f, d),
    generateOperatingAgreementPDF(pdfLib, f, d),
    generateWBEChecklistPDF(pdfLib, f, d)
  ]);

  var merged = await pdfLib.PDFDocument.create();
  merged.setTitle('NY LLC Complete Formation Package — ' + d.name);
  merged.setSubject('Articles of Organization + Publication Notice + Operating Agreement + WBE/MWBE Guide');
  merged.setAuthor('NY BizHer / Indica Independent Media');
  merged.setCreator('NY BizHer (bizher.osintnet.uk)');
  merged.setCreationDate(new Date());

  // Add cover page
  var helvetica = await merged.embedFont(pdfLib.StandardFonts.Helvetica);
  var helBold   = await merged.embedFont(pdfLib.StandardFonts.HelveticaBold);
  var timesRoman = await merged.embedFont(pdfLib.StandardFonts.TimesRoman);
  var timesBold  = await merged.embedFont(pdfLib.StandardFonts.TimesRomanBold);
  var fc = { regular: timesRoman, bold: timesBold, sans: helvetica, sansBold: helBold };

  var cover = merged.addPage([PDF_PAGE_W, PDF_PAGE_H]);
  // Full cover background
  drawRect(cover, 0, 0, PDF_PAGE_W, PDF_PAGE_H, C_NAVY);
  // Gold accent bar top
  drawRect(cover, 0, PDF_PAGE_H - 8, PDF_PAGE_W, 8, C_GOLD);
  // Gold accent bar bottom
  drawRect(cover, 0, 0, PDF_PAGE_W, 8, C_GOLD);

  // Logo area
  var cy = PDF_PAGE_H - 120;
  cover.drawText('NY', {
    x: PDF_MARGIN_L + 10, y: cy,
    size: 72, font: fc.bold, color: PDFLib.rgb(C_GOLD.r, C_GOLD.g, C_GOLD.b)
  });
  cover.drawText('BizHer', {
    x: PDF_MARGIN_L + 100, y: cy,
    size: 72, font: fc.bold, color: PDFLib.rgb(1, 1, 1)
  });
  cy -= 32;
  cover.drawText('Free LLC Formation Wizard for Women Entrepreneurs', {
    x: PDF_MARGIN_L + 10, y: cy,
    size: 14, font: fc.sans, color: PDFLib.rgb(0.7, 0.75, 0.85)
  });

  // Divider
  cy -= 40;
  drawRect(cover, PDF_MARGIN_L, cy, PDF_USABLE_W, 2, C_GOLD);
  cy -= 40;

  // Main title
  cover.drawText('COMPLETE FORMATION PACKAGE', {
    x: PDF_MARGIN_L, y: cy, size: 28, font: fc.bold, color: PDFLib.rgb(1,1,1)
  });
  cy -= 36;
  cover.drawText(d.name, {
    x: PDF_MARGIN_L, y: cy, size: 20, font: fc.bold, color: PDFLib.rgb(C_GOLD.r, C_GOLD.g, C_GOLD.b)
  });
  cy -= 26;
  cover.drawText(d.county + ' County, New York', {
    x: PDF_MARGIN_L, y: cy, size: 14, font: fc.sans, color: PDFLib.rgb(0.7,0.75,0.85)
  });
  cy -= 50;

  // Document list
  var docNames = [
    '01  Articles of Organization (DOS-1336-f Equivalent)',
    '02  Publication Notice — LLC Law Section 206',
    '03  Operating Agreement (' + (d.mgmt === 'manager-managed' ? 'Manager' : 'Member') + '-Managed)',
    '04  WBE/MWBE Certification Guide'
  ];
  for (var dn = 0; dn < docNames.length; dn++) {
    drawRect(cover, PDF_MARGIN_L, cy - 22, PDF_USABLE_W, 28, {r:0.09,g:0.14,b:0.28});
    drawRect(cover, PDF_MARGIN_L, cy - 22, 4, 28, C_GOLD);
    cover.drawText(docNames[dn], {
      x: PDF_MARGIN_L + 16, y: cy - 10,
      size: 12, font: fc.sansBold, color: PDFLib.rgb(1,1,1)
    });
    cy -= 38;
  }

  cy -= 20;
  var today = new Date().toLocaleDateString('en-US', {year:'numeric',month:'long',day:'numeric'});
  cover.drawText('Generated: ' + today, {
    x: PDF_MARGIN_L, y: cy, size: 11, font: fc.sans, color: PDFLib.rgb(0.6,0.65,0.75)
  });
  cy -= 18;
  cover.drawText('bizher.osintnet.uk — A free public tool by Indica Independent Media', {
    x: PDF_MARGIN_L, y: cy, size: 10, font: fc.sans, color: PDFLib.rgb(0.5,0.55,0.65)
  });
  cy -= 50;

  // Disclaimer
  cover.drawText('LEGAL DISCLAIMER', {
    x: PDF_MARGIN_L, y: cy, size: 9, font: fc.sansBold, color: PDFLib.rgb(0.6,0.65,0.75)
  });
  cy -= 14;
  var disclaimer = 'This package provides general legal information only, not legal advice. No attorney-client relationship is formed. Laws change — always verify current requirements with the New York Department of State (dos.ny.gov) and consult a licensed New York attorney before filing any legal documents.';
  cy = drawTextBlock(cover, disclaimer, fc.sans, 8.5, {r:0.5,g:0.55,b:0.65}, PDF_MARGIN_L, cy, PDF_USABLE_W, 14);

  // Merge all pages
  for (var mi = 0; mi < docs.length; mi++) {
    var srcPages = await merged.copyPages(docs[mi], docs[mi].getPageIndices());
    for (var spi = 0; spi < srcPages.length; spi++) {
      merged.addPage(srcPages[spi]);
    }
  }

  return merged;
}

// ============================================================
// TRIGGER: Download a specific PDF
// ============================================================
async function downloadPDF(type) {
  var btn = document.getElementById('pdf-btn-' + type);
  var origText = btn ? btn.textContent : '';
  if (btn) { btn.textContent = 'Generating...'; btn.disabled = true; }

  try {
    var pdfLib = await loadPdfLib();
    var d = getFD();
    var doc;
    var filename;

    var safeN = d.name.replace(/[^a-zA-Z0-9_\-]/g, '_');

    if (type === 'articles') {
      doc = await generateArticlesPDF(pdfLib, null, d);
      filename = safeN + '_Articles_of_Organization.pdf';
    } else if (type === 'publication') {
      doc = await generatePublicationPDF(pdfLib, null, d);
      filename = safeN + '_Publication_Notice.pdf';
    } else if (type === 'operating') {
      doc = await generateOperatingAgreementPDF(pdfLib, null, d);
      filename = safeN + '_Operating_Agreement.pdf';
    } else if (type === 'wbe') {
      doc = await generateWBEChecklistPDF(pdfLib, null, d);
      filename = safeN + '_WBE_MWBE_Checklist.pdf';
    } else if (type === 'package') {
      doc = await generateFullPackagePDF(pdfLib, null, d);
      filename = safeN + '_Complete_Formation_Package.pdf';
    }

    var pdfBytes = await doc.save();
    var blob = new Blob([pdfBytes], { type: 'application/pdf' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function() { URL.revokeObjectURL(url); document.body.removeChild(a); }, 1000);

    if (btn) { btn.textContent = 'Downloaded!'; setTimeout(function() { btn.textContent = origText; btn.disabled = false; }, 2500); }
  } catch (err) {
    console.error('PDF error:', err);
    alert('PDF generation error: ' + err.message + '\\nPlease check your internet connection (pdf-lib loads from CDN).');
    if (btn) { btn.textContent = origText; btn.disabled = false; }
  }
}

</script>
</body>
</html>`;
}
