"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816] flex items-center pt-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-semibold">
                Digital Innovation Starts Here
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Build Your{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-600 bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We craft intelligent, scalable, and secure digital solutions tailored
              for your business growth. Transform your ideas into reality with
              cutting-edge technology and expert guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
  onClick={() =>
    document
      .getElementById("services")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all"
>
  Explore Services
  <ArrowRight size={20} />
</button>
             <button
  onClick={() =>
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-lg font-semibold transition-all"
>
  Get in Touch
</button>
            </div>
          </motion.div>

          {/* Right Content - Illustration Area */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 hidden lg:flex items-center justify-center"
          >
            <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-violet-600/20 rounded-2xl border border-cyan-500/30 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-violet-600 rounded-full opacity-30 animate-pulse"></div>
                <p className="text-gray-400">Hero Illustration</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-3 gap-6 mt-20 pt-20 border-t border-cyan-500/20"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-cyan-400 mb-2">50+</p>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-cyan-400 mb-2">30+</p>
            <p className="text-gray-400">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-cyan-400 mb-2">5+</p>
            <p className="text-gray-400">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
