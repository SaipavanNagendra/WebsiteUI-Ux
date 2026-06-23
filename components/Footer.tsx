"use client";

import { motion } from "framer-motion";
import { Code, Mail, Share2, MessageCircle, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    {
      title: "Company",
      links: ["About Us", "Services", "Products", "Blog", "Careers"],
    },
    {
      title: "Resources",
      links: ["Documentation", "API Docs", "Case Studies", "Guides", "FAQ"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Contact"],
    },
  ];

  const socialLinks = [
    { icon: Code, href: "#" },
    { icon: Mail, href: "#" },
    { icon: Share2, href: "#" },
    { icon: MessageCircle, href: "#" },
  ];

  return (
    <footer className="bg-[#050816] border-t border-cyan-500/20 py-12">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              <div>
                <p className="text-white font-bold">Dipvision</p>
                <p className="text-cyan-400 text-xs">Tech Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Transforming ideas into innovative digital solutions.
            </p>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-500/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © 2024 Dipvision Tech Solutions. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-all"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>

            {/* Scroll to Top */}
            <motion.button
              whileHover={{ y: -3 }}
              onClick={scrollToTop}
              className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-all"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
