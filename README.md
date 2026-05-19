# {Auth Ai} — Official Landing Page

> **🌐 Live Website:** [https://proposal.authai.space](https://proposal.authai.space)

A high-end, dark-luxury themed landing page for **Auth AI** — a startup offering WhatsApp AI Bots, Instagram Automation, Enterprise CRM, n8n Workflows, SEO, and Custom Landing Pages.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | Frontend UI Framework |
| **Vite** | Build Tool & Dev Server |
| **Tailwind CSS** | Utility-first Styling |
| **Framer Motion** | Animations & Transitions |
| **React Router DOM** | Client-side Routing |
| **Lucide React** | Icon Library |
| **Vanta.js** | 3D Animated Background |

---

## ✨ Features

- ⚡ Lightning-fast performance with Vite production builds
- 🎨 Dark-luxury design with glassmorphism effects
- 📱 Fully responsive — Mobile, Tablet & Desktop
- 🔀 SPA routing with `.htaccess` fallback for Hostinger
- 💫 Smooth micro-animations with Framer Motion
- 🌐 3D Vanta.js animated network background
- 📦 Lazy-loaded pages for optimal performance
- 🔖 Custom Auth AI favicon

---

## 📁 Project Structure

```
src/
├── assets/              # Static images & media
├── components/
│   ├── layout/
│   │   ├── Navbar/      # Top navigation bar
│   │   └── Footer/      # Site footer with links
│   ├── sections/        # Reusable page sections
│   │   ├── Hero/
│   │   ├── AutomationFlow/
│   │   ├── LiveProjects/
│   │   ├── Integrations/
│   │   ├── Testimonials/
│   │   ├── Contact/
│   │   └── ...
│   └── ui/              # Small UI components (Loader, VantaBackground)
└── pages/
    ├── Home.jsx
    ├── Pricing.jsx
    ├── Features/
    │   ├── CRM/
    │   ├── N8nAutomation/
    │   ├── LandingPages/
    │   ├── SEO/
    │   ├── AIWorkflows/
    │   └── Ads/
    ├── Resources/
    │   ├── HelpCenter/
    │   └── ContactUs/
    └── Legal/
        ├── PrivacyPolicy/
        ├── RefundPolicy/
        └── Terms/
```

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 🌍 Deployment (Hostinger)

This project is deployed on **Hostinger** under the subdomain `proposal.authai.space`.

### To deploy updates:
1. Make your code changes
2. Run `npm run build` — this generates the `dist/` folder
3. Go to **Hostinger File Manager** → `proposal` folder
4. Delete all old files
5. Upload all contents from the local `dist/` folder
6. Go to **Cache Manager** → **Purge All**

> ⚠️ Upload the **contents** of `dist/`, not the folder itself.

---

## 📞 Contact

- 🌐 Website: [https://proposal.authai.space](https://proposal.authai.space)
- 📧 Email: [Info@authai.space](mailto:Info@authai.space)
- 📸 Instagram: [@authai.space](https://www.instagram.com/authai.space)
- 💼 LinkedIn: [Auth AI Automation](https://www.linkedin.com/company/auth-ai-automation/)
