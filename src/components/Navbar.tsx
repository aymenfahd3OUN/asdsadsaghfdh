"use client";

import Link from "next/link";
import { ArrowRight, Menu, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 w-full text-white glass-nav">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 font-display text-2xl font-black text-white purple-glow">
            3
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)]" />
          </div>

          <div className="flex flex-col">
            <span className="font-display text-lg font-black leading-tight tracking-wide">
              3OUN
            </span>
            <span className="text-[10px] uppercase tracking-[0.32em] text-violet-200">
              System Core
            </span>
          </div>
        </Link>

        {/* Center Links */}
        <div className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 text-sm font-semibold text-white/75 backdrop-blur-xl lg:flex">
          <Link href="#" className="transition hover:text-white">
            Mission
          </Link>
          <Link href="#worlds" className="transition hover:text-white">
            Worlds
          </Link>
          <Link href="#simulations" className="transition hover:text-white">
            Simulations
          </Link>
          <Link href="#ideas" className="transition hover:text-white">
            Ideas
          </Link>
          <Link href="#research" className="transition hover:text-white">
            Research
          </Link>
          <Link href="#genesis" className="transition hover:text-white">
            Genesis
          </Link>
        </div>

        {/* Right */}
        <div className="hidden items-center gap-4 xl:flex">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/75 transition hover:bg-white/10 hover:text-white">
            <Search className="h-4 w-4" />
          </button>

          <button className="flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-xs font-black uppercase tracking-wider text-white shadow-[0_0_30px_rgba(124,58,237,0.6)] transition hover:bg-violet-500">
            Enter System <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile */}
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] lg:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
}