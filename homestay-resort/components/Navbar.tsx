import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-gradient-to-b from-[#09090b] to-transparent">
      <Link href="/" className="text-xl font-bold tracking-tighter">SERENE HAVEN</Link>
      <div className="flex gap-8 text-sm uppercase tracking-widest text-zinc-400">
        <Link href="/about" className="hover:text-white transition-colors">About</Link>
        <Link href="/stay" className="hover:text-white transition-colors">Stay</Link>
        <Link href="/experiences" className="hover:text-white transition-colors">Experiences</Link>
        <Link href="/contact" className="px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">Enquire</Link>
      </div>
    </nav>
  );
}
