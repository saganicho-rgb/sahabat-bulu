// KONFIGURASI APLIKASI
const IS_PREVIEW = false; // Ubah menjadi false SAAT DEPLOY agar mode preview & data dummy hilang dan terhubung 100% ke Supabase
const SUPABASE_URL = "https://pauqurnxgpsdhhchvwgc.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_kls_FEKuYd-2vJjWGtcUkA_2ysS36xx";
// import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
// Root aplikasi dibuat lewat JS & ditempel ke <body> (kebal terhadap editor Blogger, id tidak bentrok dengan template)
const root = document.createElement("div"); root.id = "kc";
root.innerHTML = '<div class="bg"></div><div id="pv" class="pv" hidden>Mode Preview Aktif</div><div class="glass" id="nav"></div><main id="main"></main><div id="ov"></div>';
document.body.appendChild(root);
const mf = document.createElement("link"); mf.rel = "manifest";
mf.href = "data:application/manifest+json," + encodeURIComponent(JSON.stringify({ name: "Sahabat Bulu", short_name: "Sahabat Bulu", start_url: ".", display: "standalone", background_color: "#ffffff", theme_color: "#1f5c4a", icons: [{ src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='22' fill='#1f5c4a'/><text x='50' y='72' font-size='62' text-anchor='middle'>🐱</text></svg>", sizes: "512x512", type: "image/svg+xml" }] }));
document.head.appendChild(mf);
// CSS disuntikkan lewat JS agar tidak rusak oleh editor Blogger
const st=document.createElement("style");st.textContent="#kc{position:fixed;inset:0;z-index:999999;background:#fff;font-family:'Segoe UI',system-ui,sans-serif;color:#1d2b27;overflow:hidden} #kc *{box-sizing:border-box} #kc .bg{position:absolute;inset:0;background:radial-gradient(circle at 12% 8%,#d9f0e6 0,transparent 38%),radial-gradient(circle at 92% 90%,#fdebc8 0,transparent 36%),#fff} #kc .glass{background:rgba(255,255,255,.62);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(31,92,74,.14);box-shadow:0 8px 28px rgba(31,92,74,.08)} #kc #nav{position:absolute;left:14px;top:14px;bottom:14px;width:214px;border-radius:20px;padding:20px 12px;display:flex;flex-direction:column;gap:6px} #kc #nav h1{font-size:19px;margin:0 8px 14px;color:#1f5c4a;font-family:Georgia,serif} #kc #nav button{all:unset;cursor:pointer;padding:11px 14px;border-radius:12px;font-weight:600;font-size:14px;display:flex;gap:10px} #kc #nav button:hover{background:rgba(31,92,74,.08)} #kc #nav button.on{background:#1f5c4a;color:#fff} #kc #nav button:focus-visible,#kc .btn:focus-visible{outline:3px solid #f2b441} #kc main{position:absolute;left:242px;right:14px;top:14px;bottom:14px;overflow:auto;padding:6px 10px 30px} #kc h2{font-family:Georgia,serif;font-size:28px;margin:6px 0 14px;color:#1f5c4a} #kc h3{font-size:15px;margin:22px 0 10px;color:#1f5c4a} #kc .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:14px} #kc .card{border-radius:16px;padding:10px;cursor:pointer;display:flex;flex-direction:column;gap:3px;transition:transform .15s} #kc .card:hover{transform:translateY(-3px)} #kc .card img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:11px;background:#eef6f2} #kc .card b{font-size:14px}#kc .card small{color:#5a6b65;font-size:12px} #kc .card.me{border:2px solid #1f5c4a;background:#fff} #kc .tag{font-size:11px;color:#8a5a00} #kc .stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:12px;margin-bottom:8px} #kc .stat{border-radius:16px;padding:14px}#kc .stat b{font-size:28px;color:#1f5c4a;display:block} #kc .bar{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px} #kc input,#kc select,#kc textarea{padding:10px 12px;border-radius:11px;border:1px solid #c9d8d2;font:inherit;background:rgba(255,255,255,.9);width:100%} #kc .bar input,#kc .bar select{width:auto;flex:1;min-width:140px} #kc .btn{cursor:pointer;border:0;border-radius:11px;padding:10px 16px;font:600 14px inherit;background:#1f5c4a;color:#fff} #kc .btn.alt{background:#fff;color:#1f5c4a;border:1px solid #1f5c4a}#kc .btn.red{background:#b3261e} #kc .row{display:flex;gap:12px;align-items:center;padding:10px 12px;border-radius:14px;margin-bottom:8px} #kc .row img{width:46px;height:46px;border-radius:10px;object-fit:cover}#kc .row span{flex:1} #kc .gen{display:flex;gap:12px;overflow-x:auto;padding:4px 2px 8px}#kc .gen .card{min-width:140px;width:140px} #kc .mid{max-width:190px} #kc .empty{padding:36px;text-align:center;color:#5a6b65;border-radius:16px} #kc .modal{position:absolute;inset:0;background:rgba(20,40,34,.38);display:flex;align-items:center;justify-content:center;padding:14px;z-index:5} #kc .box{width:min(520px,100%);max-height:92%;overflow:auto;border-radius:22px;padding:20px;background:rgba(255,255,255,.95)} #kc .box>img{width:100%;max-height:300px;object-fit:cover;border-radius:14px} #kc label{display:block;font-size:12px;font-weight:600;margin:10px 0 4px;color:#44564f} #kc dl{display:grid;grid-template-columns:110px 1fr;gap:6px;margin:12px 0}#kc dt{color:#5a6b65}#kc dd{margin:0;font-weight:600} #kc .toast{position:absolute;top:18px;left:50%;transform:translateX(-50%);background:#1f5c4a;color:#fff;padding:10px 18px;border-radius:12px;z-index:9;font-size:14px} #kc .pv{position:absolute;top:0;right:16px;background:#f2b441;color:#3b2a00;font-size:12px;font-weight:700;padding:3px 12px;border-radius:0 0 10px 10px;z-index:6} @media(max-width:760px){ #kc #nav{left:12px;right:12px;top:auto;bottom:12px;width:auto;height:64px;flex-direction:row;padding:8px;justify-content:space-around;z-index:4} #kc #nav h1{display:none}#kc #nav button{flex-direction:column;align-items:center;gap:0;padding:6px 10px;font-size:11px;font-weight:600} #kc main{left:10px;right:10px;top:10px;bottom:90px;padding:4px 4px 20px}#kc h2{font-size:23px} #kc .grid{grid-template-columns:repeat(2,1fr)}} #kc .pgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:14px} #kc .pair{padding:12px} #kc .duo{display:flex;gap:6px} #kc .duo img{width:50%;aspect-ratio:1;object-fit:cover;border-radius:11px;background:#eef6f2} #kc .pair b{margin-top:6px;font-size:15px} #kc .box.wide{width:min(780px,100%)} #kc .duo2{display:grid;grid-template-columns:repeat(2,minmax(0,170px));gap:14px;justify-content:center} #kc .box .grid{grid-template-columns:repeat(auto-fill,minmax(130px,1fr))} @media(max-width:760px){#kc .pgrid{grid-template-columns:1fr}} #kc .sl{position:relative;width:100%;border-radius:11px;overflow:hidden;background:#eef6f2} #kc .st{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none} #kc .st::-webkit-scrollbar{display:none} #kc .st>*{flex:0 0 100%;width:100%;aspect-ratio:1;object-fit:cover;scroll-snap-align:center} #kc .st>video{object-fit:contain;background:#000} #kc .sa{all:unset;position:absolute;top:50%;transform:translateY(-50%);width:28px;height:28px;border-radius:50%;background:rgba(0,0,0,.45);color:#fff;text-align:center;line-height:26px;font-size:20px;cursor:pointer;z-index:2} #kc .sa.l{left:6px} #kc .sa.r{right:6px} #kc .sa:focus-visible{outline:3px solid #f2b441} #kc .sd{position:absolute;top:7px;left:0;right:0;display:flex;justify-content:center;gap:5px;pointer-events:none;z-index:2} #kc .sd i{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.55);box-shadow:0 0 2px rgba(0,0,0,.5)} #kc .sd i.on{background:#fff} #kc .duo .sl{width:50%} #kc .duo .sl .st>*{width:100%} #kc .duo .sa{width:22px;height:22px;line-height:20px;font-size:16px} #kc .box>.sl{border-radius:14px} #kc .box>.sl .st>*{aspect-ratio:4/3;max-height:320px} #kc .bdg{position:absolute;left:7px;bottom:7px;z-index:2;padding:3px 9px;border-radius:99px;font-size:11px;font-weight:700;color:#fff;pointer-events:none;box-shadow:0 1px 4px rgba(0,0,0,.3)} #kc .bdg.Tersedia{background:#1f8a5b} #kc .bdg.Booked{background:#d98b0b} #kc .bdg.Adopted{background:#6b7280} #kc .sl:has(.bdg.Adopted) .st{filter:grayscale(.65)} @media(prefers-reduced-motion:reduce){#kc *{transition:none!important}}";document.head.appendChild(st);
  const th = document.createElement("link"); th.rel = "stylesheet"; th.href = "https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600&family=Nunito:wght@400;600;700&display=swap"; document.head.appendChild(th);
const st2 = document.createElement("style"); st2.textContent = "#kc{font-family:'Nunito','Segoe UI',system-ui,sans-serif;color:#4a3426;background:#fffaf2} #kc .bg{background:radial-gradient(circle at 10% 6%,#ffe3c2 0,transparent 36%),radial-gradient(circle at 94% 92%,#ffd9e2 0,transparent 34%),url(data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%27120%27%20height=%27120%27%3E%3Cg%20fill=%27%23f0c9a0%27%20opacity=%27.35%27%3E%3Cellipse%20cx=%2760%27%20cy=%2770%27%20rx=%2711%27%20ry=%279%27/%3E%3Ccircle%20cx=%2747%27%20cy=%2755%27%20r=%274.5%27/%3E%3Ccircle%20cx=%2756%27%20cy=%2748%27%20r=%274.5%27/%3E%3Ccircle%20cx=%2766%27%20cy=%2748%27%20r=%274.5%27/%3E%3Ccircle%20cx=%2775%27%20cy=%2755%27%20r=%274.5%27/%3E%3C/g%3E%3C/svg%3E),#fffaf2;background-size:auto,auto,150px 150px,auto} #kc .glass{background:rgba(255,255,255,.8);border:2px solid #f1d6b8;box-shadow:0 10px 24px rgba(190,120,60,.12)} #kc h1,#kc h2,#kc h3{font-family:'Fredoka','Nunito',sans-serif;color:#c9661f} #kc h2{font-size:30px} #kc #nav{border-radius:28px} #kc #nav h1{font-size:21px} #kc #nav button:hover{background:#ffe9d2} #kc #nav button.on{background:#f08a3c;color:#fff;box-shadow:0 4px 0 #c9661f} #kc #nav button:focus-visible,#kc .btn:focus-visible{outline:3px solid #f4a6b7} #kc .card{border-radius:22px} #kc .card:hover{transform:translateY(-4px) rotate(-1deg)} #kc .card img,#kc .sl{border-radius:16px} #kc .card small{color:#9a7a63} #kc .card.me{border-color:#f08a3c;background:#fff} #kc .tag{color:#c9661f} #kc .btn{background:#f08a3c;border-radius:999px;box-shadow:0 3px 0 #c9661f} #kc .btn.alt{background:#fff;color:#c9661f;border:2px solid #f08a3c;box-shadow:none} #kc .btn.red{background:#d64545;box-shadow:0 3px 0 #a52e2e} #kc input,#kc select,#kc textarea{border:2px solid #f1d6b8;border-radius:16px;background:#fff} #kc input:focus,#kc select:focus,#kc textarea:focus{outline:3px solid #ffd2a6;border-color:#f08a3c} #kc .stat{position:relative;border-radius:22px;padding:16px} #kc .stat b{color:#c9661f;font-family:'Fredoka',sans-serif} #kc .stat::before,#kc .stat::after{content:'';position:absolute;top:-10px;width:0;height:0;border-left:11px solid transparent;border-right:11px solid transparent;border-bottom:16px solid #f1d6b8} #kc .stat::before{left:18px} #kc .stat::after{right:18px} #kc label{color:#7a5238} #kc dt,#kc .empty{color:#9a7a63} #kc .modal{background:rgba(74,52,38,.4)} #kc .box{border-radius:26px;background:#fffaf2} #kc .toast{background:#f08a3c;border-radius:999px}"; document.head.appendChild(st2);
  const WA_NUMBER = ""; // isi nomor WhatsApp format 628123456789 agar tombol "Adopsi Sekarang" muncul; kosongkan untuk menyembunyikan
root.addEventListener("click", e => { const t = e.target.closest("[data-chip]"); if (!t) return; const k = t.dataset.chip, v = t.dataset.v; if (k === "") { fg = ""; fs = ""; } else if (k === "s") fs = fs === v ? "" : v; else fg = fg === v ? "" : v; $("#lg").innerHTML = gridHtml(); });
const baseDetail = detail;
detail = id => { baseDetail(id); const c = byId(id); if (!WA_NUMBER || !isKid(c) || stOf(c) !== "Tersedia") return; const b = $("#ov .box .bar"); if (b) b.insertAdjacentHTML("afterbegin", `<a class="adopt" target="_blank" rel="noopener" href="https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo, saya tertarik mengadopsi " + c.nama)}">Adopsi Sekarang <i>→</i></a>`); };
const st3 = document.createElement("style"); st3.textContent = "#kc{color:#4a3b3b;background:#fff3ee} #kc .bg{background:radial-gradient(circle at 8% 4%,#ffd9d6 0,transparent 40%),radial-gradient(circle at 96% 96%,#ffe6d9 0,transparent 38%),linear-gradient(#fff6f2,#ffeee8);background-size:auto} #kc .glass{background:#fff9f6;border:0;box-shadow:0 6px 18px rgba(240,120,140,.13)} #kc h1,#kc h2,#kc h3{color:#e8697f} #kc #nav{border-radius:30px;background:#fff9f6} #kc #nav button{color:#7a6262} #kc #nav button:hover{background:#ffe6e2} #kc #nav button.on{background:#f28b9b;color:#fff;box-shadow:0 6px 14px rgba(240,100,125,.35)} #kc .hero{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px} #kc .hero h2{margin:0} #kc .hero p{margin:2px 0 0;color:#8b6f6f} #kc .pawb{width:44px;height:44px;border-radius:50%;background:#ffdcd9;display:grid;place-items:center;font-size:22px} #kc .search{display:flex;align-items:center;gap:10px;background:#fff;border-radius:999px;padding:4px 18px;box-shadow:0 4px 14px rgba(240,120,140,.12);margin-bottom:14px} #kc .search input,#kc .search input:focus{border:0;background:transparent;outline:0;border-radius:0} #kc .chips{display:flex;gap:10px;overflow-x:auto;padding:4px 2px 14px;scrollbar-width:none} #kc .chip{all:unset;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;min-width:66px;padding:10px 12px;border-radius:20px;background:#fff0ec;color:#8b6f6f;font-weight:700;font-size:12px} #kc .chip i{font-style:normal;font-size:20px;width:36px;height:36px;display:grid;place-items:center;border-radius:50%;background:#fff} #kc .chip.on{background:#f28b9b;color:#fff;box-shadow:0 6px 14px rgba(240,100,125,.35)} #kc .chip.on i{background:rgba(255,255,255,.3)} #kc .chip:focus-visible{outline:3px solid #f4a6b7} #kc .sechd{display:flex;justify-content:space-between;align-items:baseline;margin:6px 0 10px} #kc .sechd h3{margin:0} #kc .sechd span{color:#e8697f;font-size:13px;font-weight:700} #kc .card{border-radius:26px;background:#fff9f6} #kc .card:hover{transform:translateY(-4px)} #kc .card img,#kc .sl{border-radius:20px} #kc .card b{font-size:15px;color:#4a3b3b;margin-top:4px} #kc .card small{color:#a08a86} #kc .btn{background:linear-gradient(135deg,#f6a0ab,#ee7f90);box-shadow:0 6px 14px rgba(240,100,125,.3)} #kc .btn.alt{background:#fff;color:#e8697f;border:2px solid #f6a0ab;box-shadow:none} #kc .btn.red{background:#e0546b;box-shadow:none} #kc input,#kc select,#kc textarea{border-color:#ffd3d0;border-radius:18px} #kc .stat b{color:#e8697f} #kc .stat::before,#kc .stat::after{border-bottom-color:#ffd3d0} #kc .modal{background:rgba(120,60,70,.35)} #kc .box{background:#fff6f2;border-radius:32px} #kc .box>.sl{margin:-20px -20px 12px;width:calc(100% + 40px);border-radius:0 0 30px 30px} #kc dl{background:#fff;border-radius:20px;padding:14px 16px} #kc .adopt{flex:1 1 100%;display:flex;justify-content:space-between;align-items:center;padding:8px 8px 8px 24px;border-radius:999px;background:linear-gradient(135deg,#f6a0ab,#ee7f90);color:#fff;font-weight:700;text-decoration:none;box-shadow:0 8px 18px rgba(240,100,125,.35)} #kc .adopt i{font-style:normal;width:40px;height:40px;border-radius:50%;background:#fff;color:#ee7f90;display:grid;place-items:center;font-size:20px} #kc .toast{background:#ee7f90} @media(min-width:761px){#kc .grid{grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:16px}}"; document.head.appendChild(st3);
let dip = null; const standalone = () => matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
const installBtn = () => standalone() ? "" : `<button class="inst" data-act="install">⬇ Unduh aplikasi</button>`;
window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); dip = e; });
window.addEventListener("appinstalled", () => { dip = null; if (view === "list") render(); toast("Aplikasi terpasang"); });
root.addEventListener("click", async e => { if (!e.target.closest('[data-act="install"]')) return; if (dip) { dip.prompt(); await dip.userChoice; dip = null; if (view === "list") render(); return; } const ios = /iphone|ipad|ipod/i.test(navigator.userAgent); modal(`<h2>Unduh aplikasi</h2><p>${ios ? "Ketuk tombol <b>Bagikan</b> (kotak berpanah) di Safari, lalu pilih <b>Tambah ke Layar Utama</b>." : "Buka menu browser (⋮), lalu pilih <b>Instal aplikasi</b> atau <b>Tambahkan ke layar utama</b>."}</p><div class="bar"><button class="btn alt" data-act="close2">Tutup</button></div>`); });
const stI = document.createElement("style"); stI.textContent = "#kc .heroR{display:flex;align-items:center;gap:10px} #kc .inst{all:unset;cursor:pointer;display:flex;align-items:center;gap:6px;padding:9px 16px;border-radius:999px;background:linear-gradient(135deg,#f6a0ab,#ee7f90);color:#fff;font-weight:700;font-size:13px;box-shadow:0 6px 14px rgba(240,100,125,.3)} #kc .inst:focus-visible{outline:3px solid #f4a6b7} @media(max-width:760px){#kc .inst{padding:8px 12px;font-size:12px}}"; document.head.appendChild(stI);
const baseRender = render;
render = () => { baseRender(); const n = $("#nav"); if (n) n.insertAdjacentHTML("beforeend", `<button class="rf" data-act="refresh"><span>🔄</span>Refresh</button>`); };
root.addEventListener("click", async e => { const t = e.target.closest('[data-act="refresh"]'); if (!t || busy) return; t.classList.add("spin"); try { if (!IS_PREVIEW) await load(); render(); toast("Data diperbarui"); } catch (er) { t.classList.remove("spin"); toast("Gagal memuat: " + er.message); } });
const stR = document.createElement("style"); stR.textContent = "#kc #nav .rf{margin-top:auto} #kc #nav .rf.spin span{display:inline-block;animation:kcspin .8s linear infinite} @keyframes kcspin{to{transform:rotate(360deg)}} @media(max-width:760px){#kc #nav .rf{margin-top:0}} @media(prefers-reduced-motion:reduce){#kc #nav .rf.spin span{animation:none}}"; document.head.appendChild(stR);
const BUCKET = "foto-kucing";
let sb = null, cats = [], admin = false, view = "list", selId = null, q = "", fg = "", fs = "", busy = false, prs = [];
const $ = s => root.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const byId = id => cats.find(c => c.id === id);
const kids = x => cats.filter(k => k.ayah_id === x.id || k.ibu_id === x.id);
const ph = j => "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="300" height="300" fill="#eaf5ef"/><text x="150" y="195" font-size="130" text-anchor="middle">${j === "Jantan" ? "🐱" : "😺"}</text></svg>`);
const foto = c => c.foto_url || ph(c.jenis_kelamin);
function toast(m) { const t = document.createElement("div"); t.className = "toast"; t.textContent = m; root.appendChild(t); setTimeout(() => t.remove(), 2600); }

// Umur dihitung otomatis dari tanggal lahir (tidak disimpan di database)
function umur(b, w) {
  if (!b) return "-";
  const s = new Date(b), e = w ? new Date(w) : new Date();
  if (e < s) return "0 hari";
  let y = e.getFullYear() - s.getFullYear(), m = e.getMonth() - s.getMonth(), d = e.getDate() - s.getDate();
  if (d < 0) { m--; d += new Date(e.getFullYear(), e.getMonth(), 0).getDate(); }
  if (m < 0) { y--; m += 12; }
  const p = []; if (y) p.push(y + " thn"); if (m) p.push(m + " bln"); if (!y) p.push(d + " hari");
  return p.join(" ");
}
const stOf = c => c.status_adopsi || "Tersedia", isKid = c => !!(c.ayah_id || c.ibu_id);
const slider = c => {
  const sl = [foto(c), c.foto2_url, c.foto3_url].filter(Boolean), n = sl.length;
  const bd = isKid(c) ? `<span class="bdg ${stOf(c)}">${esc(stOf(c))}</span>` : "";
  return `<div class="sl"><div class="st">${sl.map(u => `<img src="${esc(u)}" alt="${esc(c.nama)}" loading="lazy">`).join("")}</div>${bd}${n > 1 ? `<button class="sa l" data-act="slide" data-d="-1" aria-label="Sebelumnya">‹</button><button class="sa r" data-act="slide" data-d="1" aria-label="Berikutnya">›</button><div class="sd">${Array.from({ length: n }, (_, i) => `<i class="${i ? "" : "on"}"></i>`).join("")}</div>` : ""}</div>`;
};
const card = (c, cls = "", from = "") => `<div class="card glass ${cls}" data-act="${cls === "me" ? "detail" : "pick"}" data-id="${c.id}">${slider(c)}<b>${esc(c.nama)}</b><small>${c.jenis_kelamin === "Jantan" ? "♂" : "♀"} ${esc(umur(c.tanggal_lahir, c.tanggal_wafat))}${c.tanggal_wafat ? " (alm.)" : ""}</small>${from ? `<span class="tag">${esc(from)}</span>` : ""}</div>`;

function previewData() {
  const k = (id, nama, jk, warna, lahir, a, i) => ({ id, nama, jenis_kelamin: jk, ras: "Domestik", warna_bulu: warna, tanggal_lahir: lahir, tanggal_wafat: null, foto_url: "", ayah_id: a || null, ibu_id: i || null, catatan: "", status_adopsi: { d3: "Booked", d4: "Adopted" }[id] || "Tersedia" });
  return [
    k("d1", "Ubi", "Jantan", "Oranye", "2022-01-10"), k("d2", "Hikari", "Betina", "Putih", "2022-03-05"),
    k("d3", "Mochi", "Betina", "Putih", "2024-02-01", "d1", "d2"), k("d4", "Kopi", "Jantan", "Coklat", "2024-02-01", "d1", "d2"),
    k("d5", "Susu", "Betina", "Putih", "2024-02-01", "d1", "d2"), k("d6", "Tiger", "Jantan", "Oranye", "2024-02-01", "d1", "d2"),
    k("d7", "Nori", "Betina", "Hitam", "2024-02-01", "d1", "d2"),
    k("d8", "Leo", "Jantan", "Abu-abu", "2021-06-12"), k("d9", "Bella", "Betina", "Krem", "2021-09-30"),
    k("d10", "Coco", "Betina", "Krem", "2025-04-20", "d8", "d9"), k("d11", "Milo", "Jantan", "Abu-abu", "2025-04-20", "d8", "d9")
  ];
}
async function load() {
  if (IS_PREVIEW) return;
  const { data, error } = await sb.from("kucing").select("*").order("nama");
  if (error) throw error;
  cats = data || [];
  const r = await sb.from("pasangan").select("*"); prs = r.error ? [] : (r.data || []);
}
async function boot() {
  try {
    if (IS_PREVIEW) { cats = previewData(); $("#pv").hidden = false; }
    else {
      const { createClient } = await import("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm");
      if (SUPABASE_URL.includes("ANDA")) throw new Error("isi SUPABASE_URL & SUPABASE_ANON_KEY dulu");
      sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      const { data } = await sb.auth.getSession(); admin = !!data.session;
      sb.auth.onAuthStateChange((_e, s) => { admin = !!s; render(); });
      await load();
    }
  } catch (e) { toast("Gagal memuat data: " + e.message); }
  render();
  try { // PWA: Service Worker dibuat dari Blob
    const sw = new Blob(["self.addEventListener('fetch',e=>{});"], { type: "text/javascript" });
    if ("serviceWorker" in navigator) navigator.serviceWorker.register(URL.createObjectURL(sw)).catch(() => {});
  } catch (e) {}
}

function render() {
  if (!admin && view === "admin" && location.hash !== "#admin") view = "list";
  const items = [["list", "🐾", "Kucing"], ["home", "💞", "Pasangan"], ["tree", "🌳", "Silsilah"], ["admin", "🔐", "Admin"]];
  $("#nav").innerHTML = `<h1>🐱 Sahabat Bulu</h1>` + items.filter(i => admin || i[0] === "home" || i[0] === "list" || i[0] === "tree" || (i[0] === "admin" && location.hash === "#admin")).map(i => `<button class="${view === i[0] ? "on" : ""}" data-act="nav" data-id="${i[0]}"><span>${i[1]}</span>${i[2]}</button>`).join("");
  const m = $("#main");
  m.innerHTML = { home: vHome, list: vList, tree: vTree, admin: vAdmin }[view]();
  if (view === "list") { const i = $("#q"); i.addEventListener("input", () => { q = i.value; $("#lg").innerHTML = gridHtml(); }); $("#fg").addEventListener("change", e => { fg = e.target.value; $("#lg").innerHTML = gridHtml(); }); $("#fs").addEventListener("change", e => { fs = e.target.value; $("#lg").innerHTML = gridHtml(); }); }
  if (view === "tree") $("#sel").addEventListener("change", e => { selId = e.target.value; render(); });
}
function pairs() {
  const m = new Map();
  prs.forEach(r => { const a = byId(r.ayah_id), i = byId(r.ibu_id); if (a && i) m.set(r.ayah_id + "|" + r.ibu_id, { key: r.ayah_id + "|" + r.ibu_id, pid: r.id, a, i, kids: [] }); });
  cats.forEach(c => {
    if (!c.ayah_id && !c.ibu_id) return;
    const key = (c.ayah_id || "") + "|" + (c.ibu_id || "");
    if (!m.has(key)) m.set(key, { key, a: byId(c.ayah_id), i: byId(c.ibu_id), kids: [] });
    m.get(key).kids.push(c);
  });
  m.forEach(p => p.kids.sort((x, y) => String(x.tanggal_lahir).localeCompare(String(y.tanggal_lahir)) || x.nama.localeCompare(y.nama)));
  return [...m.values()].sort((x, y) => y.kids.length - x.kids.length);
}
const pimg = (c, j) => c ? slider(c) : `<img src="${esc(c ? foto(c) : ph(j))}" alt="${esc(c ? c.nama : "Belum diketahui")}" loading="lazy">`;
const pnama = p => esc(p.a ? p.a.nama : "?") + " ♂ + " + esc(p.i ? p.i.nama : "?") + " ♀";
const pairCard = p => `<div class="card glass pair" data-act="pair" data-id="${esc(p.key)}"><div class="duo">${pimg(p.a, "Jantan")}${pimg(p.i, "Betina")}</div><b>${pnama(p)}</b><small>${p.kids.length ? p.kids.length + " anak · " + p.kids.filter(k => stOf(k) === "Tersedia").length + " tersedia" : "Belum ada anak"}</small></div>`;
function pairDetail(key) {
  const p = pairs().find(x => x.key === key); if (!p) return;
  const par = [p.a && card(p.a, "", "Ayah"), p.i && card(p.i, "", "Ibu")].filter(Boolean).map(h => h.replace('data-act="pick"', 'data-act="detail"')).join("");
  modal(`<h2>${pnama(p)}</h2><div class="duo2">${par}</div><h3>${p.kids.length} anak</h3>${p.kids.length ? `<div class="grid">${p.kids.map(k => card(k).replace('data-act="pick"', 'data-act="detail"')).join("")}</div>` : `<div class="empty glass">Belum ada anak dari pasangan ini.</div>`}<div class="bar" style="margin-top:16px"><button class="btn alt" data-act="close2">Tutup</button></div>`, "wide");
}
function vHome() {
  const ps = pairs(), ak = cats.filter(isKid), op = ak.filter(c => stOf(c) === "Tersedia").length, bk = ak.length - op, j = cats.filter(c => c.jenis_kelamin === "Jantan").length;
  return `<h2>Sahabat Bulu</h2><div class="stats"><div class="stat glass"><b>${op}</b>Open Adopt</div><div class="stat glass"><b>${bk}</b>Booked / Adopted</div><div class="stat glass"><b>${j}</b>Jantan</div><div class="stat glass"><b>${cats.length - j}</b>Betina</div></div><h3>Pasangan induk dan anak-anaknya</h3>`
    + (ps.length ? `<div class="pgrid">${ps.map(pairCard).join("")}</div>` : `<div class="empty glass">Belum ada pasangan. Masuk ke menu Admin, lalu pilih jantan dan betina di bagian Pasangan.</div>`);
}
function gridHtml() {
  const r = cats.filter(c => isKid(c) && !kids(c).length && (!fg || c.jenis_kelamin === fg) && (!fs || stOf(c) === fs) && (c.nama + " " + (c.ras || "") + " " + (c.warna_bulu || "")).toLowerCase().includes(q.toLowerCase()));
  const ch = [["", "", "Semua", "🐾"], ["s", "Tersedia", "Tersedia", "💗"], ["s", "Booked", "Booked", "⏳"], ["s", "Adopted", "Adopted", "🏡"], ["g", "Jantan", "Jantan", "♂"], ["g", "Betina", "Betina", "♀"]];
  const on = x => x[0] === "" ? !fg && !fs : (x[0] === "s" ? fs === x[1] : fg === x[1]);
  return `<div class="chips">${ch.map(x => `<button class="chip ${on(x) ? "on" : ""}" data-chip="${x[0]}" data-v="${x[1]}"><i>${x[3]}</i>${x[2]}</button>`).join("")}</div><div class="sechd"><h3>Kucing Pilihan</h3><span>${r.length} kucing</span></div>` + (r.length ? `<div class="grid">${r.map(c => card(c).replace('data-act="pick"', 'data-act="detail"')).join("")}</div>` : `<div class="empty glass">Belum ada data yang cocok.</div>`);
}
function vList() {
  return `<div class="hero"><div><h2>Hai! 🐾</h2><p>Temukan sahabat barumu</p></div><div class="heroR">${installBtn()}<span class="pawb">🐾</span></div></div><div class="search"><span>🔍</span><input id="q" placeholder="Cari nama, ras, atau warna" value="${esc(q)}"></div><select id="fg" hidden><option value=""></option></select><select id="fs" hidden><option value=""></option></select><div id="lg">${gridHtml()}</div>`;
}
function vTree() {
  if (!cats.length) return `<h2>Pohon Silsilah</h2><div class="empty glass">Belum ada data kucing.</div>`;
  if (!selId || !byId(selId)) selId = cats[0].id;
  const c = byId(selId);
  let up = [], cur = [{ c, f: "" }];
  for (let i = 0; i < 3; i++) { const n = []; cur.forEach(x => [x.c.ayah_id, x.c.ibu_id].forEach(p => { const pc = p && byId(p); if (pc) n.push({ c: pc, f: (pc.jenis_kelamin === "Jantan" ? "Ayah " : "Ibu ") + x.c.nama }); })); if (!n.length) break; up.push(n); cur = n; }
  let down = []; cur = [{ c, f: "" }];
  for (let i = 0; i < 3; i++) { const n = []; cur.forEach(x => kids(x.c).forEach(k => n.push({ c: k, f: "Anak " + x.c.nama }))); if (!n.length) break; down.push(n); cur = n; }
  const sib = cats.filter(k => k.id !== c.id && ((c.ayah_id && k.ayah_id === c.ayah_id) || (c.ibu_id && k.ibu_id === c.ibu_id)));
  const UP = ["Orang tua", "Kakek & nenek", "Buyut"], DN = ["Anak", "Cucu", "Cicit"];
  const sec = (t, a) => `<h3>${t}</h3><div class="gen">${a.map(x => card(x.c, "", x.f)).join("")}</div>`;
  return `<h2>Pohon Silsilah</h2><div class="bar"><select id="sel">${cats.map(k => `<option value="${k.id}" ${k.id === selId ? "selected" : ""}>${esc(k.nama)}</option>`).join("")}</select></div>`
    + (up.length ? [...up].map((a, i) => [UP[i], a]).reverse().map(x => sec(x[0], x[1])).join("") : `<div class="empty glass">Leluhur belum tercatat.</div>`)
    + `<h3>Kucing dipilih</h3><div class="gen"><div style="width:190px">${card(c, "me")}</div></div>`
    + (sib.length ? sec("Saudara", sib.map(k => ({ c: k, f: "" }))) : "")
    + (down.length ? down.map((a, i) => sec(DN[i], a)).join("") : `<div class="empty glass">Belum ada keturunan.</div>`);
}
function vAdmin() {
  if (!admin) return `<h2>Login Admin</h2><div class="glass" style="padding:20px;border-radius:20px;max-width:380px"><label>Email</label><input id="em" type="email" autocomplete="username"><label>Password</label><input id="pw" type="password" autocomplete="current-password"><div class="bar" style="margin-top:16px"><button class="btn" data-act="login">Masuk</button>${IS_PREVIEW ? `<button class="btn alt" data-act="quick">Quick Login Admin</button>` : ""}</div></div>`;
  return `<h2>Kelola Kucing</h2><div class="bar"><button class="btn" data-act="form" data-id="">+ Tambah kucing</button><button class="btn alt" data-act="logout">Keluar</button></div>` + pairAdmin() + (cats.length ? cats.map(c => `<div class="row glass"><img src="${esc(foto(c))}" alt=""><span><b>${esc(c.nama)}</b><br><small>${esc(c.ras || "")} · ${esc(umur(c.tanggal_lahir, c.tanggal_wafat))}</small></span><button class="btn alt" data-act="form" data-id="${c.id}">Ubah</button><button class="btn red" data-act="del" data-id="${c.id}">Hapus</button></div>`).join("") : `<div class="empty glass">Belum ada data. Klik "Tambah kucing" untuk memulai.</div>`);
}
function pairAdmin() {
  const opt = g => cats.filter(c => c.jenis_kelamin === g).map(c => `<option value="${c.id}">${esc(c.nama)}</option>`).join("");
  const list = pairs().map(p => `<div class="row glass"><span><b>${pnama(p)}</b><br><small>${p.kids.length} anak</small></span>${p.pid ? `<button class="btn red" data-act="delpair" data-id="${p.pid}">Hapus pasangan</button>` : `<small>otomatis dari data anak</small>`}</div>`).join("");
  return `<h3>Pasangan</h3><div class="bar"><select id="pa">${opt("Jantan")}</select><select id="pi">${opt("Betina")}</select><button class="btn" data-act="addpair">+ Jadikan pasangan</button></div>${list}<h3>Daftar kucing</h3>`;
}
async function addPair() {
  const a = $("#pa").value, i = $("#pi").value;
  if (!a || !i) return toast("Pilih satu jantan dan satu betina.");
  if (pairs().some(p => p.key === a + "|" + i)) return toast("Pasangan ini sudah ada.");
  try {
    if (IS_PREVIEW) prs.push({ id: "pp" + Date.now(), ayah_id: a, ibu_id: i });
    else { const { error } = await sb.from("pasangan").insert({ ayah_id: a, ibu_id: i }); if (error) throw error; await load(); }
    render(); toast("Pasangan ditambahkan");
  } catch (e) { toast("Gagal: " + e.message + " (SQL pasangan sudah dijalankan?)"); }
}
async function delPair(id) {
  if (!confirm("Hapus pasangan ini? Data kucing dan anaknya tidak ikut terhapus.")) return;
  try {
    if (IS_PREVIEW) prs = prs.filter(r => r.id !== id);
    else { const { error } = await sb.from("pasangan").delete().eq("id", id); if (error) throw error; await load(); }
    render(); toast("Pasangan dihapus");
  } catch (e) { toast("Gagal menghapus: " + e.message); }
}
function modal(h, w = "") { $("#ov").innerHTML = `<div class="modal" data-act="close"><div class="box glass ${w}">${h}</div></div>`; }
function detail(id) {
  const c = byId(id), a = byId(c.ayah_id), i = byId(c.ibu_id);
  const sib = cats.filter(k => k.id !== c.id && ((c.ayah_id && k.ayah_id === c.ayah_id) || (c.ibu_id && k.ibu_id === c.ibu_id)));
  modal(`${slider(c)}<h2 style="margin-bottom:0">${esc(c.nama)}</h2><dl>${isKid(c) ? `<dt>Status adopsi</dt><dd><b>${esc(stOf(c))}</b></dd>` : ""}<dt>Jenis kelamin</dt><dd>${esc(c.jenis_kelamin)}</dd><dt>Umur</dt><dd>${esc(umur(c.tanggal_lahir, c.tanggal_wafat))}${c.tanggal_wafat ? " (alm.)" : ""}</dd><dt>Lahir</dt><dd>${esc(c.tanggal_lahir || "-")}</dd><dt>Ras</dt><dd>${esc(c.ras || "-")}</dd><dt>Warna bulu</dt><dd>${esc(c.warna_bulu || "-")}</dd><dt>Ayah</dt><dd>${a ? esc(a.nama) : "-"}</dd><dt>Ibu</dt><dd>${i ? esc(i.nama) : "-"}</dd><dt>Saudara</dt><dd>${sib.length ? sib.map(s => esc(s.nama)).join(", ") : "-"}</dd><dt>Anak</dt><dd>${kids(c).map(s => esc(s.nama)).join(", ") || "-"}</dd><dt>Catatan</dt><dd>${esc(c.catatan || "-")}</dd></dl><div class="bar"><button class="btn" data-act="tree" data-id="${c.id}">Lihat silsilah</button><button class="btn alt" data-act="close2">Tutup</button></div>`);
}
function form(id) {
  const c = id ? byId(id) : {}, o = (g, v) => `<option value="">- tidak diketahui -</option>` + cats.filter(k => k.jenis_kelamin === g && k.id !== id).map(k => `<option value="${k.id}" ${k.id === v ? "selected" : ""}>${esc(k.nama)}</option>`).join("");
  modal(`<h2>${id ? "Ubah" : "Tambah"} kucing</h2><label>Nama</label><input id="f-nama" value="${esc(c.nama)}"><label>Jenis kelamin</label><select id="f-jk"><option ${c.jenis_kelamin === "Jantan" ? "selected" : ""}>Jantan</option><option ${c.jenis_kelamin === "Betina" ? "selected" : ""}>Betina</option></select><label>Ras</label><input id="f-ras" value="${esc(c.ras)}"><label>Warna bulu</label><input id="f-warna" value="${esc(c.warna_bulu)}"><label>Tanggal lahir</label><input id="f-lahir" type="date" value="${esc(c.tanggal_lahir)}"><label>Tanggal wafat (kosongkan jika masih hidup)</label><input id="f-wafat" type="date" value="${esc(c.tanggal_wafat)}"><label>Ayah</label><select id="f-ayah">${o("Jantan", c.ayah_id)}</select><label>Ibu</label><select id="f-ibu">${o("Betina", c.ibu_id)}</select><label>Foto utama (slide 1)</label><input id="f-foto" type="file" accept="image/*"><label>Foto ke-2 (slide 2)</label><input id="f-foto2" type="file" accept="image/*">${c.foto2_url ? `<label><input type="checkbox" id="f-del2"> Hapus foto ke-2</label>` : ""}<label>Foto ke-3 (slide 3)</label><input id="f-foto3" type="file" accept="image/*">${c.foto3_url ? `<label><input type="checkbox" id="f-del3"> Hapus foto ke-3</label>` : ""}<label>Status adopsi (untuk anak)</label><select id="f-st">${["Tersedia", "Booked", "Adopted"].map(v => `<option ${stOf(c) === v ? "selected" : ""}>${v}</option>`).join("")}</select><label>Catatan</label><textarea id="f-cat" rows="2">${esc(c.catatan)}</textarea><div class="bar" style="margin-top:16px"><button class="btn" data-act="save" data-id="${id || ""}">Simpan</button><button class="btn alt" data-act="close2">Batal</button></div>`);
}
async function compress(file) { // perkecil foto (maks 900px, JPEG) agar hemat kuota storage
  try {
    const bmp = await createImageBitmap(file), k = Math.min(1, 900 / Math.max(bmp.width, bmp.height));
    const cv = document.createElement("canvas"); cv.width = Math.round(bmp.width * k); cv.height = Math.round(bmp.height * k);
    cv.getContext("2d").drawImage(bmp, 0, 0, cv.width, cv.height);
    return await new Promise(r => cv.toBlob(b => r(b || file), "image/jpeg", .82));
  } catch (e) { return file; }
}
async function upload(file, isImg) {
  if (IS_PREVIEW) return isImg ? await new Promise(r => { const fr = new FileReader(); fr.onload = () => r(fr.result); fr.readAsDataURL(file); }) : URL.createObjectURL(file);
  const ext = isImg ? "jpg" : (file.name.split(".").pop().toLowerCase().replace(/[^a-z0-9]/g, "") || "mp4");
  const path = Date.now() + "-" + Math.random().toString(36).slice(2, 7) + "." + ext;
  const { error } = await sb.storage.from(BUCKET).upload(path, file, { contentType: file.type || (isImg ? "image/jpeg" : "video/mp4") });
  if (error) throw error;
  return sb.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;
}
async function save(id) {
  if (busy) return; busy = true;
  try {
    const nama = $("#f-nama").value.trim(), lahir = $("#f-lahir").value;
    if (!nama || !lahir) return toast("Nama dan tanggal lahir wajib diisi.");
    const wf = $("#f-wafat").value, ay = $("#f-ayah").value, ib = $("#f-ibu").value;
    if (wf && wf < lahir) return toast("Tanggal wafat tidak boleh sebelum tanggal lahir.");
    for (const pid of [ay, ib]) { const pr = pid && byId(pid); if (pr && pr.tanggal_lahir >= lahir) return toast(pr.nama + " harus lahir lebih dulu dari " + nama + "."); }
    if (id && kids(byId(id)).some(k => k.tanggal_lahir <= lahir)) return toast("Tanggal lahir harus lebih awal dari anak-anaknya.");
    const old = id ? byId(id) : null; let url = old ? old.foto_url : "", url2 = old ? old.foto2_url : "", url3 = old ? old.foto3_url : "";
    const f1 = $("#f-foto").files[0], f2 = $("#f-foto2").files[0], f3 = $("#f-foto3").files[0];
    if (f1 || f2 || f3) toast("Mengunggah foto...");
    if (f1) url = await upload(await compress(f1), true);
    if (f2) url2 = await upload(await compress(f2), true); else if ($("#f-del2") && $("#f-del2").checked) url2 = "";
    if (f3) url3 = await upload(await compress(f3), true); else if ($("#f-del3") && $("#f-del3").checked) url3 = "";
    const row = { nama, jenis_kelamin: $("#f-jk").value, ras: $("#f-ras").value.trim(), warna_bulu: $("#f-warna").value.trim(), tanggal_lahir: lahir, tanggal_wafat: $("#f-wafat").value || null, ayah_id: $("#f-ayah").value || null, ibu_id: $("#f-ibu").value || null, catatan: $("#f-cat").value.trim(), foto_url: url };
    if (url2 || (old && "foto2_url" in old)) row.foto2_url = url2 || null;
    if (url3 || (old && "foto3_url" in old)) row.foto3_url = url3 || null;
    const st = $("#f-st").value; if (st !== "Tersedia" || (old && "status_adopsi" in old)) row.status_adopsi = st;
    if (IS_PREVIEW) { if (id) Object.assign(old, row); else cats.push({ id: "p" + Date.now(), ...row }); }
    else { const r = id ? await sb.from("kucing").update(row).eq("id", id) : await sb.from("kucing").insert(row); if (r.error) throw r.error; await load(); }
    $("#ov").innerHTML = ""; render(); toast("Data tersimpan");
  } catch (e) { toast("Gagal menyimpan: " + e.message + (/foto2_url|foto3_url|status_adopsi/.test(e.message) ? " (jalankan SQL supabase-media.sql dan supabase-adopsi.sql dulu)" : "")); }
  finally { busy = false; }
}
async function del(id) {
  if (!confirm("Hapus kucing ini? Hubungan orang tua pada anaknya akan dikosongkan.")) return;
  try {
    if (IS_PREVIEW) { cats = cats.filter(c => c.id !== id); prs = prs.filter(r => r.ayah_id !== id && r.ibu_id !== id); cats.forEach(c => { if (c.ayah_id === id) c.ayah_id = null; if (c.ibu_id === id) c.ibu_id = null; }); }
    else { const { error } = await sb.from("kucing").delete().eq("id", id); if (error) throw error; await load(); }
    render(); toast("Data dihapus");
  } catch (e) { toast("Gagal menghapus: " + e.message); }
}
async function login() {
  if (IS_PREVIEW) return toast("Mode preview: gunakan tombol Quick Login Admin.");
  try {
    const { error } = await sb.auth.signInWithPassword({ email: $("#em").value.trim(), password: $("#pw").value });
    if (error) throw error; toast("Berhasil masuk");
  } catch (e) { toast("Login gagal: " + e.message); }
}
root.addEventListener("scroll", e => {
  const st = e.target; if (!st.classList || !st.classList.contains("st")) return;
  const n = Math.round(st.scrollLeft / (st.clientWidth || 1));
  st.parentNode.querySelectorAll(".sd i").forEach((d, i) => d.classList.toggle("on", i === n));
  if (st._n !== n) { st._n = n; st.querySelectorAll("video").forEach(v => v.pause()); }
}, true);
root.addEventListener("click", async ev => {
  const t = ev.target.closest("[data-act]"); if (!t) return;
  const a = t.dataset.act, id = t.dataset.id;
  if (a === "close" && ev.target !== t) return;
  if (a === "noop") return;
  if (a === "slide") { const st = t.closest(".sl").querySelector(".st"); st.scrollBy({ left: +t.dataset.d * st.clientWidth, behavior: "smooth" }); return; }
  if (a === "nav") { view = id; render(); }
  else if (a === "detail") detail(id);
  else if (a === "pair") pairDetail(id);
  else if (a === "addpair") addPair();
  else if (a === "delpair") delPair(id);
  else if (a === "pick") { selId = id; view = "tree"; render(); }
  else if (a === "tree") { selId = id; view = "tree"; $("#ov").innerHTML = ""; render(); }
  else if (a === "close" || a === "close2") $("#ov").innerHTML = "";
  else if (a === "form") form(id);
  else if (a === "save") save(id);
  else if (a === "del") del(id);
  else if (a === "quick") { admin = true; render(); }
  else if (a === "login") login();
  else if (a === "logout") { if (IS_PREVIEW) { admin = false; render(); } else await sb.auth.signOut(); }
});
document.addEventListener("keydown", e => { if (e.key === "Escape") $("#ov").innerHTML = ""; if (e.key === "Enter" && (e.target.id === "pw" || e.target.id === "em")) login(); });
let tapN = 0, tapT = 0; root.addEventListener("click", e => { if (!e.target.closest("#nav h1, #main h2")) return; const n = Date.now(); tapN = n - tapT < 1500 ? tapN + 1 : 1; tapT = n; if (tapN >= 5) { tapN = 0; location.hash = "#admin"; view = "admin"; render(); } });
boot();
