import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { ideasData } from "@/data/ideas";
import { SimulationClient } from "./SimulationClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ideasData.map((idea) => ({
    slug: idea.slug,
  }));
}

export default async function IdeaPage({ params }: PageProps) {
  const resolvedParams = await params;
  const idea = ideasData.find((item) => item.slug === resolvedParams.slug);

  if (!idea) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050008] text-white selection:bg-violet-500/30 overflow-hidden pb-24">
      <div className="mx-auto max-w-6xl p-6 pt-24">
        <Link 
          href="/#ideas" 
          className="mb-8 inline-flex items-center gap-2 text-violet-400 transition-colors hover:text-violet-300 hover:-translate-x-1 transform duration-300 font-medium"
        >
          <ChevronLeft size={20} /> Back to System Matrix
        </Link>

        {/* HERO SECTION */}
        <div className="relative mb-16 h-[450px] w-full overflow-hidden rounded-[40px] border border-white/10 bg-[#0a0014] shadow-[0_0_80px_rgba(124,58,237,0.15)] group">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-screen transition-transform duration-1000 group-hover:scale-105"
            style={{ backgroundImage: `url(${idea.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050008] via-[#050008]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050008]/90 via-[#050008]/60 to-transparent" />
          
          <div className="absolute bottom-12 left-12 max-w-3xl pr-8">
            <span className="mb-4 inline-block rounded-full border border-violet-500/40 bg-violet-500/20 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-300 backdrop-blur-md shadow-[0_0_20px_rgba(124,58,237,0.5)]">
              {idea.domain} Protocol
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-[0_0_30px_rgba(124,58,237,0.4)] mb-6 tracking-tight leading-tight">
              {idea.title}
            </h1>
            <p className="text-xl leading-relaxed text-white/70 border-l-2 border-violet-500/50 pl-5">
              {idea.description}
            </p>
          </div>
        </div>

        {/* INTERACTIVE CLIENT COMPONENT */}
        <SimulationClient idea={idea} />
      </div>
    </main>
  );
}
