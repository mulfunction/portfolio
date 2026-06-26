"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FolderCode, ArrowDown, Database, Bot, Workflow, Crosshair, Terminal, Table, RotateCw, Wand2, ShieldCheck, ShieldAlert, Activity, Moon, Sun, Monitor, Mail, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrambleText } from "@/components/ScrambleText";
import { AnimatePresence, motion } from "framer-motion";

// Memento Mori Live App Component
function MementoMoriApp() {
  const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number } | null>(null);
  
  useEffect(() => {
    const target = new Date(new Date().getFullYear(), 11, 31, 23, 59, 59).getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;
      
      if (distance < 0) return;
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[var(--foreground)] text-[var(--background)] p-8 font-mono">
      <h3 className="text-xl md:text-2xl font-black mb-8 tracking-widest uppercase border-b-2 border-[var(--background)] pb-2">
        Memento Mori
      </h3>
      <div className="text-center mb-8">
        <p className="text-sm opacity-80 uppercase tracking-widest mb-2">Time remaining this year</p>
        {timeLeft ? (
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="flex flex-col"><span className="text-4xl md:text-6xl font-black">{timeLeft.days}</span><span className="text-xs">DAYS</span></div>
            <div className="flex flex-col"><span className="text-4xl md:text-6xl font-black">{timeLeft.hours}</span><span className="text-xs">HRS</span></div>
            <div className="flex flex-col"><span className="text-4xl md:text-6xl font-black">{timeLeft.minutes}</span><span className="text-xs">MIN</span></div>
            <div className="flex flex-col"><span className="text-4xl md:text-6xl font-black">{timeLeft.seconds}</span><span className="text-xs">SEC</span></div>
          </div>
        ) : (
          <div className="text-2xl animate-pulse">CALCULATING...</div>
        )}
      </div>
      <p className="text-xs max-w-sm text-center opacity-60">
        A brutalist web application enforcing a stark, un-distracting reminder of finite time. Pure data, no aesthetic inflation.
      </p>
    </div>
  );
}

type Project = {
  id: string;
  title: string;
  problem: string;
  tech: string[];
  result: string;
  type: string;
  icon: React.ReactNode;
  image?: string;
  images?: string[];
  command?: string;
  tableFile?: string;
  tableHeaders?: string[];
  renderConsole?: () => React.ReactNode;
  renderTable?: () => React.ReactNode;
};

