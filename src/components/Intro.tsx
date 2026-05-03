"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const phases = [
  {
    label: "COSMIC LAYER",
    words: ["Orbit", "Universe", "Network"],
    code: "3OUN_COSMIC_PROTOCOL",
  },
  {
    label: "TECHNICAL LAYER",
    words: ["Operations", "Underground", "Network"],
    code: "3OUN_DEEP_TECH_PROTOCOL",
  },
  {
    label: "EVOLUTION LAYER",
    words: ["Objective", "Unstoppable", "Next-Level"],
    code: "3OUN_EVOLUTION_PROTOCOL",
  },
];

export default function Intro({ onFinish }: { onFinish: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step < phases.length) {
        setStep(step + 1);
      } else {
        onFinish();
      }
    }, step < phases.length ? 1400 : 1600);

    return () => clearTimeout(timer);
  }, [step, onFinish]);

  const current = phases[step];

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[#050008] text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#6d18ff_0%,#25005c_32%,#050008_72%)] opacity-80" />

      {/* Ring effect */}
      <motion.div
        className="absolute h-[420px] w-[420px] rounded-full border border-violet-400/30"
        animate={{ scale: [1, 1.18, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      />

      <motion.div
        className="absolute h-[620px] w-[620px] rounded-full border border-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 w-full max-w-3xl px-6 text-center">
        <motion.p
          className="mb-5 text-xs font-bold tracking-[0.45em] text-violet-300"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          INITIALIZING 3OUN SYSTEM
        </motion.p>

        <motion.h1
          className="text-6xl font-black tracking-tight md:text-8xl"
          animate={{
            textShadow: [
              "0 0 20px rgba(124,58,237,0.7)",
              "0 0 45px rgba(124,58,237,1)",
              "0 0 20px rgba(124,58,237,0.7)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          3OUN
        </motion.h1>

        <div className="mt-8 min-h-[120px]">
          <AnimatePresence mode="wait">
            {current ? (
              <motion.div
                key={current.label}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.45 }}
              >
                <p className="text-sm font-bold tracking-[0.35em] text-white/45">
                  {current.label}
                </p>

                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  {current.words.map((word) => (
                    <span
                      key={word}
                      className="rounded-full border border-white/15 bg-white/[0.06] px-5 py-2 text-sm font-bold text-white/80 backdrop-blur"
                    >
                      {word}
                    </span>
                  ))}
                </div>

                <p className="mt-6 font-mono text-xs text-violet-300">
                  [{current.code}]
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="ready"
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0 }}
              >
                <p className="text-xl font-black text-violet-300">
                  Identity Deciphered. System Ready.
                </p>
                <p className="mt-3 font-mono text-xs text-white/45">
                  [System_Status: Active] [Identity_Protocol: 3OUN_TRIAD]
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Progress bar */}
        <div className="mx-auto mt-8 h-1 max-w-md overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full bg-violet-500"
            animate={{
              width: `${Math.min(((step + 1) / (phases.length + 1)) * 100, 100)}%`,
            }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
}