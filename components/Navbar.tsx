"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold">
          <span className="text-cyan-400">DipVision</span>
          <span className="text-white">InfoTech</span>
        </Link>

        <nav className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white/80 hover:text-cyan-400 transition"
            >
              {item.name}
            </a>
          ))}

          <button className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-black">
            Get Started
          </button>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-950 border-t border-white/10">
          <div className="flex flex-col py-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-6 py-4 text-white/80 hover:text-cyan-400 transition"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <div className="px-6 pt-4">
              <button className="w-full py-3 rounded-xl bg-cyan-500 text-black font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}