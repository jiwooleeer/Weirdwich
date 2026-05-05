// ══════════════════════════════════════════════════════════
//  SVG INGREDIENT ILLUSTRATIONS
// ══════════════════════════════════════════════════════════

const SVG = {

  bread_bottom: `<svg viewBox="0 0 220 55" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bg_bread" cx="50%" cy="30%"><stop offset="0%" stop-color="#F5C97A"/><stop offset="100%" stop-color="#C8842A"/></radialGradient>
      <radialGradient id="bg_crust" cx="50%" cy="30%"><stop offset="0%" stop-color="#E8A03A"/><stop offset="100%" stop-color="#A85A10"/></radialGradient>
    </defs>
    <rect x="4" y="30" width="212" height="20" rx="6" fill="url(#bg_crust)" opacity="0.9"/>
    <rect x="0" y="10" width="220" height="32" rx="8" fill="url(#bg_bread)"/>
    <ellipse cx="55" cy="22" rx="4" ry="2" fill="#E8C050" opacity="0.7"/>
    <ellipse cx="75" cy="18" rx="3.5" ry="1.8" fill="#E8C050" opacity="0.7"/>
    <ellipse cx="110" cy="20" rx="4" ry="2" fill="#E8C050" opacity="0.7"/>
    <ellipse cx="145" cy="17" rx="3.5" ry="1.8" fill="#E8C050" opacity="0.7"/>
    <ellipse cx="165" cy="22" rx="4" ry="2" fill="#E8C050" opacity="0.7"/>
    <rect x="16" y="12" width="188" height="6" rx="3" fill="rgba(255,255,255,0.22)"/>
  </svg>`,

  bread_top: `<svg viewBox="0 0 220 80" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bt_grad" cx="50%" cy="35%"><stop offset="0%" stop-color="#F5C97A"/><stop offset="100%" stop-color="#C8842A"/></radialGradient>
      <radialGradient id="bt_crust" cx="50%" cy="60%"><stop offset="0%" stop-color="#E8A03A"/><stop offset="100%" stop-color="#A85A10"/></radialGradient>
    </defs>
    <rect x="4" y="54" width="212" height="16" rx="6" fill="url(#bt_crust)" opacity="0.85"/>
    <ellipse cx="110" cy="38" rx="106" ry="34" fill="url(#bt_grad)"/>
    <ellipse cx="68" cy="28" rx="5" ry="2.5" fill="#E8C050" opacity="0.75" transform="rotate(-15 68 28)"/>
    <ellipse cx="95" cy="18" rx="4.5" ry="2.2" fill="#E8C050" opacity="0.75" transform="rotate(10 95 18)"/>
    <ellipse cx="125" cy="16" rx="5" ry="2.5" fill="#E8C050" opacity="0.75" transform="rotate(-5 125 16)"/>
    <ellipse cx="152" cy="25" rx="4.5" ry="2.2" fill="#E8C050" opacity="0.75" transform="rotate(12 152 25)"/>
    <ellipse cx="90" cy="24" rx="44" ry="12" fill="rgba(255,255,255,0.2)"/>
  </svg>`,

  cheese: `<svg viewBox="0 0 220 50" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="ch_g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFE566"/><stop offset="100%" stop-color="#F5C820"/></linearGradient></defs>
    <rect x="2" y="8" width="216" height="28" rx="4" fill="url(#ch_g)"/>
    <ellipse cx="55" cy="22" rx="8" ry="6" fill="rgba(0,0,0,0.07)"/>
    <ellipse cx="120" cy="18" rx="6" ry="5" fill="rgba(0,0,0,0.07)"/>
    <ellipse cx="170" cy="24" rx="9" ry="6" fill="rgba(0,0,0,0.07)"/>
    <path d="M18 36 Q14 46 20 52 Q24 40 22 36Z" fill="#F5C820"/>
    <path d="M195 34 Q192 46 198 52 Q202 40 200 34Z" fill="#F5C820"/>
    <rect x="14" y="10" width="120" height="5" rx="2.5" fill="rgba(255,255,255,0.3)"/>
  </svg>`,

  lettuce: `<svg viewBox="0 0 220 52" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 34 Q18 8 38 28 Q55 6 75 30 Q92 4 112 26 Q130 2 150 28 Q168 5 188 24 Q204 8 220 30 L220 52 Q0 52 0 52Z" fill="#6CC04A"/>
    <path d="M0 40 Q20 18 40 34 Q58 14 78 36 Q96 12 116 32 Q134 10 154 34 Q172 14 192 30 Q206 18 220 36 L220 52 Q0 52 0 52Z" fill="#89D866" opacity="0.7"/>
    <path d="M110 52 Q108 32 110 15" stroke="#4A9932" stroke-width="1.5" fill="none" opacity="0.5"/>
    <path d="M55 52 Q54 36 56 22" stroke="#4A9932" stroke-width="1" fill="none" opacity="0.4"/>
    <path d="M165 52 Q164 36 166 21" stroke="#4A9932" stroke-width="1" fill="none" opacity="0.4"/>
  </svg>`,

  tomato: `<svg viewBox="0 0 220 40" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="tom_g" cx="40%" cy="35%"><stop offset="0%" stop-color="#FF7B6B"/><stop offset="100%" stop-color="#E82C1A"/></radialGradient></defs>
    <ellipse cx="85" cy="20" rx="78" ry="16" fill="url(#tom_g)" opacity="0.95"/>
    <ellipse cx="148" cy="20" rx="68" ry="15" fill="url(#tom_g)" opacity="0.88"/>
    <ellipse cx="55" cy="20" rx="5" ry="4" fill="rgba(255,220,180,0.5)"/>
    <ellipse cx="80" cy="15" rx="4" ry="3.5" fill="rgba(255,220,180,0.5)"/>
    <ellipse cx="100" cy="24" rx="4.5" ry="3.5" fill="rgba(255,220,180,0.5)"/>
    <ellipse cx="128" cy="17" rx="4" ry="3.5" fill="rgba(255,220,180,0.45)"/>
    <ellipse cx="155" cy="23" rx="5" ry="4" fill="rgba(255,220,180,0.45)"/>
    <ellipse cx="172" cy="16" rx="4" ry="3" fill="rgba(255,220,180,0.45)"/>
    <ellipse cx="65" cy="13" rx="22" ry="5" fill="rgba(255,255,255,0.22)"/>
  </svg>`,

  bacon: `<svg viewBox="0 0 220 44" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bac_g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#E86040"/><stop offset="100%" stop-color="#C03A20"/></linearGradient>
      <linearGradient id="fat_g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FAEAC8"/><stop offset="100%" stop-color="#F0D8A0"/></linearGradient>
    </defs>
    <path d="M5 14 Q30 4 55 18 Q80 30 105 16 Q130 4 155 18 Q180 30 205 15 L210 28 Q185 40 160 26 Q135 12 110 26 Q85 40 60 26 Q35 14 10 26Z" fill="url(#bac_g)"/>
    <path d="M5 14 Q30 4 55 18 Q60 19 66 16 Q42 5 14 14Z" fill="url(#fat_g)" opacity="0.8"/>
    <path d="M116 15 Q140 4 165 17 Q146 5 120 13Z" fill="url(#fat_g)" opacity="0.8"/>
    <path d="M70 10 Q72 22 70 28" stroke="rgba(100,30,10,0.4)" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M130 8 Q132 20 130 26" stroke="rgba(100,30,10,0.4)" stroke-width="2" fill="none" stroke-linecap="round"/>
  </svg>`,

  egg: `<svg viewBox="0 0 220 56" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="wh_g" cx="50%" cy="50%"><stop offset="0%" stop-color="#FFFEF8"/><stop offset="100%" stop-color="#F0EEE0"/></radialGradient>
      <radialGradient id="yk_g" cx="42%" cy="38%"><stop offset="0%" stop-color="#FFE85A"/><stop offset="60%" stop-color="#FFB820"/><stop offset="100%" stop-color="#E88010"/></radialGradient>
    </defs>
    <path d="M20 30 Q15 8 60 10 Q100 4 130 12 Q180 6 200 22 Q215 36 195 46 Q160 56 110 50 Q60 56 28 48Z" fill="url(#wh_g)"/>
    <ellipse cx="95" cy="28" rx="28" ry="26" fill="url(#yk_g)"/>
    <ellipse cx="84" cy="20" rx="9" ry="7" fill="rgba(255,255,255,0.35)"/>
    <path d="M20 30 Q15 8 60 10 Q100 4 130 12 Q180 6 200 22" stroke="#E8D890" stroke-width="2" fill="none" opacity="0.5"/>
  </svg>`,

  mayo: `<svg viewBox="0 0 220 30" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 22 Q30 4 50 18 Q70 32 90 14 Q110 0 130 16 Q150 30 170 12 Q190 -2 210 14" stroke="#FFFDE0" stroke-width="11" fill="none" stroke-linecap="round"/>
    <path d="M10 22 Q30 4 50 18 Q70 32 90 14 Q110 0 130 16 Q150 30 170 12 Q190 -2 210 14" stroke="#F5F0C0" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.6"/>
    <path d="M10 24 Q30 8 50 20 Q70 34 90 16 Q110 2 130 18 Q150 32 170 14 Q190 0 210 16" stroke="rgba(180,170,100,0.2)" stroke-width="6" fill="none" stroke-linecap="round"/>
  </svg>`,

  patty: `<svg viewBox="0 0 220 48" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="pat_g" cx="50%" cy="30%"><stop offset="0%" stop-color="#8B5A2B"/><stop offset="100%" stop-color="#5A2E0A"/></radialGradient></defs>
    <rect x="6" y="8" width="208" height="32" rx="10" fill="url(#pat_g)"/>
    <path d="M50 10 L44 40" stroke="rgba(0,0,0,0.25)" stroke-width="5" stroke-linecap="round"/>
    <path d="M90 9 L84 39" stroke="rgba(0,0,0,0.25)" stroke-width="5" stroke-linecap="round"/>
    <path d="M130 9 L124 39" stroke="rgba(0,0,0,0.25)" stroke-width="5" stroke-linecap="round"/>
    <path d="M170 9 L164 39" stroke="rgba(0,0,0,0.25)" stroke-width="5" stroke-linecap="round"/>
    <rect x="20" y="10" width="140" height="7" rx="3" fill="rgba(255,255,255,0.1)"/>
    <rect x="6" y="36" width="208" height="4" rx="4" fill="rgba(0,0,0,0.2)"/>
  </svg>`,

  onion: `<svg viewBox="0 0 220 40" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="on_g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#F0C8F0"/><stop offset="100%" stop-color="#C880C8"/></linearGradient></defs>
    <ellipse cx="75" cy="20" rx="68" ry="15" fill="none" stroke="url(#on_g)" stroke-width="9" opacity="0.9"/>
    <ellipse cx="130" cy="20" rx="50" ry="12" fill="none" stroke="#D890D8" stroke-width="7" opacity="0.85"/>
    <ellipse cx="168" cy="20" rx="44" ry="11" fill="none" stroke="url(#on_g)" stroke-width="6" opacity="0.8"/>
    <path d="M22 14 Q60 6 100 14" stroke="rgba(255,255,255,0.4)" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`,

  pickle: `<svg viewBox="0 0 220 38" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="pic_g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7CC840"/><stop offset="100%" stop-color="#4A9018"/></linearGradient></defs>
    <ellipse cx="70" cy="19" rx="60" ry="14" fill="url(#pic_g)" opacity="0.95"/>
    <ellipse cx="158" cy="19" rx="55" ry="13" fill="url(#pic_g)" opacity="0.88"/>
    <ellipse cx="70" cy="19" rx="46" ry="10" fill="none" stroke="#5AAA28" stroke-width="2" opacity="0.6"/>
    <ellipse cx="70" cy="19" rx="28" ry="7" fill="none" stroke="#5AAA28" stroke-width="2" opacity="0.5"/>
    <ellipse cx="70" cy="19" rx="8" ry="7" fill="#4A9018" opacity="0.5"/>
    <ellipse cx="158" cy="19" rx="42" ry="9" fill="none" stroke="#5AAA28" stroke-width="2" opacity="0.55"/>
    <ellipse cx="158" cy="19" rx="24" ry="6" fill="none" stroke="#5AAA28" stroke-width="2" opacity="0.45"/>
    <ellipse cx="158" cy="19" rx="7" ry="6" fill="#4A9018" opacity="0.5"/>
    <ellipse cx="52" cy="13" rx="16" ry="4" fill="rgba(255,255,255,0.25)"/>
  </svg>`,

  ham: `<svg viewBox="0 0 220 42" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="ham_g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#F0A0A0"/><stop offset="100%" stop-color="#C86060"/></linearGradient></defs>
    <path d="M4 20 Q55 4 110 20 Q160 34 210 16 L212 30 Q162 46 110 30 Q55 14 4 34Z" fill="url(#ham_g)" opacity="0.9"/>
    <path d="M6 20 Q8 14 14 12 Q10 18 8 28 Q6 26 6 20Z" fill="rgba(255,240,230,0.6)"/>
    <path d="M60 18 Q80 12 100 20 Q80 24 60 18Z" fill="rgba(255,255,255,0.15)"/>
    <path d="M140 14 Q158 10 175 18 Q158 22 140 14Z" fill="rgba(255,255,255,0.15)"/>
  </svg>`,

  cd: `<svg viewBox="0 0 220 72" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="cd_r" cx="50%" cy="50%"><stop offset="0%" stop-color="#E8E8F8"/><stop offset="40%" stop-color="#C8D8F8" stop-opacity="0.8"/><stop offset="70%" stop-color="#E8C8F0" stop-opacity="0.6"/><stop offset="100%" stop-color="#F8E8C0" stop-opacity="0.4"/></radialGradient>
    </defs>
    <ellipse cx="110" cy="36" rx="82" ry="32" fill="url(#cd_r)"/>
    <ellipse cx="110" cy="36" rx="82" ry="32" fill="none" stroke="rgba(180,180,220,0.5)" stroke-width="2"/>
    <ellipse cx="110" cy="36" rx="64" ry="25" fill="none" stroke="rgba(200,180,255,0.35)" stroke-width="1.5"/>
    <ellipse cx="110" cy="36" rx="46" ry="18" fill="none" stroke="rgba(180,220,255,0.35)" stroke-width="1.5"/>
    <ellipse cx="110" cy="36" rx="28" ry="11" fill="none" stroke="rgba(255,200,180,0.35)" stroke-width="1.5"/>
    <ellipse cx="110" cy="36" rx="9" ry="6" fill="white" stroke="rgba(180,180,220,0.5)" stroke-width="1"/>
    <ellipse cx="84" cy="24" rx="20" ry="7" fill="rgba(255,255,255,0.3)" transform="rotate(-10 84 24)"/>
  </svg>`,

  receipt: `<svg viewBox="0 0 220 92" xmlns="http://www.w3.org/2000/svg">
    <rect x="65" y="0" width="90" height="87" rx="3" fill="#FDFAF0"/>
    <rect x="65" y="0" width="90" height="87" rx="3" fill="none" stroke="#E8E0D0" stroke-width="1.5"/>
    <path d="M65 87 Q70 82 75 87 Q80 92 85 86 Q90 81 95 86 Q100 91 105 85 Q110 80 115 85 Q120 90 125 84 Q130 79 135 85 Q140 90 145 85 Q148 82 155 87 L155 92 Q65 92 65 92Z" fill="#F5F0E0"/>
    <rect x="75" y="10" width="60" height="3" rx="1.5" fill="#C8C0A8"/>
    <rect x="78" y="17" width="40" height="2" rx="1" fill="#D8D0B8" opacity="0.7"/>
    <rect x="73" y="25" width="55" height="2" rx="1" fill="#D0C8B0"/>
    <rect x="73" y="30" width="45" height="2" rx="1" fill="#D0C8B0"/>
    <rect x="73" y="35" width="50" height="2" rx="1" fill="#D0C8B0"/>
    <rect x="73" y="40" width="35" height="2" rx="1" fill="#D0C8B0"/>
    <rect x="73" y="48" width="74" height="1" rx="0.5" fill="#C0B898"/>
    <rect x="73" y="52" width="55" height="3" rx="1.5" fill="#B0A880"/>
    <rect x="78" y="63" width="3" height="12" rx="0.5" fill="#A8A090"/>
    <rect x="83" y="63" width="1.5" height="12" rx="0.5" fill="#A8A090"/>
    <rect x="87" y="63" width="4" height="12" rx="0.5" fill="#A8A090"/>
    <rect x="93" y="63" width="2" height="12" rx="0.5" fill="#A8A090"/>
    <rect x="97" y="63" width="3" height="12" rx="0.5" fill="#A8A090"/>
    <rect x="102" y="63" width="1.5" height="12" rx="0.5" fill="#A8A090"/>
    <rect x="106" y="63" width="4" height="12" rx="0.5" fill="#A8A090"/>
    <rect x="112" y="63" width="2" height="12" rx="0.5" fill="#A8A090"/>
    <rect x="116" y="63" width="3" height="12" rx="0.5" fill="#A8A090"/>
    <rect x="121" y="63" width="1.5" height="12" rx="0.5" fill="#A8A090"/>
    <rect x="124" y="63" width="4" height="12" rx="0.5" fill="#A8A090"/>
    <rect x="130" y="63" width="2" height="12" rx="0.5" fill="#A8A090"/>
  </svg>`,

  rock: `<svg viewBox="0 0 220 62" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="rk_g" cx="35%" cy="30%"><stop offset="0%" stop-color="#B8B4AC"/><stop offset="100%" stop-color="#706C68"/></radialGradient>
      <radialGradient id="rk2_g" cx="40%" cy="35%"><stop offset="0%" stop-color="#A0A098"/><stop offset="100%" stop-color="#585550"/></radialGradient>
    </defs>
    <path d="M30 42 Q20 20 40 10 Q70 2 110 8 Q150 2 170 14 Q192 22 185 40 Q178 54 140 56 Q100 62 60 56 Q32 54 30 42Z" fill="url(#rk_g)"/>
    <path d="M150 46 Q142 30 155 24 Q172 20 184 32 Q190 42 180 50 Q168 56 155 54 Q148 52 150 46Z" fill="url(#rk2_g)"/>
    <path d="M90 14 Q95 28 88 42" stroke="rgba(0,0,0,0.15)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M70 20 Q78 30 72 44" stroke="rgba(0,0,0,0.12)" stroke-width="1" fill="none" stroke-linecap="round"/>
    <path d="M50 14 Q80 8 110 12" stroke="rgba(255,255,255,0.3)" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M160 28 Q172 26 180 32" stroke="rgba(255,255,255,0.25)" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`,

  eyeball: `<svg viewBox="0 0 220 58" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="eye_g" cx="42%" cy="38%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="100%" stop-color="#E8E4E0"/></radialGradient>
      <radialGradient id="iris_g" cx="40%" cy="35%"><stop offset="0%" stop-color="#6B9EE8"/><stop offset="100%" stop-color="#2A5A9E"/></radialGradient>
    </defs>
    <ellipse cx="72" cy="29" rx="62" ry="25" fill="url(#eye_g)"/>
    <ellipse cx="72" cy="29" rx="62" ry="25" fill="none" stroke="#D8D4D0" stroke-width="1.5"/>
    <ellipse cx="72" cy="29" rx="18" ry="18" fill="url(#iris_g)"/>
    <ellipse cx="72" cy="29" rx="9" ry="9" fill="#0A0A14"/>
    <ellipse cx="64" cy="22" rx="5" ry="4" fill="rgba(255,255,255,0.75)"/>
    <ellipse cx="78" cy="32" rx="2.5" ry="2" fill="rgba(255,255,255,0.4)"/>
    <path d="M15 22 Q40 24 60 27" stroke="rgba(220,100,100,0.35)" stroke-width="0.8" fill="none"/>
    <path d="M120 18 Q100 22 90 27" stroke="rgba(220,100,100,0.35)" stroke-width="0.8" fill="none"/>
    <ellipse cx="162" cy="29" rx="52" ry="23" fill="url(#eye_g)" opacity="0.9"/>
    <ellipse cx="162" cy="29" rx="52" ry="23" fill="none" stroke="#D8D4D0" stroke-width="1.5"/>
    <ellipse cx="162" cy="29" rx="15" ry="15" fill="url(#iris_g)"/>
    <ellipse cx="162" cy="29" rx="7" ry="7" fill="#0A0A14"/>
    <ellipse cx="155" cy="22" rx="4" ry="3" fill="rgba(255,255,255,0.75)"/>
  </svg>`,

  toy: `<svg viewBox="0 0 220 72" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="110" cy="52" rx="46" ry="22" fill="#D4956A"/>
    <ellipse cx="110" cy="28" rx="30" ry="26" fill="#D4956A"/>
    <ellipse cx="82" cy="10" rx="14" ry="12" fill="#D4956A"/>
    <ellipse cx="82" cy="10" rx="8" ry="7" fill="#E8B090"/>
    <ellipse cx="138" cy="10" rx="14" ry="12" fill="#D4956A"/>
    <ellipse cx="138" cy="10" rx="8" ry="7" fill="#E8B090"/>
    <ellipse cx="110" cy="30" rx="20" ry="18" fill="#E8B090"/>
    <ellipse cx="101" cy="24" rx="4" ry="4.5" fill="#2A1A0A"/>
    <ellipse cx="119" cy="24" rx="4" ry="4.5" fill="#2A1A0A"/>
    <ellipse cx="100" cy="23" rx="1.5" ry="1.5" fill="rgba(255,255,255,0.8)"/>
    <ellipse cx="118" cy="23" rx="1.5" ry="1.5" fill="rgba(255,255,255,0.8)"/>
    <ellipse cx="110" cy="32" rx="5" ry="3.5" fill="#4A2A10"/>
    <path d="M104 37 Q110 42 116 37" stroke="#4A2A10" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  </svg>`,

  key: `<svg viewBox="0 0 220 58" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="key_g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FFE090"/><stop offset="100%" stop-color="#C8980A"/></linearGradient></defs>
    <circle cx="68" cy="29" r="22" fill="none" stroke="url(#key_g)" stroke-width="10"/>
    <circle cx="68" cy="29" r="9" fill="none" stroke="url(#key_g)" stroke-width="4"/>
    <rect x="85" y="24" width="115" height="10" rx="5" fill="url(#key_g)"/>
    <rect x="148" y="34" width="10" height="12" rx="3" fill="url(#key_g)"/>
    <rect x="166" y="34" width="8" height="9" rx="2.5" fill="url(#key_g)"/>
    <rect x="182" y="34" width="10" height="14" rx="3" fill="url(#key_g)"/>
    <path d="M52 12 Q64 6 76 12" stroke="rgba(255,255,255,0.45)" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`,

  plant: `<svg viewBox="0 0 220 82" xmlns="http://www.w3.org/2000/svg">
    <path d="M80 72 Q85 64 90 62 L130 62 Q135 64 140 72 Q138 80 110 82 Q82 80 80 72Z" fill="#D4704A"/>
    <rect x="82" y="58" width="56" height="8" rx="4" fill="#E08060"/>
    <ellipse cx="110" cy="62" rx="26" ry="6" fill="#6A3E20"/>
    <path d="M110 60 Q108 44 112 30" stroke="#4A9032" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M112 40 Q138 24 148 10 Q128 18 112 36Z" fill="#5AB840"/>
    <path d="M108 48 Q78 38 64 24 Q84 34 108 48Z" fill="#6CC84A"/>
    <path d="M111 32 Q120 12 132 4 Q118 16 112 32Z" fill="#4AA830"/>
    <ellipse cx="112" cy="28" rx="6" ry="5" fill="#FFD020"/>
    <ellipse cx="104" cy="24" rx="5" ry="4" fill="#FF8040"/>
    <ellipse cx="120" cy="24" rx="5" ry="4" fill="#FF8040"/>
    <ellipse cx="112" cy="18" rx="5" ry="4" fill="#FF8040"/>
  </svg>`,

  magnet: `<svg viewBox="0 0 220 66" xmlns="http://www.w3.org/2000/svg">
    <path d="M45 56 L45 26 Q45 6 75 6 Q105 6 105 26 L105 56" stroke="#E83028" stroke-width="22" fill="none" stroke-linecap="round"/>
    <rect x="34" y="46" width="22" height="16" rx="4" fill="#2050D8"/>
    <rect x="94" y="46" width="22" height="16" rx="4" fill="#2050D8"/>
    <path d="M50 22 Q52 10 68 7" stroke="rgba(255,255,255,0.3)" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M120 40 L134 36 M120 48 L134 52 M122 44 L140 44" stroke="#FFD020" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  </svg>`,

  anxiety_cream: `<svg viewBox="0 0 220 38" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="55" cy="18" rx="42" ry="14" fill="#F0EEFF"/>
    <ellipse cx="125" cy="18" rx="38" ry="12" fill="#E8E4FF"/>
    <ellipse cx="185" cy="20" rx="30" ry="11" fill="#F0EEFF"/>
    <path d="M35 14 Q55 4 75 14" stroke="#C8C0F0" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M100 14 Q125 6 148 14" stroke="#C0B8F0" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M58 8 Q60 3 62 8 Q62 12 60 12 Q58 12 58 8Z" fill="#A0D8FF" opacity="0.8"/>
    <path d="M125 6 Q127 2 129 6 Q129 10 127 10 Q125 10 125 6Z" fill="#A0D8FF" opacity="0.8"/>
    <path d="M188 10 Q190 6 192 10 Q192 13 190 13 Q188 13 188 10Z" fill="#A0D8FF" opacity="0.7"/>
  </svg>`,

  obsession_cheese: `<svg viewBox="0 0 220 52" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="oc_g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFB0D8"/><stop offset="100%" stop-color="#FF70B0"/></linearGradient></defs>
    <rect x="2" y="8" width="216" height="28" rx="4" fill="url(#oc_g)"/>
    <text x="52" y="28" text-anchor="middle" font-size="14" fill="rgba(180,40,80,0.5)">♥</text>
    <text x="110" y="26" text-anchor="middle" font-size="12" fill="rgba(180,40,80,0.5)">♥</text>
    <text x="168" y="29" text-anchor="middle" font-size="14" fill="rgba(180,40,80,0.5)">♥</text>
    <path d="M20 36 Q16 48 22 54 Q26 42 24 36Z" fill="#FF70B0"/>
    <path d="M190 35 Q187 48 193 53 Q197 42 195 35Z" fill="#FF70B0"/>
    <rect x="14" y="10" width="120" height="5" rx="2.5" fill="rgba(255,255,255,0.3)"/>
  </svg>`,

  avoidance_sauce: `<svg viewBox="0 0 220 34" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 24 Q20 12 35 20" stroke="#A8A8B8" stroke-width="8" fill="none" stroke-linecap="round" opacity="0.7"/>
    <path d="M80 17 Q100 10 120 18 Q135 24 155 14" stroke="#9898A8" stroke-width="8" fill="none" stroke-linecap="round" opacity="0.6"/>
    <path d="M175 22 Q190 14 210 20" stroke="#A8A8B8" stroke-width="7" fill="none" stroke-linecap="round" opacity="0.65"/>
    <circle cx="5" cy="24" r="4" fill="#9898A8" opacity="0.5"/>
    <circle cx="210" cy="20" r="3.5" fill="#9898A8" opacity="0.5"/>
  </svg>`,

  burnout_spread: `<svg viewBox="0 0 220 32" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="10" width="216" height="14" rx="5" fill="#9A8878" opacity="0.75"/>
    <path d="M20 13 Q60 10 100 14 Q140 18 180 13 Q195 11 210 15" stroke="rgba(255,255,255,0.12)" stroke-width="3" fill="none"/>
    <text x="80" y="22" font-family="sans-serif" font-size="10" fill="rgba(255,255,255,0.35)" letter-spacing="4">z z z</text>
  </svg>`,

  dissociation_butter: `<svg viewBox="0 0 220 38" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="db_g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#C8E8FF" stop-opacity="0.9"/><stop offset="100%" stop-color="#A0C8FF" stop-opacity="0.5"/></linearGradient></defs>
    <rect x="30" y="6" width="160" height="26" rx="5" fill="url(#db_g)"/>
    <rect x="30" y="6" width="160" height="26" rx="5" fill="none" stroke="rgba(140,180,255,0.5)" stroke-width="1.5"/>
    <rect x="38" y="9" width="90" height="5" rx="2.5" fill="rgba(255,255,255,0.4)"/>
    <circle cx="22" cy="14" r="3" fill="#B0D8FF" opacity="0.4"/>
    <circle cx="200" cy="24" r="2.5" fill="#B0D8FF" opacity="0.35"/>
    <circle cx="14" cy="28" r="2" fill="#B0D8FF" opacity="0.3"/>
    <circle cx="208" cy="10" r="2" fill="#B0D8FF" opacity="0.3"/>
  </svg>`,

  impulse_dressing: `<svg viewBox="0 0 220 42" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 26 L28 8 L52 30 L76 6 L100 28 L124 5 L148 26 L172 7 L196 24 L215 12" stroke="#FF3020" stroke-width="7" fill="none" stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="30" cy="37" r="3" fill="#FF3020" opacity="0.7"/>
    <circle cx="100" cy="37" r="2.5" fill="#FF3020" opacity="0.6"/>
    <circle cx="168" cy="5" r="3" fill="#FF5040" opacity="0.6"/>
    <circle cx="60" cy="39" r="2" fill="#FF3020" opacity="0.5"/>
    <circle cx="140" cy="4" r="2.5" fill="#FF4030" opacity="0.6"/>
    <path d="M5 26 L28 8 L52 30 L76 6 L100 28" stroke="rgba(255,180,170,0.4)" stroke-width="3" fill="none" stroke-linejoin="round" stroke-linecap="round"/>
  </svg>`,
};

