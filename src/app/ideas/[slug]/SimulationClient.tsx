"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Activity, Play, Loader2 } from "lucide-react";

export function SimulationClient({ idea }: { idea: any }) {
  const [activeSimResult, setActiveSimResult] = useState<string>("");
  const [isSimulating, setIsSimulating] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (!activeSimResult) {
      setDisplayedText("");
      return;
    }
    
    let i = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      setDisplayedText(activeSimResult.slice(0, i + 1));
      i++;
      if (i >= activeSimResult.length) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, [activeSimResult]);

  const handleSimAction = (resultText: string) => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveSimResult("");
    setPulse(true);
    setTimeout(() => setPulse(false), 300);
    
    setTimeout(() => {
      setIsSimulating(false);
      setActiveSimResult(resultText);
    }, 1200);
  };

  return (
    <div className="grid gap-12 lg:grid-cols-12">
      {/* CONCEPTS */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="lg:col-span-4 space-y-6"
      >
        <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 shadow-inner backdrop-blur-xl hover:border-violet-500/30 transition-colors">
          <h2 className="mb-8 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-violet-400">
            <Terminal size={18} className="text-violet-500" /> Core Concepts
          </h2>
          <ul className="space-y-5">
            {idea.concepts.map((concept: string, idx: number) => (
              <li key={idx} className="flex items-center gap-4 text-white/80 group">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/10 border border-violet-500/30 text-xs font-bold text-violet-400 shadow-[0_0_15px_rgba(124,58,237,0.2)] group-hover:scale-110 group-hover:bg-violet-500/20 group-hover:text-violet-300 transition-all">
                  {idx + 1}
                </span>
                <span className="text-lg font-medium group-hover:text-white transition-colors">
                  {concept}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* SIMULATION UI */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="lg:col-span-8"
      >
        <div className="rounded-3xl border border-white/10 bg-black/40 p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl relative overflow-hidden h-full flex flex-col">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
          
          <h2 className="mb-8 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-violet-400">
            <Activity size={18} className="text-violet-500" /> Interactive Simulation Matrix
          </h2>

          <div className="grid gap-4 md:grid-cols-3 mb-10">
            {idea.experience.map((exp: any, idx: number) => (
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                key={idx}
                onClick={() => handleSimAction(exp.result)}
                disabled={isSimulating}
                className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-all hover:border-violet-500/60 hover:bg-violet-500/10 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] disabled:opacity-50 disabled:hover:scale-100 disabled:hover:y-0"
              >
                <Play size={24} className="text-violet-400 transition-transform group-hover:scale-125 group-hover:text-violet-300" />
                <span className="text-sm font-bold text-white/90">{exp.action}</span>
              </motion.button>
            ))}
          </div>

          <motion.div 
            animate={{ 
              boxShadow: pulse ? "0 0 60px rgba(124,58,237,0.4) inset" : "0 0 20px rgba(0,0,0,0.8) inset" 
            }}
            className="mt-auto rounded-2xl border border-white/10 bg-[#020004] p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
            
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40 flex items-center gap-2 relative z-10">
              <Terminal size={14} /> 
              Terminal Output
            </h3>
            
            <div className="font-mono text-base min-h-[4rem] flex items-start relative z-10">
              {isSimulating ? (
                <span className="text-violet-400 animate-pulse flex items-center gap-3">
                  <Loader2 size={18} className="animate-spin" /> Processing matrix calculations...
                </span>
              ) : (
                <span className="text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)] leading-relaxed">
                  {displayedText ? `> ${displayedText}` : "> System standing by. Awaiting execution command..."}
                </span>
              )}
              {!isSimulating && <span className="inline-block w-2.5 h-5 ml-1.5 mt-0.5 bg-violet-500 animate-pulse" />}
            </div>

            <div className="mt-10 flex justify-end relative z-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSimulating}
                className="group relative overflow-hidden rounded-xl bg-violet-600 px-8 py-4 text-sm font-bold text-white shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all hover:bg-violet-500 hover:shadow-[0_0_50px_rgba(124,58,237,0.7)] disabled:opacity-50 flex items-center gap-3"
                onClick={() => handleSimAction("SYS.LOG: Core Simulation Initiated. Environment successfully rendered.")}
              >
                <Activity size={18} className={isSimulating ? "animate-spin" : ""} />
                Start Simulation
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] bg-[position:200%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] group-hover:bg-[position:-200%_0,0_0] group-hover:duration-[1500ms]" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
