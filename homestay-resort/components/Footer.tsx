export default function Footer() {
  return (
    <footer className="bg-[#050505] py-20 px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-zinc-400">
        <div>
          <h4 className="text-white font-bold mb-6">SERENE HAVEN</h4>
          <p className="text-sm leading-relaxed">Luxury boutique hospitality nestled in the heart of the valley.</p>
        </div>
        <div className="space-y-4 text-sm">
          <p>123 Mountain View Road</p>
          <p>contact@serenehaven.com</p>
          <p>+91 98765 43210</p>
        </div>
        <div className="space-y-4 text-sm uppercase tracking-widest">
          <p>Privacy Policy</p>
          <p>Cancellation Policy</p>
          <p>© 2026 Serene Haven</p>
        </div>
      </div>
    </footer>
  );
}