// ── Ingredient Data ──────────────────────────────────────────────
const INGREDIENTS = {
  normal: [
    { id:'cheese',  name:'체다 치즈',      tag:'normal', layerH:50,  svg:SVG.cheese  },
    { id:'lettuce', name:'양상추',          tag:'normal', layerH:52,  svg:SVG.lettuce },
    { id:'tomato',  name:'슬라이스 토마토', tag:'normal', layerH:40,  svg:SVG.tomato  },
    { id:'bacon',   name:'베이컨',          tag:'normal', layerH:44,  svg:SVG.bacon   },
    { id:'egg',     name:'계란 프라이',     tag:'normal', layerH:56,  svg:SVG.egg     },
    { id:'mayo',    name:'마요네즈',        tag:'sauce',  layerH:30,  svg:SVG.mayo    },
    { id:'patty',   name:'불고기 패티',     tag:'normal', layerH:48,  svg:SVG.patty   },
    { id:'onion',   name:'양파 링',         tag:'normal', layerH:40,  svg:SVG.onion   },
    { id:'pickle',  name:'피클',            tag:'normal', layerH:38,  svg:SVG.pickle  },
    { id:'ham',     name:'햄',              tag:'normal', layerH:42,  svg:SVG.ham     },
  ],
  weird: [
    { id:'cd',      name:'CD (음악용)',      tag:'weird', layerH:72,  svg:SVG.cd      },
    { id:'receipt', name:'영수증 (꽤 긺)',   tag:'weird', layerH:92,  svg:SVG.receipt },
    { id:'rock',    name:'돌멩이',           tag:'weird', layerH:62,  svg:SVG.rock    },
    { id:'eyeball', name:'눈알 (장식용)',    tag:'weird', layerH:58,  svg:SVG.eyeball },
    { id:'toy',     name:'곰돌이',           tag:'weird', layerH:72,  svg:SVG.toy     },
    { id:'key',     name:'열쇠 (어느 집?)', tag:'weird', layerH:58,  svg:SVG.key     },
    { id:'plant',   name:'작은 화분',        tag:'weird', layerH:82,  svg:SVG.plant   },
    { id:'magnet',  name:'자석',             tag:'weird', layerH:66,  svg:SVG.magnet  },
  ],
  mood: [
    { id:'anxiety',     name:'불안 크림',       tag:'mood', layerH:38, svg:SVG.anxiety_cream     },
    { id:'obsession',   name:'집착 치즈',       tag:'mood', layerH:52, svg:SVG.obsession_cheese  },
    { id:'avoidance',   name:'회피 소스',       tag:'mood', layerH:34, svg:SVG.avoidance_sauce   },
    { id:'burnout',     name:'번아웃 스프레드', tag:'mood', layerH:32, svg:SVG.burnout_spread    },
    { id:'dissociate',  name:'해리 버터',       tag:'mood', layerH:38, svg:SVG.dissociation_butter},
    { id:'impulse',     name:'충동 드레싱',     tag:'mood', layerH:42, svg:SVG.impulse_dressing  },
  ],
};

