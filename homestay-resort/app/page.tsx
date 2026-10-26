'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900 opacity-60 z-10" />
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-20 text-center"
        >
          <h1 className="text-7xl font-bold mb-6">Serene Haven</h1>
          <p className="text-xl text-zinc-300 mb-8 max-w-lg mx-auto">Escape to luxury. Immerse yourself in nature’s finest hospitality.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform">Enquire Now</Link>
            <a href="https://wa.me/yournumber" className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-colors">WhatsApp</a>
          </div>
        </motion.div>
      </section>

      {/* Bento Grid Features */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 h-[400px] border border-zinc-800 rounded-3xl p-8 bg-zinc-900/40 flex flex-col justify-end">
          <h3 className="text-3xl font-bold">Nature Inspired</h3>
        </div>
        <div className="h-[400px] border border-zinc-800 rounded-3xl p-8 bg-zinc-900/40 flex flex-col justify-end">
          <h3 className="text-3xl font-bold">Dining</h3>
        </div>
        <div className="h-[400px] border border-zinc-800 rounded-3xl p-8 bg-zinc-900/40 flex flex-col justify-end">
          <h3 className="text-3xl font-bold">Spa</h3>
        </div>
      </section>
    </div>
  );
}
