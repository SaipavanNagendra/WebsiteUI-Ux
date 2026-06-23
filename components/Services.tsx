"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Palette,
  Code,
  Gamepad2,
  Zap,
  Server,
  TrendingUp,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Custom iOS and Android applications built with latest technologies. From concept to deployment on app stores.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Full-stack web solutions using modern frameworks like React, Node.js, and Python. Scalable and high-performance.",
    },
    {
      icon: Palette,
      title: "Web Design",
      description:
        "Beautiful, responsive designs that engage users. Mobile-first approach with focus on UX/UI best practices.",
    },
    {
      icon: Code,
      title: "Software Development",
      description:
        "Custom enterprise solutions including ERP, CRM, and inventory systems. Tailored to your business needs.",
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description:
        "2D and 3D games using Unity and Unreal Engine. For mobile, web, and desktop platforms.",
    },
    {
      icon: Palette,
      title: "App Design",
      description:
        "Intuitive UI mockups and design systems. Every screen crafted for maximum usability and engagement.",
    },
    {
      icon: Zap,
      title: "Maintenance & Support",
      description:
        "Ongoing support for your applications. Bug fixes, updates, security patches, and performance optimization.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "SEO, social media marketing, and paid campaigns. Data-driven strategies to boost your online presence.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#0f0f1e]">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services Offered
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business grow and succeed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-6 bg-gradient-to-br from-cyan-500/10 to-violet-600/10 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
              >
                <Icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