const BOTTOM_BREAD = { id:'bread_bottom', name:'아랫 빵', tag:'bread', layerH:55, svg:SVG.bread_bottom };
const TOP_BREAD    = { id:'bread_top',    name:'윗 빵',  tag:'bread', layerH:80, svg:SVG.bread_top    };

// ── Result ────────────────────────────────────────────────────────
const ADJ  = ['뒤틀린','불가사의한','전설의','금지된','비밀의','신비로운','위험한','수상한'];
const NOUN = ['걸작','악몽','예술품','유산','비극','기적','실수','유물'];
const SUBS = ['먹어도 되는지는 모름','세계보건기구 미승인','맛은 보장 못함','배달 불가 (이유 없음)','FDA 심사 중','이걸 먹은 사람은 없다','향은 독특합니다'];
const EMOJ = ['🏆','🤯','💀','✨','🎪','🌀','👁️','🎭'];
const rnd = arr => arr[Math.floor(Math.random()*arr.length)];

// ── State ─────────────────────────────────────────────────────────
const MAX_LAYERS = 6;
let state = { step:0, layers:[], slotRunning:true, currentItem:null };
let stackTopY = 0;

// ── DOM ───────────────────────────────────────────────────────────
const slotTrack       = document.getElementById('slotTrack');
const slotWrapper     = document.getElementById('slotWrapper');
const layersContainer = document.getElementById('layersContainer');
const stage           = document.getElementById('stage');
const addBtn          = document.getElementById('addBtn');
const resetBtn        = document.getElementById('resetBtn');
const stepText        = document.getElementById('stepText');
const stepDots        = document.getElementById('stepDots');
const resultOverlay   = document.getElementById('resultOverlay');
const resultTitle     = document.getElementById('resultTitle');
const resultSubtitle  = document.getElementById('resultSubtitle');
const resultIngredients = document.getElementById('resultIngredients');
const resultResetBtn  = document.getElementById('resultResetBtn');
const resultEmoji     = document.querySelector('.result-emoji');

