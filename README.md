# Rajesh T — Full Stack Software Engineer & AI Product Portfolio

A custom-designed, animated, production-ready developer portfolio built for **Rajesh T** (`Full Stack Software Engineer | Product Engineering | JavaScript | TypeScript | Python | AI Applications`).

## Architecture & Technology Stack

- **Framework**: Next.js (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS + Custom Architectural Design Tokens (`obsidian`, `accent`, glassmorphism, 1px hairline borders)
- **Motion Design**: Framer Motion (staggered text reveals, scroll-triggered section transitions, spring layout indicators, reduced-motion accessibility support)
- **Icons**: Lucide React
- **SEO & Metadata**: Open Graph, Twitter Cards, JSON-LD `Person` Schema, Dynamic `sitemap.xml`, `robots.txt`, and dynamic `RT` favicon (`src/app/icon.tsx`)

## Interactive Features

1. **Hero Identity & Live Stack Console**: Toggle between the verified Engineer Identity Card and an interactive 4-layer System Architecture node inspector (`Frontend Layer`, `Orchestration`, `Applied AI`, `Data & Infra`).
2. **Domain-Filtered Technical Skills Matrix**: Filter 25+ technologies across Languages, Frontend, Backend & APIs, AI & Autonomous Workflows, and Databases/Cloud without artificial skill bars.
3. **Interactive Project Simulators**:
   - **AI Knowledge Assistant (`rag-engine`)**: Test sample queries to inspect top-k semantic chunk retrieval, cosine similarity scores, and grounded OpenAI synthesis.
   - **Full-Stack E-Commerce Platform (`ecommerce-cloud`)**: Step through the atomic checkout, HMAC webhook verification, and AWS/Shiprocket fulfillment state machine.
   - **Deep-Dive Case Study Modal**: Inspect architecture diagrams, engineering challenges, and copy production Python/TypeScript snippets.
4. **Honest Contact Form & Instant Dispatch**: Server-validated `/api/contact` endpoint supporting **Resend**, **Web3Forms**, or **Formspree**, with automatic pre-filled `mailto:` and WhatsApp fallback if no API key is configured.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Quality Checks & Production Build

```bash
npm run typecheck
npm run build
npm run start
```

## Configuring Contact Form Email Delivery on Vercel

To enable direct server-side email delivery from the contact form, add **any one** of the following environment variables in **Vercel Dashboard → Project Settings → Environment Variables**:

- **Option A — Resend (Recommended)**:
  - `RESEND_API_KEY`: Your API key from [resend.com](https://resend.com)
  - `CONTACT_RECIPIENT_EMAIL`: `rajesh.thangapandim@gmail.com`
- **Option B — Web3Forms**:
  - `WEB3FORMS_ACCESS_KEY`: Your access key from [web3forms.com](https://web3forms.com)
- **Option C — Formspree**:
  - `FORMSPREE_ENDPOINT`: Your form endpoint URL from [formspree.io](https://formspree.io)

## Connecting a Custom Domain on Vercel

1. Open your project in the [Vercel Dashboard](https://vercel.com/dashboard).
2. Navigate to **Settings → Domains**.
3. Enter your custom domain (e.g., `rajesht.dev` or `rajeshthangapandi.com`) and click **Add**.
4. Configure your DNS provider with the records shown by Vercel:
   - **Apex Domain (`@`)**: `A` record pointing to `76.76.21.21`
   - **Subdomain (`www`)**: `CNAME` record pointing to `cname.vercel-dns.com`
5. Set `NEXT_PUBLIC_SITE_URL=https://your-custom-domain.com` in **Settings → Environment Variables** and trigger a redeploy so `sitemap.xml`, `robots.txt`, and canonical URLs update automatically.

## Updating & Redeploying

- Edit portfolio content, metrics, experience, or projects in `src/data/portfolio.ts`.
- Run `npm run build` locally to verify TypeScript and static generation.
- Deploy to production with:
  ```bash
  vercel --prod
  ```
  or push to your connected GitHub branch for automatic Vercel CI/CD deployment.
