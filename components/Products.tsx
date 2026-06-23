"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Products() {
  const products = [
    {
      title: "CloudSync Pro",
      description: "Cloud-based project management and collaboration platform for teams.",
      tags: ["Cloud", "Collaboration", "SaaS"],
      status: "Live",
    },
    {
      title: "AI Analytics Suite",
      description: "Advanced analytics dashboard powered by machine learning for data insights.",
      tags: ["AI", "Analytics", "Dashboard"],
      status: "Live",
    },
    {
      title: "SecureVault",
      description: "Enterprise-grade data security and encryption solution for businesses.",
      tags: ["Security", "Enterprise", "Encryption"],
      status: "Coming Soon",
    },
    {
      title: "MobileFlow",
      description: "Cross-platform mobile development framework for rapid app creation.",
      tags: ["Mobile", "Framework", "Development"],
      status: "Live",
    },
  ];

  return (
    <section id="products" className="py-24 bg-[#050816]">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Products
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Innovative solutions we've built to solve real-world business challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-gradient-to-br from-cyan-500/10 to-violet-600/10 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{product.title}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    product.status === "Live"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {product.status}
                </span>
              </div>

              <p className="text-gray-400 mb-4 leading-relaxed">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                Learn More
                <ExternalLink size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