// ── Slot ──────────────────────────────────────────────────────────
function buildPool() {
  const all = [...INGREDIENTS.normal, ...INGREDIENTS.weird, ...INGREDIENTS.mood];
  const s = [...all].sort(()=>Math.random()-0.5);
  return [...s,...s,...s];
}
let pool = buildPool();
let slotOffset = 0;
const SLOT_W = 100;
let stopRequested = false;
let currentSlotIndex = 0;
let slotRaf = null;

function buildSlotDOM() {
  slotTrack.innerHTML = '';
  pool.forEach(item => {
    const div = document.createElement('div');
    div.className = 'slot-item';
    const w = document.createElement('div');
    w.style.cssText = 'width:76px;height:60px;display:flex;align-items:center;justify-content:center;overflow:hidden;';
    w.innerHTML = item.svg;
    const s = w.querySelector('svg');
    if (s) { s.style.width='76px'; s.style.height='60px'; s.style.filter='drop-shadow(0 2px 8px rgba(0,0,0,0.3))'; }
    div.appendChild(w);
    slotTrack.appendChild(div);
  });
}

function animateSlot() {
  if (!state.slotRunning) return;
  slotOffset += 2.4;
  const totalW = pool.length * SLOT_W;
  if (slotOffset >= totalW / 2) slotOffset -= totalW / 2;
  slotTrack.style.transform = `translateX(-${slotOffset}px)`;
  if (stopRequested) {
    const wrapW = slotWrapper.offsetWidth;
    const center = slotOffset + wrapW / 2;
    const nearest = Math.round(center / SLOT_W);
    const target = nearest * SLOT_W - wrapW / 2;
    slotOffset += (target - slotOffset) * 0.16;
    slotTrack.style.transform = `translateX(-${slotOffset}px)`;
    if (Math.abs(target - slotOffset) < 0.5) {
      slotOffset = target;
      state.slotRunning = false;
      stopRequested = false;
      currentSlotIndex = ((nearest % pool.length) + pool.length) % pool.length;
      state.currentItem = pool[currentSlotIndex];
      slotWrapper.classList.add('stopped');
      addBtn.classList.remove('picking');
      addBtn.querySelector('.btn-text').textContent = '이 재료 넣기!';
      addBtn.querySelector('.btn-icon').textContent = '⬇';
      return;
    }
  }
  slotRaf = requestAnimationFrame(animateSlot);
}

