"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function About() {
  const features = [
    "Expert Development Team",
    "Scalable Solutions",
    "24/7 Support",
    "Quality Assurance",
    "Custom Integration",
    "Fast Delivery",
  ];
  return (
    <section id="about" className="py-24 bg-[#050816]">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Who We Are
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Empowering businesses with cutting-edge technology and innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Your Trusted Technology Partner
            </h3>

            <p className="text-gray-300 mb-4 leading-relaxed">
              We are a team of passionate technologists and innovators dedicated to
              transforming businesses through intelligent digital solutions. With years
              of experience in software development, we understand the challenges modern
              businesses face.
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Our expertise spans web development, mobile applications, cloud solutions,
              and AI integration. We work closely with our clients to understand their
              unique needs and deliver customized solutions that drive growth and efficiency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="h-96 bg-gradient-to-br from-cyan-500/20 to-violet-600/20 rounded-2xl border border-cyan-500/30 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-violet-600 rounded-full opacity-30"></div>
              <p className="text-gray-400">About Illustration</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}