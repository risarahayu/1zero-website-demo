For now we use rrahayu@1zero.biz as email 
for capcha we use :
Emailjs signin with rrahayu@1zero.biz https://dashboard.emailjs.com/admin
for cloudflare turnstile: https://dash.cloudflare.com/ 

Emailjs: Purpose:
EmailJS allows the frontend application to send emails directly to your inbox without requiring a backend server.

Cloudflare Turnstile: Purpose:
Turnstile is a free, privacy-preserving CAPTCHA alternative. It serves as a security layer to distinguish between human users and bots, preventing automated spam submissions without the friction of traditional CAPTCHAs.


"Honeypot (Bot Trap Technique)"
Purpose: 
Honeypot is a technique used to detect and block automated bots. It works by creating hidden fields in a form that are invisible to human users but visible to bots. If a bot fills in these fields, the form submission is rejected, as it indicates automated activity.

<input name="website" style="display:none" />

User fills out form
      ↓
Honeypot check (bot detection)
      ↓
Cloudflare Turnstile verification (human check)
      ↓
EmailJS sends email
      ↓
Message delivered to inbox