function startSlot() { state.slotRunning=true; slotWrapper.classList.remove('stopped'); stopRequested=false; slotRaf=requestAnimationFrame(animateSlot); }
function stopSlot()  { stopRequested=true; slotRaf=requestAnimationFrame(animateSlot); }

// ── Drop Layer ────────────────────────────────────────────────────
function getPlateY() { return stage.offsetHeight - 22; }

function dropLayer(item) {
  return new Promise(resolve => {
    const el = document.createElement('div');
    el.className = 'layer-item';
    const svgH = item.layerH;
    const finalY = getPlateY() - stackTopY - svgH;
    const rx = (Math.random()-0.5)*34;
    const rot = (Math.random()-0.5)*5;

    el.innerHTML = item.svg;
    const svgEl = el.querySelector('svg');
    if (svgEl) { svgEl.style.width='220px'; svgEl.style.height=svgH+'px'; }
    el.style.cssText = `top:-${svgH+20}px;transform:translateX(calc(-50% + ${rx}px)) rotate(${rot}deg);width:220px;`;
    layersContainer.appendChild(el);

    requestAnimationFrame(()=>{
      el.style.transition = 'top 0.48s cubic-bezier(0.5,0,0.85,0)';
      el.style.top = finalY+'px';
      setTimeout(()=>{
        el.style.transition='top 0.1s ease-out'; el.style.top=(finalY-18)+'px';
        setTimeout(()=>{
          el.style.transition='top 0.09s ease-in'; el.style.top=(finalY+6)+'px';
          setTimeout(()=>{
            el.style.transition='top 0.07s ease-out'; el.style.top=finalY+'px';
            stackTopY += svgH * 0.68;
            resolve();
          }, 90);
        }, 110);
      }, 490);
    });

    if (item.tag==='sauce'||item.tag==='mood') setTimeout(()=>spawnSauce(finalY, item), 500);
  });
}

