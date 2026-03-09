"use client";

import { useEffect, useState, useRef } from "react";
import { Terminal, Code2, Globe, Database, ArrowDown, FolderCode, Table, Wand2, RotateCw } from "lucide-react";

export default function Home() {
  const [key, setKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Disconnect once it becomes visible so we don't re-trigger infinitely on casual scrolling
          observer.disconnect();
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Function to re-trigger animations manually
  const rerunSimulation = () => {
    setKey((prev) => prev + 1);
    setIsVisible(true); // Ensure it's visible when manually re-run
  };

  return (
    <main className="flex-grow flex flex-col">
      {/* Nav */}
      <nav className="grid grid-cols-12 grid-border-b font-mono text-sm uppercase tracking-wide sticky top-0 bg-[var(--color-bg)] z-50">
        <div className="col-span-8 md:col-span-4 p-5 grid-border-r flex items-center font-bold text-xs md:text-sm truncate">
          MULDAN // DATA_OPS
        </div>
        <div className="col-span-4 md:col-span-4 p-5 grid-border-r hidden md:flex items-center justify-center text-gray-500 text-xs md:text-sm">
          Jakarta, ID [UTC+7]
        </div>
        <a
          href="#contact"
          className="col-span-4 md:col-span-4 p-4 md:p-5 flex items-center justify-end md:justify-center hover:bg-[var(--color-fg)] hover:text-[var(--color-bg)] transition-colors cursor-pointer font-bold text-xs md:text-sm whitespace-nowrap"
        >
          Book Scoping Call ↗
        </a>
      </nav>

      {/* Hero Section */}
      <header className="grid grid-cols-1 md:grid-cols-12 grid-border-b">
        {/* Text Content */}
        <div className="col-span-1 md:col-span-7 p-6 md:p-8 md:pr-10 lg:p-12 grid-border-b md:grid-border-b-0 md:grid-border-r flex flex-col justify-center overflow-hidden">
          <span className="font-mono text-[var(--color-accent)] font-bold mb-6 flex items-center gap-2 text-xs md:text-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0"></span>
            01 / INDEPENDENT AUTOMATION CONSULTANT
          </span>
          <h1 className="text-5xl md:text-[3.5rem] lg:text-[5.5rem] font-black uppercase leading-[0.9] tracking-tighter mb-8 break-words hyphens-auto">
            I build scrapers & <br className="hidden md:block lg:block" />
            automated systems.
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-600 max-w-xl leading-relaxed">
            Stop paying humans to do machine work. I extract clean data and build
            robust API integrations so your business can scale.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#work"
              className="bg-[var(--color-fg)] text-[var(--color-bg)] px-8 py-4 font-mono uppercase text-sm font-bold hover:bg-[var(--color-accent)] transition-colors flex items-center gap-2"
            >
              View Interactive Work <ArrowDown className="w-4 h-4" />
            </a>
            <button className="grid-border px-8 py-4 font-mono uppercase text-sm font-bold hover:bg-white transition-colors">
              Upwork Profile
            </button>
          </div>
        </div>

        {/* Portrait Slot */}
        <div className="col-span-1 md:col-span-5 relative portrait-container group overflow-hidden bg-gray-200 min-h-[500px]">
          {/* Placeholder Image (Replace with actual portrait) */}
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
            alt="Muldan Portrait"
            className="w-full h-full object-cover object-center absolute inset-0"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-80"></div>

          <div className="absolute bottom-6 left-6 right-6 p-5 bg-[var(--color-bg)]/95 backdrop-blur-md grid-border font-mono text-xs">
            <div className="flex justify-between items-center mb-3 border-b border-[var(--color-bordercolor)] pb-2">
              <span className="text-[var(--color-fg)] font-bold text-sm">
                MULDAN [SYS.ADMIN]
              </span>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">CAPACITY</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded font-bold">
                  AVAILABLE
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-gray-600">
              <div className="flex items-center gap-2">
                <Terminal className="w-3 h-3" /> Node.js
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-3 h-3" /> Python
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3 h-3" /> Playwright
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-3 h-3" /> PostgreSQL
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Marquee Tape */}
      <div className="marquee-wrapper py-3 grid-border-b font-mono text-sm uppercase tracking-widest">
        <div className="marquee-content">
          <span className="px-8 flex items-center gap-4">
            <span className="text-[var(--color-accent)] opacity-50">///</span>{" "}
            1.4M Rows Extracted{" "}
            <span className="text-[var(--color-accent)] opacity-50">///</span>{" "}
            400+ Hours Saved{" "}
            <span className="text-[var(--color-accent)] opacity-50">///</span>{" "}
            Bypassing Cloudflare{" "}
            <span className="text-[var(--color-accent)] opacity-50">///</span> Custom
            API Glue{" "}
            <span className="text-[var(--color-accent)] opacity-50">///</span> Lead
            Generation Bots{" "}
            <span className="text-[var(--color-accent)] opacity-50">///</span> Price
            Monitoring{" "}
            <span className="text-[var(--color-accent)] opacity-50">///</span>
          </span>
          <span className="px-8 flex items-center gap-4">
            <span className="text-[var(--color-accent)] opacity-50">///</span>{" "}
            1.4M Rows Extracted{" "}
            <span className="text-[var(--color-accent)] opacity-50">///</span>{" "}
            400+ Hours Saved{" "}
            <span className="text-[var(--color-accent)] opacity-50">///</span>{" "}
            Bypassing Cloudflare{" "}
            <span className="text-[var(--color-accent)] opacity-50">///</span> Custom
            API Glue{" "}
            <span className="text-[var(--color-accent)] opacity-50">///</span> Lead
            Generation Bots{" "}
            <span className="text-[var(--color-accent)] opacity-50">///</span> Price
            Monitoring{" "}
            <span className="text-[var(--color-accent)] opacity-50">///</span>
          </span>
        </div>
      </div>

      {/* Interactive Mock Project Section */}
      <section id="work" className="grid grid-cols-1 xl:grid-cols-12 grid-border-b">
        {/* Sidebar Setup */}
        <div className="xl:col-span-3 p-8 grid-border-b xl:grid-border-b-0 xl:grid-border-r bg-white/50">
          <h2 className="text-2xl font-black uppercase mb-8 flex items-center gap-2">
            <FolderCode className="w-5 h-5" /> Case_Studies
          </h2>
          <div className="space-y-4 font-mono text-sm max-w-sm">
            {/* Active State */}
            <button className="w-full text-left p-6 border-2 border-[var(--color-fg)] bg-white font-black shadow-[4px_4px_0_0_var(--color-fg)] transform -translate-y-1 -translate-x-1 transition-all relative z-10">
              <span className="text-[var(--color-accent)] font-bold text-xs flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full animate-pulse"></span>
                &gt; ACTIVE_PROCESS [01]
              </span>
              B2B Lead Generation Scraper
            </button>

            {/* Inactive States */}
            <button className="w-full text-left p-6 grid-border bg-transparent border-l-4 border-l-transparent hover:bg-white transition-colors text-gray-500 hover:text-[var(--color-fg)] border-t-transparent first:border-t-[var(--color-bordercolor)]">
              <span className="text-gray-400 text-xs block mb-1">PROJECT.02</span>
              Competitor Price Tracker
            </button>
            <button className="w-full text-left p-6 grid-border bg-transparent border-l-4 border-l-transparent hover:bg-white transition-colors text-gray-500 hover:text-[var(--color-fg)] border-t-transparent">
              <span className="text-gray-400 text-xs block mb-1">PROJECT.03</span>
              Webhook API Integrations
            </button>
          </div>
        </div>

        {/* Active Project Display */}
        <div className="xl:col-span-9 flex flex-col" key={key} ref={sectionRef}>
          {/* Project Context Header */}
          <div className="grid grid-cols-1 md:grid-cols-3 grid-border-b bg-white">
            <div className="p-6 md:border-r border-[var(--color-bordercolor)]">
              <span className="font-mono text-xs text-gray-500 block mb-1">
                THE PROBLEM
              </span>
              <p className="font-medium text-sm">
                Sales team spending 15 hrs/wk manually copying emails from
                directories.
              </p>
            </div>
            <div className="p-6 md:border-r border-[var(--color-bordercolor)]">
              <span className="font-mono text-xs text-gray-500 block mb-1">
                THE TECH
              </span>
              <p className="font-medium text-sm font-mono bg-gray-100 px-2 py-1 inline-block rounded">
                Node.js
              </p>
              <p className="font-medium text-sm font-mono bg-gray-100 px-2 py-1 inline-block rounded ml-1">
                Playwright
              </p>
            </div>
            <div className="p-6 bg-[var(--color-accent)]/5">
              <span className="font-mono text-xs text-[var(--color-accent)] font-bold block mb-1">
                THE RESULT
              </span>
              <p className="font-bold text-lg text-[var(--color-accent)]">
                5,000+ Verified Leads / Week
              </p>
            </div>
          </div>

          {/* Interactive Demo Area (Split Terminal / Output) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 flex-grow bg-white">
            {/* Terminal Console */}
            <div className="mock-console p-6 font-mono text-xs lg:border-r border-gray-800 flex flex-col h-96 lg:h-auto overflow-y-auto">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-800 text-gray-500">
                <Terminal className="w-4 h-4" /> root@scraper-dyno-01:~# node
                index.js
              </div>
              {isVisible && (
                <>
                  <div className="console-line text-blue-400 mb-2">
                    [INFO] Initializing Playwright cluster...
                  </div>
                  <div
                    className="console-line text-blue-400 mb-2"
                    style={{ animationDelay: "0.5s" }}
                  >
                    [INFO] Loading residential proxies...
                  </div>
                  <div
                    className="console-line text-yellow-400 mb-2"
                    style={{ animationDelay: "1.2s" }}
                  >
                    [WARN] Cloudflare challenge detected on Target A. Solving...
                  </div>
                  <div
                    className="console-line text-green-400 mb-2"
                    style={{ animationDelay: "2.5s" }}
                  >
                    [SUCCESS] Challenge bypassed. Beginning extraction.
                  </div>
                  <div
                    className="console-line text-gray-400 mb-1"
                    style={{ animationDelay: "3.0s" }}
                  >
                    &gt; Extracted row: Apex Plumbing | 214-555-0192
                  </div>
                  <div
                    className="console-line text-gray-400 mb-1"
                    style={{ animationDelay: "3.2s" }}
                  >
                    &gt; Extracted row: Dallas Leak Detect | 469-555-8811
                  </div>
                  <div
                    className="console-line text-gray-400 mb-1"
                    style={{ animationDelay: "3.4s" }}
                  >
                    &gt; Extracted row: Elite Water Co | [OBFUSCATED_DOM]
                  </div>
                  <div
                    className="console-line text-purple-400 mb-2"
                    style={{ animationDelay: "3.6s" }}
                  >
                    [PROCESS] Running regex de-obfuscation on Elite Water Co...
                  </div>
                  <div
                    className="console-line text-green-400 mb-4"
                    style={{ animationDelay: "4.2s" }}
                  >
                    [SUCCESS] Recovered: 469-555-9002
                  </div>
                  <div
                    className="console-line text-blue-400"
                    style={{ animationDelay: "5.0s" }}
                  >
                    Writing batch to leads.csv... <span className="animate-pulse">_</span>
                  </div>
                </>
              )}
            </div>

            {/* Clean Output Table */}
            <div className="p-6 bg-white overflow-x-auto border-t lg:border-t-0 border-[var(--color-bordercolor)]">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[var(--color-bordercolor)] font-mono text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <Table className="w-4 h-4" /> leads.csv (Live View)
                </div>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>{" "}
                  SYNCING
                </span>
              </div>
              <div className="min-w-[400px]">
                {/* Header */}
                <div className="grid grid-cols-12 gap-2 pb-2 mb-2 font-mono text-[10px] text-gray-400 border-b border-[var(--color-bordercolor)] font-bold">
                  <div className="col-span-1">ID</div>
                  <div className="col-span-4">COMPANY</div>
                  <div className="col-span-7">CLEANED_PHONE</div>
                </div>

                {/* Rows (Timed to appear with terminal) */}
                {isVisible && (
                  <>
                    <div
                      className="data-row grid grid-cols-12 gap-2 py-2 font-mono text-xs items-center border-b border-gray-100 opacity-0"
                      style={{
                        animation: "fadeIn 0.1s forwards",
                        animationDelay: "3.1s",
                      }}
                    >
                      <div className="col-span-1 text-gray-400">01</div>
                      <div className="col-span-4 font-bold truncate">Apex Plumbing</div>
                      <div className="col-span-7 text-[var(--color-accent)]">
                        214-555-0192
                      </div>
                    </div>
                    <div
                      className="data-row grid grid-cols-12 gap-2 py-2 font-mono text-xs items-center border-b border-gray-100 opacity-0"
                      style={{
                        animation: "fadeIn 0.1s forwards",
                        animationDelay: "3.3s",
                      }}
                    >
                      <div className="col-span-1 text-gray-400">02</div>
                      <div className="col-span-4 font-bold truncate">
                        Dallas Leak Detect
                      </div>
                      <div className="col-span-7 text-[var(--color-accent)]">
                        469-555-8811
                      </div>
                    </div>
                    <div
                      className="data-row grid grid-cols-12 gap-2 py-2 font-mono text-xs items-center border-b border-gray-100 opacity-0"
                      style={{
                        animation: "fadeIn 0.1s forwards",
                        animationDelay: "4.3s",
                      }}
                    >
                      <div className="col-span-1 text-gray-400">03</div>
                      <div className="col-span-4 font-bold truncate">Elite Water Co</div>
                      <div className="col-span-7 text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-1 py-0.5 rounded inline-flex items-center gap-1">
                        <Wand2 className="w-3 h-3 text-[var(--color-accent)]" />{" "}
                        469-555-9002
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={rerunSimulation}
                  className="font-mono text-xs font-bold text-gray-500 hover:text-[var(--color-fg)] uppercase flex items-center gap-2 border border-[var(--color-bordercolor)] px-4 py-2 hover:bg-gray-50 transition-colors"
                >
                  <RotateCw className="w-3 h-3" /> Re-run Simulation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
