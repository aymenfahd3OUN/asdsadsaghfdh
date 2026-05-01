"use client";

import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full text-white glass-nav border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        
        {/* Left Side: Logo & Primary Links */}
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            {/* Logo placeholder mimicking the "Q" logo but for 3OUN */}
            <div className="w-10 h-10 bg-accent-red flex items-center justify-center rounded text-white font-bold text-2xl font-display">
              3
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-tight tracking-wide">3OUN</span>
              <span className="text-[10px] tracking-widest text-white/70 uppercase">Technologies</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link href="#why-us" className="hover:text-accent-red transition-colors">Why Us</Link>
            <Link href="#products" className="hover:text-accent-red transition-colors">Products</Link>
            <Link href="#services" className="hover:text-accent-red transition-colors">Services</Link>
          </div>
        </div>

        {/* Right Side: Secondary Links & CTA */}
        <div className="hidden xl:flex items-center gap-6 text-[11px] font-semibold tracking-wider uppercase">
          <Link href="#" className="hover:text-accent-red transition-colors">Engineering Support</Link>
          <Link href="#" className="hover:text-accent-red transition-colors">Training</Link>
          <Link href="#" className="hover:text-accent-red transition-colors">Startup Program</Link>
          <Link href="#" className="hover:text-accent-red transition-colors">Industries</Link>
          <Link href="#" className="hover:text-accent-red transition-colors">Resource Center</Link>
          
          <button className="hover:text-accent-red transition-colors">
            <Search className="w-4 h-4" />
          </button>
          
          <button className="bg-accent-red hover:bg-accent-red-hover text-white px-5 py-2 rounded text-xs font-bold flex items-center gap-2 transition-colors ml-2">
            ASK FOR TRIAL <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </nav>
  );
}