// ── Sauce ─────────────────────────────────────────────────────────
const SAUCE_COLS = {
  sauce: ['#FFFDE0','#F5F0C0','#E8E4A0'],
  mood:  ['#C8C0F0','#FFB0D8','#A8A8B8','#C8E8FF','#FF4030','#B0D8FF'],
};

function spawnSauce(layerTop, item) {
  const cols = SAUCE_COLS[item.tag] || ['#FFF'];
  const cx = stage.offsetWidth / 2;
  const n = 3 + Math.floor(Math.random()*3);

  for (let i=0;i<n;i++) {
    setTimeout(()=>{
      const drip = document.createElement('div');
      drip.className = 'sauce-stream';
      const x = cx + (Math.random()-0.5)*160;
      const h = 20 + Math.random()*44;
      drip.style.cssText = `left:${x}px;top:${layerTop + item.layerH*0.4}px;background:${cols[Math.floor(Math.random()*cols.length)]};--stream-h:${h}px;opacity:0.88;`;
      layersContainer.appendChild(drip);
      setTimeout(()=>drip.remove(), 1300);
    }, i*75);
  }

  for (let i=0;i<8;i++) {
    const dot = document.createElement('div');
    const x = cx + (Math.random()-0.5)*200;
    const y = layerTop + item.layerH*0.75 + Math.random()*22;
    const sz = 3 + Math.random()*5;
    dot.style.cssText = `position:absolute;width:${sz}px;height:${sz}px;border-radius:50%;background:${cols[Math.floor(Math.random()*cols.length)]};left:${x}px;top:${y}px;pointer-events:none;animation:splatAppear 0.3s ease forwards;opacity:0.8;`;
    layersContainer.appendChild(dot);
    setTimeout(()=>dot.remove(), 1600);
  }
}

