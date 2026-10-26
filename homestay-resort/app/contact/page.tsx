'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 px-12 max-w-2xl mx-auto">
      <h1 className="text-5xl font-bold mb-12">Get in Touch</h1>
      <form className="space-y-6">
        <input type="text" placeholder="Your Name" className="w-full bg-zinc-900 p-4 rounded-xl border border-white/10" />
        <input type="email" placeholder="Your Email" className="w-full bg-zinc-900 p-4 rounded-xl border border-white/10" />
        <textarea placeholder="Your Message" className="w-full bg-zinc-900 p-4 rounded-xl border border-white/10 h-32" />
        <button className="w-full bg-white text-black font-bold p-4 rounded-full">Send Enquiry</button>
      </form>
    </div>
  );
}
