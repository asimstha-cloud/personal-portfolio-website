import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.join(process.cwd(), "public");

await fs.mkdir(publicDir, { recursive: true });

const portraitSvg = `
<svg width="960" height="1120" viewBox="0 0 960 1120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="960" y2="1120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EAF2FF"/>
      <stop offset="0.52" stop-color="#F8FAFC"/>
      <stop offset="1" stop-color="#DDFBFF"/>
    </linearGradient>
    <radialGradient id="glow1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 210) rotate(48) scale(460 360)">
      <stop stop-color="#2563EB" stop-opacity="0.48"/>
      <stop offset="1" stop-color="#2563EB" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(770 650) rotate(90) scale(380 320)">
      <stop stop-color="#06B6D4" stop-opacity="0.42"/>
      <stop offset="1" stop-color="#06B6D4" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="suit" x1="266" y1="680" x2="720" y2="1090" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0F172A"/>
      <stop offset="1" stop-color="#1E3A8A"/>
    </linearGradient>
    <linearGradient id="face" x1="380" y1="285" x2="592" y2="610" gradientUnits="userSpaceOnUse">
      <stop stop-color="#D7B08A"/>
      <stop offset="1" stop-color="#A8734F"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="24" stdDeviation="38" flood-color="#1D4ED8" flood-opacity="0.18"/>
    </filter>
  </defs>
  <rect width="960" height="1120" fill="url(#bg)"/>
  <rect width="960" height="1120" fill="url(#glow1)"/>
  <rect width="960" height="1120" fill="url(#glow2)"/>
  <g opacity="0.34">
    <path d="M140 240H820M110 420H850M150 600H810M105 780H855M230 120V980M410 80V1040M590 110V1010M770 150V950" stroke="#2563EB" stroke-width="2"/>
    <circle cx="230" cy="240" r="8" fill="#2563EB"/>
    <circle cx="590" cy="420" r="8" fill="#06B6D4"/>
    <circle cx="410" cy="600" r="8" fill="#7C3AED"/>
    <circle cx="770" cy="780" r="8" fill="#2563EB"/>
  </g>
  <g filter="url(#shadow)">
    <path d="M232 1092C250 870 327 704 480 704C633 704 710 870 728 1092H232Z" fill="url(#suit)"/>
    <path d="M348 1092L420 742H540L612 1092H348Z" fill="#F8FAFC"/>
    <path d="M426 740L480 842L534 740H426Z" fill="#2563EB"/>
    <path d="M384 430C384 338 422 278 481 278C539 278 578 338 578 430C578 544 535 626 481 626C426 626 384 544 384 430Z" fill="url(#face)"/>
    <path d="M368 386C378 290 418 232 486 232C554 232 603 298 597 407C560 365 492 349 416 364C398 367 382 374 368 386Z" fill="#151827"/>
    <path d="M385 438C367 432 354 448 360 476C366 504 383 515 394 506" stroke="#A8734F" stroke-width="15" stroke-linecap="round"/>
    <path d="M575 438C594 432 606 448 600 476C594 504 577 515 566 506" stroke="#A8734F" stroke-width="15" stroke-linecap="round"/>
    <path d="M438 528C468 548 497 548 525 528" stroke="#6B3E2A" stroke-width="10" stroke-linecap="round"/>
    <path d="M398 700C429 754 450 790 480 842C510 790 531 754 562 700" stroke="#93C5FD" stroke-width="18" stroke-linecap="round"/>
  </g>
  <g opacity="0.9">
    <rect x="104" y="126" width="244" height="92" rx="28" fill="white" fill-opacity="0.82"/>
    <path d="M142 180H308" stroke="#2563EB" stroke-width="10" stroke-linecap="round"/>
    <path d="M142 158H250" stroke="#0F172A" stroke-width="10" stroke-linecap="round"/>
    <rect x="650" y="238" width="196" height="72" rx="24" fill="white" fill-opacity="0.78"/>
    <circle cx="694" cy="274" r="18" fill="#06B6D4"/>
    <path d="M728 274H804" stroke="#0F172A" stroke-width="10" stroke-linecap="round"/>
  </g>
</svg>`;

const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ogbg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F8FAFC"/>
      <stop offset="0.55" stop-color="#EAF2FF"/>
      <stop offset="1" stop-color="#DDFBFF"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#ogbg)"/>
  <circle cx="982" cy="120" r="250" fill="#2563EB" fill-opacity="0.16"/>
  <circle cx="145" cy="550" r="260" fill="#06B6D4" fill-opacity="0.18"/>
  <g opacity="0.25">
    <path d="M90 120H1110M90 270H1110M90 420H1110M180 70V560M420 70V560M660 70V560M900 70V560" stroke="#2563EB" stroke-width="2"/>
  </g>
  <rect x="86" y="82" width="1028" height="466" rx="48" fill="white" fill-opacity="0.78" stroke="white" stroke-width="2"/>
  <rect x="136" y="136" width="86" height="86" rx="28" fill="#2563EB"/>
  <text x="162" y="191" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="800" fill="white">AS</text>
  <text x="136" y="304" font-family="Inter, Arial, sans-serif" font-size="76" font-weight="760" fill="#0F172A">Asim Shrestha</text>
  <text x="140" y="368" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="620" fill="#2563EB">AI Marketing Expert &amp; Consultant</text>
  <text x="140" y="442" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="460" fill="#475569">Strategy, SEO, ads, automation, analytics, and growth systems.</text>
  <path d="M820 372C872 278 956 242 1040 260" stroke="#06B6D4" stroke-width="18" stroke-linecap="round"/>
  <path d="M806 438C892 430 974 384 1058 306" stroke="#2563EB" stroke-width="18" stroke-linecap="round"/>
  <circle cx="820" cy="372" r="18" fill="#06B6D4"/>
  <circle cx="1058" cy="306" r="18" fill="#2563EB"/>
</svg>`;

await sharp(Buffer.from(portraitSvg))
  .webp({ quality: 92 })
  .toFile(path.join(publicDir, "asim-ai-portrait.webp"));
await sharp(Buffer.from(ogSvg))
  .png()
  .toFile(path.join(publicDir, "og-image.png"));