// ── Step UI ───────────────────────────────────────────────────────
function renderDots() {
  stepDots.innerHTML='';
  for (let i=0;i<MAX_LAYERS;i++){
    const d=document.createElement('div');
    d.className='dot';
    if (i<state.step-1) d.classList.add('done');
    if (i===state.step-1&&state.step>0) d.classList.add('active');
    stepDots.appendChild(d);
  }
}
function updateStepText() {
  if (state.step===0) { stepText.textContent='버튼을 눌러 시작!'; addBtn.querySelector('.btn-text').textContent='샌드위치 시작!'; addBtn.querySelector('.btn-icon').textContent='🥪'; }
  else if (state.step>MAX_LAYERS) { stepText.textContent='완성 중...'; }
  else { const l=MAX_LAYERS-state.step+1; stepText.textContent=`재료 ${state.step} / ${MAX_LAYERS}  —  ${l}개 남음`; }
}

// ── Main Click ────────────────────────────────────────────────────
let isDropping = false;
const sleep = ms => new Promise(r=>setTimeout(r,ms));

addBtn.addEventListener('click', async ()=>{
  if (isDropping) return;
  isDropping=true; addBtn.disabled=true; addBtn.classList.add('picking'); addBtn.querySelector('.btn-text').textContent='선택 중...';

  if (state.step===0) {
    stopSlot(); await sleep(640);
    await dropLayer(BOTTOM_BREAD);
    state.layers.push(BOTTOM_BREAD); state.step=1;
    renderDots(); updateStepText();
    addBtn.disabled=false; addBtn.classList.remove('picking');
    addBtn.querySelector('.btn-text').textContent='이 재료 넣기!'; addBtn.querySelector('.btn-icon').textContent='⬇';
    isDropping=false; startSlot(); return;
  }

  if (state.step>MAX_LAYERS) { isDropping=false; return; }
  stopSlot(); await sleep(640);

  const item = state.currentItem;
  if (!item) { isDropping=false; addBtn.disabled=false; startSlot(); return; }

  addBtn.querySelector('.btn-text').textContent='떨어지는 중!'; addBtn.querySelector('.btn-icon').textContent='💫';
  await dropLayer(item);
  state.layers.push(item); state.step++;
  renderDots(); updateStepText();

  if (state.step>MAX_LAYERS) {
    addBtn.querySelector('.btn-text').textContent='마무리 중...';
    await dropLayer(TOP_BREAD);
    state.layers.push(TOP_BREAD);
    await sleep(200);
    stage.classList.add('shaking');
    setTimeout(()=>stage.classList.remove('shaking'),700);
    await sleep(900);
    showResult();
  } else {
    addBtn.disabled=false; addBtn.classList.remove('picking');
    addBtn.querySelector('.btn-text').textContent='이 재료 넣기!'; addBtn.querySelector('.btn-icon').textContent='⬇';
    isDropping=false; startSlot();
  }
});