const PROJECTS: Project[] = [
  {
    id: "fams",
    title: "FAMS ARCHITECTURE",
    problem: "Manual spreadsheet attendance causing payroll errors and manager friction.",
    tech: ["Apps Script", "React", "OAuth"],
    result: "100% Automated Payroll Sync",
    images: [
      "/images/fams/1.png",
      "/images/fams/2.png",
      "/images/fams/3.png",
      "/images/fams/4.png",
      "/images/fams/5.png"
    ],
    icon: <Database className="w-4 h-4" />,
    type: "carousel"
  },
  {
    id: "gen-art",
    title: "COMMERCIAL ASSET GENERATOR",
    problem: "Stock platforms reject generic 'AI slop'. Needed a pipeline for consistently generating bespoke, high-end artistic styles (Risograph & Gouache) for commercial licensing.",
    tech: ["Style Tuning", "Prompt Engineering", "Batch Automation"],
    result: "Bespoke Commercial Assets",
    images: [
      "/images/generative/1.jpeg",
      "/images/generative/2.jpeg",
      "/images/generative/3.jpeg"
    ],
    icon: <Wand2 className="w-4 h-4" />,
    type: "carousel"
  },
  {
    id: "aipad-scraper",
    title: "AIPAD EXHIBITOR EXTRACTOR",
    problem: "Needed a structured database of all art galleries and booth locations from AIPAD.",
    tech: ["Playwright", "Cheerio", "Node.js"],
    result: "Automated Exhibitor Directory",
    icon: <Bot className="w-4 h-4" />,
    type: "terminal",
    command: "node scrape-aipad.js --url https://www.aipad.com/exhibitors",
    tableFile: "aipad_galleries.json",
    tableHeaders: ["GALLERY_NAME", "LOCATION", "STATUS"],
    renderConsole: () => (
      <>
        <div className="console-line text-blue-500 mb-2">[INFO] Launching headless Chromium browser...</div>
        <div className="console-line text-blue-500 mb-2" style={{ animationDelay: "0.5s" }}>[INFO] Navigating to https://www.aipad.com/exhibitors...</div>
        <div className="console-line text-yellow-500 mb-2" style={{ animationDelay: "1.2s" }}>[WARN] Intercepting image requests to speed up page load...</div>
        <div className="console-line text-green-500 mb-2" style={{ animationDelay: "2.5s" }}>[SUCCESS] Exhibitor list rendered. Executing DOM traversal.</div>
        <div className="console-line opacity-70 mb-1" style={{ animationDelay: "3.0s" }}>&gt; Parsed: 19th Century Rare Book & Photograph Shop | New York, NY</div>
        <div className="console-line opacity-70 mb-1" style={{ animationDelay: "3.2s" }}>&gt; Parsed: Alta | Anyós, Andorra</div>
        <div className="console-line opacity-70 mb-1" style={{ animationDelay: "3.4s" }}>&gt; Parsed: Augusta Edwards Fine Art | London, UK</div>
        <div className="console-line opacity-70 mb-1" style={{ animationDelay: "3.5s" }}>&gt; Parsed: Bildhalle | Zurich, Switzerland | Amsterdam, The Netherlands</div>
        <div className="console-line text-purple-500 mb-2" style={{ animationDelay: "3.6s" }}>[PROCESS] Sanitizing location strings and normalizing data...</div>
        <div className="console-line text-green-500 mb-4" style={{ animationDelay: "4.2s" }}>[SUCCESS] Extracted 85 verified galleries.</div>
        <div className="console-line text-blue-500" style={{ animationDelay: "5.0s" }}>Exporting to aipad_galleries.json... <span className="animate-pulse">_</span></div>
      </>
    ),
    renderTable: () => (
      <>
        <div className="data-row grid grid-cols-12 gap-2 py-2 font-mono text-[10px] items-center border-b border-white/10 opacity-0" style={{ animation: "fadeIn 0.1s forwards", animationDelay: "3.1s" }}>
          <div className="col-span-6 font-bold truncate">19th Century Rare Book & Photo...</div><div className="col-span-4 opacity-70">New York, NY</div><div className="col-span-2 text-[var(--accent)] font-bold text-right flex justify-end"><ShieldCheck className="w-3 h-3" /></div>
        </div>
        <div className="data-row grid grid-cols-12 gap-2 py-2 font-mono text-[10px] items-center border-b border-white/10 opacity-0" style={{ animation: "fadeIn 0.1s forwards", animationDelay: "3.3s" }}>
          <div className="col-span-6 font-bold truncate">Augusta Edwards Fine Art</div><div className="col-span-4 opacity-70">London, UK</div><div className="col-span-2 text-[var(--accent)] font-bold text-right flex justify-end"><ShieldCheck className="w-3 h-3" /></div>
        </div>
        <div className="data-row grid grid-cols-12 gap-2 py-2 font-mono text-[10px] items-center border-b border-white/10 opacity-0" style={{ animation: "fadeIn 0.1s forwards", animationDelay: "4.3s" }}>
          <div className="col-span-6 font-bold truncate">Bildhalle</div><div className="col-span-4 opacity-70 truncate">Zurich, Switzerland</div><div className="col-span-2 text-[var(--accent)] font-bold text-right flex justify-end"><ShieldCheck className="w-3 h-3" /></div>
        </div>
      </>
    )
  },
  {
    id: "yt-studio",
    title: "YT STUDIO AUTOMATOR",
    problem: "Uploading and tagging 50+ videos manually was bottlenecking the content team.",
    tech: ["Playwright", "Chromium"],
    result: "Zero-Touch Publishing",
    icon: <Workflow className="w-4 h-4" />,
    type: "terminal",
    command: "python uploader.py --queue ./videos",
    tableFile: "upload_status.db",
    tableHeaders: ["VIDEO_ID", "TITLE", "STATUS"],
    renderConsole: () => (
      <>
        <div className="console-line text-blue-500 mb-2">[INIT] Connecting to Chrome debugging port 9222...</div>
        <div className="console-line text-blue-500 mb-2" style={{ animationDelay: "0.5s" }}>[INFO] Existing session found. Navigating to studio.youtube.com...</div>
        <div className="console-line text-yellow-500 mb-2" style={{ animationDelay: "1.2s" }}>[PROCESS] Uploading /videos/ep12_final.mp4...</div>
        <div className="console-line opacity-70 mb-1" style={{ animationDelay: "2.5s" }}>&gt; Progress: 14% (Estimated 2m left)</div>
        <div className="console-line opacity-70 mb-1" style={{ animationDelay: "3.2s" }}>&gt; Progress: 58% (Estimated 45s left)</div>
        <div className="console-line opacity-70 mb-1" style={{ animationDelay: "3.8s" }}>&gt; Progress: 100% (Processing HD version...)</div>
        <div className="console-line text-purple-500 mb-2" style={{ animationDelay: "4.5s" }}>[META] Injecting SEO tags and description template...</div>
        <div className="console-line text-green-500 mb-4" style={{ animationDelay: "5.2s" }}>[SUCCESS] Video scheduled for Friday 10:00 AM.</div>
        <div className="console-line text-blue-500" style={{ animationDelay: "6.0s" }}>Fetching next item in queue... <span className="animate-pulse">_</span></div>
      </>
    ),
    renderTable: () => (
      <>
        <div className="data-row grid grid-cols-12 gap-2 py-2 font-mono text-[11px] items-center border-b border-white/10 opacity-0" style={{ animation: "fadeIn 0.1s forwards", animationDelay: "1.5s" }}>
          <div className="col-span-2 opacity-50">v_9921xx</div><div className="col-span-5 font-bold truncate">Ep12_final.mp4</div>
          <div className="col-span-5 text-yellow-500 bg-yellow-500/10 px-1 py-0.5 rounded inline-flex items-center gap-1 font-bold"><Activity className="w-3 h-3" /> UPLOADING</div>
        </div>
        <div className="data-row grid grid-cols-12 gap-2 py-2 font-mono text-[11px] items-center border-b border-white/10 opacity-0" style={{ animation: "fadeIn 0.1s forwards", animationDelay: "5.3s" }}>
          <div className="col-span-2 opacity-50">v_9921xx</div><div className="col-span-5 font-bold truncate">Ep12_final.mp4</div>
          <div className="col-span-5 text-green-500 bg-green-500/10 px-1 py-0.5 rounded inline-flex items-center gap-1 font-bold"><ShieldCheck className="w-3 h-3" /> SCHEDULED</div>
        </div>
      </>
    )
  },
  {
    id: "memento-mori",
    title: "MEMENTO MORI",
    problem: "Needed a stark, un-distracting reminder of finite time.",
    tech: ["React", "Date Logic"],
    result: "Brutalist Reality Check",
    icon: <Terminal className="w-4 h-4" />,
    type: "app"
  },
  {
    id: "ai-inbox",
    title: "AI INBOX TRIAGE ENGINE",
    problem: "Support inbox overflowing with 500+ unstructured vendor inquiries daily.",
    tech: ["Apps Script", "OpenAI API", "Gmail API"],
    result: "90% Faster Triage",
    icon: <Mail className="w-4 h-4" />,
    type: "terminal",
    command: "clasp run triggerInboxTriage",
    tableFile: "processed_emails.log",
    tableHeaders: ["MSG_ID", "INTENT", "ACTION_TAKEN"],
    renderConsole: () => (
      <>
        <div className="console-line text-blue-500 mb-2">[GAS] Triggered: Time-driven (every 5 minutes)...</div>
        <div className="console-line text-purple-500 mb-2" style={{ animationDelay: "0.5s" }}>[GMAIL] Fetching unread threads matching label:INBOX...</div>
        <div className="console-line opacity-70 mb-1" style={{ animationDelay: "1.2s" }}>&gt; Found 3 new messages.</div>
        <div className="console-line text-yellow-500 mb-2" style={{ animationDelay: "1.5s" }}>[AI] Sending MSG_9921 payload to OpenAI GPT-4o for classification...</div>
        <div className="console-line text-green-500 mb-1" style={{ animationDelay: "3.5s" }}>[AI_RESPONSE] Intent: REFUND_REQUEST | Confidence: 0.98</div>
        <div className="console-line text-blue-500 mb-2" style={{ animationDelay: "3.8s" }}>[EXEC] Applying label 'Urgent/Refunds' to MSG_9921.</div>
        <div className="console-line text-yellow-500 mb-2" style={{ animationDelay: "4.5s" }}>[AI] Sending MSG_9922 payload to OpenAI...</div>
        <div className="console-line text-green-500 mb-1" style={{ animationDelay: "5.5s" }}>[AI_RESPONSE] Intent: VENDOR_INVOICE | Confidence: 0.95</div>
        <div className="console-line text-blue-500 mb-4" style={{ animationDelay: "5.8s" }}>[EXEC] Forwarding MSG_9922 to AP department and archiving.</div>
        <div className="console-line opacity-70" style={{ animationDelay: "6.5s" }}>Execution complete. Waiting for next interval... <span className="animate-pulse">_</span></div>
      </>
    ),
    renderTable: () => (
      <>
        <div className="data-row grid grid-cols-12 gap-2 py-2 font-mono text-xs items-center border-b border-white/10 opacity-0" style={{ animation: "fadeIn 0.1s forwards", animationDelay: "3.9s" }}>
          <div className="col-span-3 opacity-50">MSG_9921</div><div className="col-span-5 font-bold truncate text-red-500">REFUND_REQ</div><div className="col-span-4 opacity-70 text-right">LBL_APPLIED</div>
        </div>
        <div className="data-row grid grid-cols-12 gap-2 py-2 font-mono text-xs items-center border-b border-white/10 opacity-0" style={{ animation: "fadeIn 0.1s forwards", animationDelay: "5.9s" }}>
          <div className="col-span-3 opacity-50">MSG_9922</div><div className="col-span-5 font-bold truncate text-yellow-500">INVOICE</div><div className="col-span-4 opacity-70 text-right">FORWARDED</div>
        </div>
      </>
    )
  },
  {
    id: "pdf-extractor",
    title: "PDF INVOICE EXTRACTOR",
    problem: "Manual entry of PDF invoices into financial sheets caused massive delays.",
    tech: ["Apps Script", "Vision AI", "Drive API"],
    result: "Zero-Touch Data Entry",
    icon: <FileText className="w-4 h-4" />,
    type: "terminal",
    command: "clasp run processNewInvoices",
    tableFile: "ledger_sync.csv",
    tableHeaders: ["FILE", "VENDOR", "TOTAL_AMT"],
    renderConsole: () => (
      <>
        <div className="console-line text-blue-500 mb-2">[DRIVE] Webhook event received. New file added to /Invoices...</div>
        <div className="console-line text-purple-500 mb-2" style={{ animationDelay: "0.5s" }}>[INFO] Target: vendor_invoice_oct24.pdf (1.2MB)</div>
        <div className="console-line text-yellow-500 mb-2" style={{ animationDelay: "1.2s" }}>[VISION] Transmitting blob to Google Cloud Document AI...</div>
        <div className="console-line opacity-70 mb-1" style={{ animationDelay: "3.5s" }}>&gt; Parsing layout...</div>
        <div className="console-line opacity-70 mb-1" style={{ animationDelay: "4.0s" }}>&gt; Extracting key-value pairs...</div>
        <div className="console-line text-green-500 mb-2" style={{ animationDelay: "4.5s" }}>[SUCCESS] Extracted: Vendor (Acme Corp), Date (Oct 12), Total ($4,250.00)</div>
        <div className="console-line text-blue-500 mb-4" style={{ animationDelay: "5.0s" }}>[SHEETS] Appending row to Master Ledger...</div>
        <div className="console-line text-green-500" style={{ animationDelay: "5.5s" }}>[SUCCESS] Row 402 appended. Moving PDF to /Processed. <span className="animate-pulse">_</span></div>
      </>
    ),
    renderTable: () => (
      <>
        <div className="data-row grid grid-cols-12 gap-2 py-2 font-mono text-xs items-center border-b border-white/10 opacity-0" style={{ animation: "fadeIn 0.1s forwards", animationDelay: "5.2s" }}>
          <div className="col-span-4 opacity-50 truncate">vendor_oct24.pdf</div><div className="col-span-4 font-bold truncate">Acme Corp</div><div className="col-span-4 text-[var(--accent)] font-bold text-right">$4,250.00</div>
        </div>
      </>
    )
  },
  {
    id: "lead-scraper",
    title: "B2B OUTBOUND ENGINE",
    problem: "Sales team wasted 15 hrs/wk manually copying contact data from industry directories.",
    tech: ["Apify", "Puppeteer", "Residential Proxies"],
    result: "5k+ Clean Contacts/Wk",
    icon: <Bot className="w-4 h-4" />,
    type: "terminal",
    command: "docker run b2b-outbound-engine:latest --target=linkedin_sales_nav",
    tableFile: "verified_outbound.csv",
    tableHeaders: ["LEAD_ID", "COMPANY_NAME", "SMTP_STATUS"],
    renderConsole: () => (
      <>
        <div className="console-line text-blue-500 mb-2">[SYS] Mounting Apify actor container...</div>
        <div className="console-line text-blue-500 mb-2" style={{ animationDelay: "0.5s" }}>[NET] Establishing connection via rotating residential proxy pool...</div>
        <div className="console-line text-yellow-500 mb-2" style={{ animationDelay: "1.2s" }}>[WARN] Anti-bot fingerprint detected. Injecting stealth evasion headers...</div>
        <div className="console-line text-green-500 mb-2" style={{ animationDelay: "2.5s" }}>[AUTH] Bypass successful. Target directory accessed.</div>
        <div className="console-line opacity-70 mb-1" style={{ animationDelay: "3.0s" }}>&gt; Scraping: TechVision Corp | Founder | john@techvision.io</div>
        <div className="console-line opacity-70 mb-1" style={{ animationDelay: "3.2s" }}>&gt; Scraping: Quantum Data | VP Sales | sarah.m@quantum.dev</div>
        <div className="console-line opacity-70 mb-1" style={{ animationDelay: "3.4s" }}>&gt; Scraping: Horizon AI | CTO | [OBFUSCATED_DOM_ELEMENT]</div>
        <div className="console-line text-purple-500 mb-2" style={{ animationDelay: "3.6s" }}>[CLEAN] Running zero-bounce SMTP validation on extracted emails...</div>
        <div className="console-line text-green-500 mb-4" style={{ animationDelay: "4.2s" }}>[SUCCESS] Batch 1 complete: 245 valid, 12 bounced.</div>
        <div className="console-line text-blue-500" style={{ animationDelay: "5.0s" }}>Pushing to CRM via webhook... <span className="animate-pulse">_</span></div>
      </>
    ),
    renderTable: () => (
      <>
        <div className="data-row grid grid-cols-12 gap-2 py-2 font-mono text-xs items-center border-b border-white/10 opacity-0" style={{ animation: "fadeIn 0.1s forwards", animationDelay: "3.1s" }}>
          <div className="col-span-2 opacity-50">#8912</div><div className="col-span-5 font-bold truncate">TechVision Corp</div><div className="col-span-5 text-green-500 flex items-center justify-end gap-1"><ShieldCheck className="w-3 h-3" /> VERIFIED</div>
        </div>
        <div className="data-row grid grid-cols-12 gap-2 py-2 font-mono text-xs items-center border-b border-white/10 opacity-0" style={{ animation: "fadeIn 0.1s forwards", animationDelay: "3.3s" }}>
          <div className="col-span-2 opacity-50">#8913</div><div className="col-span-5 font-bold truncate">Quantum Data</div><div className="col-span-5 text-green-500 flex items-center justify-end gap-1"><ShieldCheck className="w-3 h-3" /> VERIFIED</div>
        </div>
        <div className="data-row grid grid-cols-12 gap-2 py-2 font-mono text-xs items-center border-b border-white/10 opacity-0" style={{ animation: "fadeIn 0.1s forwards", animationDelay: "4.3s" }}>
          <div className="col-span-2 opacity-50">#8914</div><div className="col-span-5 font-bold truncate opacity-50">Horizon AI</div><div className="col-span-5 text-red-500 flex items-center justify-end gap-1"><ShieldAlert className="w-3 h-3" /> BOUNCE_RISK</div>
        </div>
      </>
    )
  },
  {
    id: "price-tracker",
    title: "COMPETITOR INTELLIGENCE API",
    problem: "Lost margin due to competitor pricing changes going unnoticed for days.",
    tech: ["Webhooks", "Node.js", "Redis"],
    result: "Sub-minute Pricing Alerts",
    icon: <Crosshair className="w-4 h-4" />,
    type: "terminal",
    command: "pm2 start tracker-daemon.js --watch",
    tableFile: "live_pricing.db",
    tableHeaders: ["SKU_ID", "COMPETITOR", "DELTA"],
    renderConsole: () => (
      <>
        <div className="console-line text-blue-500 mb-2">[DAEMON] Initializing competitor intelligence engine v3.0...</div>
        <div className="console-line text-purple-500 mb-2" style={{ animationDelay: "0.5s" }}>[REDIS] Loading last known price snapshots from cache...</div>
        <div className="console-line text-blue-500 mb-2" style={{ animationDelay: "1.0s" }}>[SYNC] Fetching product catalog for "MarketLeader Inc"...</div>
        <div className="console-line opacity-70 mb-1" style={{ animationDelay: "1.5s" }}>&gt; SKU-A100: $49.99 (Matches Cache)</div>
        <div className="console-line opacity-70 mb-1" style={{ animationDelay: "1.8s" }}>&gt; SKU-B200: $12.00 (Matches Cache)</div>
        <div className="console-line text-yellow-500 mb-1" style={{ animationDelay: "2.1s" }}>[ALERT] SKU-X500 Price mismatch! Old: $99.99 | New: $85.00</div>
        <div className="console-line text-green-500 mb-4" style={{ animationDelay: "2.5s" }}>[WEBHOOK] Dispatching payload to Slack #pricing-alerts.</div>
        <div className="console-line opacity-70 mb-2" style={{ animationDelay: "3.2s" }}>[DAEMON] Sleeping for 60 seconds... <span className="animate-pulse">_</span></div>
      </>
    ),
    renderTable: () => (
      <>
        <div className="data-row grid grid-cols-12 gap-2 py-2 font-mono text-xs items-center border-b border-white/10 opacity-0" style={{ animation: "fadeIn 0.1s forwards", animationDelay: "1.6s" }}>
          <div className="col-span-3 opacity-50">SKU-A100</div><div className="col-span-5 font-bold truncate">MarketLeader Inc</div><div className="col-span-4 opacity-50 text-right">0.00%</div>
        </div>
        <div className="data-row grid grid-cols-12 gap-2 py-2 font-mono text-xs items-center border-b border-white/10 opacity-0" style={{ animation: "fadeIn 0.1s forwards", animationDelay: "1.9s" }}>
          <div className="col-span-3 opacity-50">SKU-B200</div><div className="col-span-5 font-bold truncate">MarketLeader Inc</div><div className="col-span-4 opacity-50 text-right">0.00%</div>
        </div>
        <div className="data-row grid grid-cols-12 gap-2 py-2 font-mono text-xs items-center border-b border-white/10 opacity-0" style={{ animation: "fadeIn 0.1s forwards", animationDelay: "2.2s" }}>
          <div className="col-span-3 text-yellow-500 font-bold">SKU-X500</div><div className="col-span-5 font-bold truncate text-yellow-500">MarketLeader Inc</div>
          <div className="col-span-4 text-yellow-500 bg-yellow-500/10 px-1 py-0.5 rounded text-right flex justify-end items-center gap-1"><ArrowDown className="w-3 h-3" /> 15.0%</div>
        </div>
      </>
    )
  }
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [key, setKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setCarouselIndex(0);
  }, [activeIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const rerunSimulation = () => {
    setKey((prev) => prev + 1);
    setIsVisible(true);
  };

  const activeProject = PROJECTS[activeIndex];

  return (
    <main className="flex-grow flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      
      {/* Nav */}
      <nav className="flex flex-col md:grid md:grid-cols-12 grid-border-b font-mono text-sm tracking-wide sticky top-0 bg-[var(--background)]/90 backdrop-blur z-50">
        <div className="flex items-center justify-between w-full md:col-span-5 p-4 md:p-5 md:grid-border-r text-[var(--accent)] font-bold text-xs md:text-sm">
          <div className="flex items-center gap-3">
            <Image src="/icon.jpeg" alt="Muldan Logo" width={24} height={24} className="rounded-full border border-[var(--border)]" />
            <ScrambleText text="MULDAN // AUTOMATION_ENGINEER" />
          </div>
          
          {/* Mobile Theme Toggles */}
          {mounted && (
            <div className="flex md:hidden gap-1">
              <button onClick={() => setTheme("light")} className={`p-1.5 rounded ${theme === 'light' ? 'bg-[var(--foreground)] text-[var(--background)]' : 'hover:bg-[var(--foreground)] hover:text-[var(--background)]'}`} title="Light Mode">
                <Sun className="w-4 h-4" />
              </button>
              <button onClick={() => setTheme("dark")} className={`p-1.5 rounded ${theme === 'dark' ? 'bg-[var(--foreground)] text-[var(--background)]' : 'hover:bg-[var(--foreground)] hover:text-[var(--background)]'}`} title="Dark Mode">
                <Moon className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
        
        <div className="hidden md:flex md:col-span-3 p-5 md:grid-border-r items-center justify-center text-zinc-500 text-xs md:text-sm">
          Jakarta, ID [UTC+7]
        </div>
        
        {/* Desktop Theme Toggles */}
        <div className="hidden md:flex md:col-span-2 p-5 md:grid-border-r items-center justify-center gap-4">
          {mounted && (
            <div className="flex gap-2">
              <button onClick={() => setTheme("light")} className={`p-1.5 rounded ${theme === 'light' ? 'bg-[var(--foreground)] text-[var(--background)]' : 'hover:bg-[var(--foreground)] hover:text-[var(--background)]'}`} title="Light Mode">
                <Sun className="w-4 h-4" />
              </button>
              <button onClick={() => setTheme("dark")} className={`p-1.5 rounded ${theme === 'dark' ? 'bg-[var(--foreground)] text-[var(--background)]' : 'hover:bg-[var(--foreground)] hover:text-[var(--background)]'}`} title="Dark Mode">
                <Moon className="w-4 h-4" />
              </button>
              <button onClick={() => setTheme("system")} className={`p-1.5 rounded ${theme === 'system' ? 'bg-[var(--foreground)] text-[var(--background)]' : 'hover:bg-[var(--foreground)] hover:text-[var(--background)]'}`} title="System Preference">
                <Monitor className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        <a href="mailto:muldanrhamid@gmail.com" className="w-full md:w-auto md:col-span-2 p-4 md:p-5 flex items-center justify-center hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors cursor-pointer font-bold text-xs md:text-sm uppercase whitespace-nowrap border-t border-[var(--border)] md:border-t-0">
          Contact Me ↗
        </a>
      </nav>

      {/* Hero Section */}
      <header className="grid grid-cols-1 md:grid-cols-12 grid-border-b">
        <div className="col-span-1 md:col-span-7 p-6 md:p-12 lg:p-24 grid-border-b md:grid-border-b-0 md:grid-border-r flex flex-col justify-center overflow-hidden">
          <span className="font-mono text-[var(--accent)] font-bold mb-6 flex items-center gap-2 text-xs md:text-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse flex-shrink-0"></span>
            FOR HIRE // DATA & AUTOMATION
          </span>
          <h1 className="text-5xl md:text-[4.5rem] lg:text-[6.5rem] font-black uppercase leading-[0.9] tracking-tighter mb-8 break-words hyphens-auto">
            I build scrapers & <br className="hidden lg:block" />
            automated systems.
          </h1>
          <p className="text-xl md:text-2xl font-medium opacity-60 max-w-2xl leading-relaxed">
            Stop paying humans to do machine work. I extract clean data and build
            robust API integrations so your business can scale autonomously.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#work"
              className="bg-[var(--foreground)] text-[var(--background)] px-8 py-4 font-mono uppercase text-sm font-bold hover:bg-[var(--accent)] hover:text-white transition-colors flex items-center gap-2"
            >
              View Interactive Work <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="https://upwork.com/freelancers/muldanh"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--border)] px-8 py-4 font-mono uppercase text-sm font-bold hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors inline-block text-center flex items-center justify-center"
            >
              Upwork Profile
            </a>
          </div>
        </div>

        {/* Portrait Slot */}
        <div className="col-span-1 md:col-span-5 relative portrait-container group overflow-hidden bg-[var(--foreground)] min-h-[400px]">
          <Image
            src="/portrait.jpg"
            alt="Muldan Portrait"
            width={800}
            height={1000}
            priority
            className="w-full h-full object-cover object-center absolute inset-0 grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500 opacity-90 mix-blend-luminosity group-hover:mix-blend-normal"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-90"></div>

          <div className="absolute bottom-6 left-6 right-6 p-5 bg-[var(--background)]/90 backdrop-blur-md border border-[var(--border)] font-mono text-xs">
            <div className="flex justify-between items-center mb-3 border-b border-[var(--border)] pb-2">
              <span className="font-bold text-sm">MULDAN [SYS.ADMIN]</span>
              <div className="flex items-center gap-2">
                <span className="opacity-60">CAPACITY</span>
                <span className="bg-green-500/10 text-green-600 dark:text-green-400 px-2 py-0.5 rounded font-bold border border-green-500/20">AVAILABLE</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 opacity-70">
              <div className="flex items-center gap-2"><Terminal className="w-3 h-3" /> Node.js</div>
              <div className="flex items-center gap-2"><Workflow className="w-3 h-3" /> Python</div>
              <div className="flex items-center gap-2"><Bot className="w-3 h-3" /> Playwright</div>
              <div className="flex items-center gap-2"><Database className="w-3 h-3" /> PostgreSQL</div>
              <div className="flex items-center gap-2"><Wand2 className="w-3 h-3" /> n8n</div>
            </div>
          </div>
        </div>
      </header>

      {/* Marquee Tape */}
      <div className="marquee-wrapper py-3 grid-border-b font-mono text-sm uppercase tracking-widest bg-[var(--foreground)] text-[var(--background)]">
        <div className="marquee-content">
          <span className="px-8 flex items-center gap-4">
            <span className="text-[var(--accent)] font-bold">///</span> 1.4M Rows Extracted 
            <span className="text-[var(--accent)] font-bold">///</span> 400+ Hours Saved
            <span className="text-[var(--accent)] font-bold">///</span> Bypassing Cloudflare 
            <span className="text-[var(--accent)] font-bold">///</span> Custom API Glue 
            <span className="text-[var(--accent)] font-bold">///</span> Lead Generation Bots 
            <span className="text-[var(--accent)] font-bold">///</span> Price Monitoring 
          </span>
          <span className="px-8 flex items-center gap-4">
            <span className="text-[var(--accent)] font-bold">///</span> 1.4M Rows Extracted 
            <span className="text-[var(--accent)] font-bold">///</span> 400+ Hours Saved
            <span className="text-[var(--accent)] font-bold">///</span> Bypassing Cloudflare 
            <span className="text-[var(--accent)] font-bold">///</span> Custom API Glue 
            <span className="text-[var(--accent)] font-bold">///</span> Lead Generation Bots 
            <span className="text-[var(--accent)] font-bold">///</span> Price Monitoring 
          </span>
        </div>
      </div>

      {/* Interactive Mock Project Section */}
      <section id="work" className="grid grid-cols-1 xl:grid-cols-12 grid-border-b min-h-[800px]" ref={sectionRef}>
        
        {/* Sidebar Setup */}
        <div className="xl:col-span-3 p-8 grid-border-b xl:grid-border-b-0 xl:grid-border-r bg-[var(--background)]/50">
          <h2 className="text-xl font-black uppercase mb-8 flex items-center gap-2">
            <FolderCode className="w-5 h-5 text-[var(--accent)]" /> DEPLOYED_PROJECTS
          </h2>
          <div className="space-y-4 font-mono text-sm">
            {PROJECTS.map((proj, idx) => {
              const isActive = activeIndex === idx;
              return isActive ? (
                <button key={proj.id} className="w-full text-left p-6 border-2 border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)] font-black transform -translate-y-1 -translate-x-1 transition-all relative z-10 cursor-default shadow-[4px_4px_0_0_var(--accent)]">
                  <span className="text-[var(--accent)] font-bold text-xs flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse"></span>
                    &gt; ACTIVE_PROCESS [{proj.id}]
                  </span>
                  {proj.title}
                </button>
              ) : (
                <button
                  key={proj.id}
                  onClick={() => {
                    setActiveIndex(idx);
                    setKey(prev => prev + 1);
                    setIsVisible(true);
                  }}
                  className="w-full text-left p-6 grid-border bg-[var(--background)] border-l-4 border-l-transparent hover:bg-[var(--foreground)] transition-colors opacity-70 hover:opacity-100 hover:text-[var(--background)]"
                >
                  <span className="opacity-50 text-xs block mb-1">NODE.{proj.id}</span>
                  {proj.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Project Display */}
        <div className="xl:col-span-9 flex flex-col bg-[var(--background)]" key={key}>
          
          {/* Project Context Header */}
          <div className="grid grid-cols-1 md:grid-cols-3 grid-border-b bg-[var(--background)]">
            <div className="p-6 md:grid-border-r flex flex-col justify-center">
              <span className="font-mono text-xs opacity-50 block mb-2">THE PROBLEM</span>
              <p className="font-medium text-sm">
                {activeProject.problem}
              </p>
            </div>
            <div className="p-6 md:grid-border-r flex flex-col justify-center">
              <span className="font-mono text-xs opacity-50 block mb-2">THE TECH</span>
              <div>
                {activeProject.tech.map((t, idx) => (
                  <span key={idx} className={`font-mono text-xs border border-[var(--border)] px-2 py-1 inline-block rounded mt-2 mr-2`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-[var(--accent)]/5 flex flex-col justify-center">
              <span className="font-mono text-xs text-[var(--accent)] font-bold block mb-2">THE RESULT</span>
              <p className="font-bold text-lg text-[var(--accent)]">
                {activeProject.result}
              </p>
            </div>
          </div>

          {/* Conditional Rendering: Image vs Terminal vs App */}
          {activeProject.type === "terminal" ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 flex-grow bg-neutral-900 text-zinc-300">
              {/* Terminal Console */}
              <div className="mock-console p-6 font-mono text-xs lg:border-r border-white/10 flex flex-col h-96 lg:h-auto overflow-y-auto">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10 opacity-70">
                  <Terminal className="w-4 h-4" /> root@scraper-dyno-01:~# {activeProject.command}
                </div>
                {isVisible && activeProject.renderConsole && activeProject.renderConsole()}
              </div>

              {/* Clean Output Table */}
              <div className="p-6 overflow-x-auto border-t lg:border-t-0 border-white/10">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10 font-mono text-xs opacity-70">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Table className="w-4 h-4" /> {activeProject.tableFile} (Live View)
                  </div>
                  <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded flex items-center gap-1 border border-green-500/30">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>{" "}
                    SYNCING
                  </span>
                </div>
                <div className="min-w-[400px]">
                  {/* Header */}
                  <div className="grid grid-cols-12 gap-2 pb-2 mb-2 font-mono text-[10px] opacity-50 border-b border-white/10 font-bold uppercase text-zinc-400">
                    <div className="col-span-4 lg:col-span-4">{activeProject.tableHeaders?.[0]}</div>
                    <div className="col-span-4 lg:col-span-4">{activeProject.tableHeaders?.[1]}</div>
                    <div className="col-span-4 lg:col-span-4">{activeProject.tableHeaders?.[2]}</div>
                  </div>

                  {/* Rows (Timed to appear with terminal) */}
                  {isVisible && activeProject.renderTable && activeProject.renderTable()}
                </div>

                <div className="mt-8 flex justify-center">
                  <button
                    onClick={rerunSimulation}
                    className="font-mono text-xs font-bold opacity-70 hover:opacity-100 uppercase flex items-center gap-2 border border-white/20 px-4 py-2 hover:bg-white/10 transition-colors text-white"
                  >
                    <RotateCw className="w-3 h-3" /> Re-run Simulation
                  </button>
                </div>
              </div>
            </div>
          ) : activeProject.type === "app" ? (
            <div className="flex-grow flex items-center justify-center min-h-[500px]">
               <MementoMoriApp />
            </div>
          ) : activeProject.type === "carousel" && activeProject.images ? (
            <div className="flex-grow p-6 md:p-12 flex items-center justify-center relative min-h-[500px] bg-[var(--foreground)]">
              <div className="relative w-full max-w-5xl aspect-[16/9] border border-[var(--border)] rounded-xl overflow-hidden shadow-[0_0_50px_rgba(255,51,0,0.1)] group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={carouselIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeProject.images[Math.min(carouselIndex, activeProject.images.length - 1)] || activeProject.images[0]}
                      alt={`${activeProject.title} screenshot ${carouselIndex + 1}`}
                      fill
                      className="object-contain bg-zinc-900/50"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Left Arrow */}
                <button 
                  onClick={() => setCarouselIndex(prev => prev === 0 ? activeProject.images!.length - 1 : prev - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-[var(--background)]/80 hover:bg-[var(--background)] text-[var(--foreground)] p-2 rounded border border-[var(--border)] opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                {/* Right Arrow */}
                <button 
                  onClick={() => setCarouselIndex(prev => prev === activeProject.images!.length - 1 ? 0 : prev + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-[var(--background)]/80 hover:bg-[var(--background)] text-[var(--foreground)] p-2 rounded border border-[var(--border)] opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {activeProject.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCarouselIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all border border-[var(--background)] ${idx === carouselIndex ? 'bg-[var(--accent)] scale-125' : 'bg-[var(--background)]/50'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Image View */
            <div className="flex-grow p-6 md:p-12 flex items-center justify-center relative min-h-[500px]">
              <div className="relative w-full max-w-4xl aspect-[4/3] md:aspect-[16/9] border border-[var(--border)] rounded-xl overflow-hidden shadow-[0_0_50px_rgba(255,51,0,0.1)]">
                <Image
                  src={activeProject.image!}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Footer / Sign-off */}
      <footer className="grid-border-t p-12 lg:p-24 flex flex-col items-center justify-center gap-6 bg-[var(--background)]">
        <Image src="/icon.jpeg" alt="Muldan Logo" width={64} height={64} className="rounded-full grayscale hover:grayscale-0 transition-all duration-500 border border-[var(--border)]" />
        <div className="font-mono text-xs opacity-50 uppercase tracking-widest text-center flex flex-col gap-2">
          <span>© {new Date().getFullYear()} MULDAN // AUTOMATION_ENGINEER</span>
          <span>Automated Systems & Scraping</span>
        </div>
      </footer>

    </main>
  );
}