function showResult() {
  const fillings = state.layers.filter(l=>l.tag!=='bread');
  resultEmoji.textContent = rnd(EMOJ);
  resultTitle.textContent = rnd(ADJ)+' '+rnd(NOUN);
  resultSubtitle.textContent = rnd(SUBS);
  resultIngredients.innerHTML = fillings.map(l=>`${l.name} <span style="font-size:10px;opacity:0.4">[${l.tag}]</span>`).join('<br>');
  resultOverlay.style.display='flex';
  resetBtn.style.display='block'; addBtn.style.display='none';
  stepText.textContent='완성! 🎉';
}

resultResetBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);

function resetGame() {
  resultOverlay.style.display='none'; addBtn.style.display=''; resetBtn.style.display='none';
  layersContainer.innerHTML=''; stackTopY=0;
  state={step:0,layers:[],slotRunning:true,currentItem:null}; isDropping=false;
  addBtn.disabled=false; addBtn.classList.remove('picking');
  addBtn.querySelector('.btn-text').textContent='샌드위치 시작!'; addBtn.querySelector('.btn-icon').textContent='🥪';
  stepText.textContent='버튼을 눌러 시작!'; renderDots();
  pool=buildPool(); slotOffset=0; buildSlotDOM(); startSlot();
}

// ── Init ──────────────────────────────────────────────────────────
const styleEl = document.createElement('style');
styleEl.textContent = `@keyframes splatAppear{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:0.8}}`;
document.head.appendChild(styleEl);

buildSlotDOM(); renderDots(); updateStepText(); startSlot();
