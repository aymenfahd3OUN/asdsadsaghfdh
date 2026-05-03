"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import {
  ArrowRight,
  BrainCircuit,
  Cpu,
  Fingerprint,
  Globe2,
  Orbit,
  Rocket,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";

const worlds = [
  {
    icon: Shield,
    title: "Cyber Intelligence",
    desc: "Future cybersecurity, AI threat detection, post-quantum defense, and digital identity protection.",
  },
  {
    icon: Rocket,
    title: "Space & Universe Systems",
    desc: "Satellites, interplanetary communication, space cybersecurity, and universe simulation concepts.",
  },
  {
    icon: BrainCircuit,
    title: "Quantum Mind",
    desc: "Quantum computing, qubits, encryption, entanglement, and quantum-powered simulation systems.",
  },
];

const services = [
  "Quantum Simulation",
  "AI Cyber Defense",
  "Space Systems",
  "Digital Identity",
  "BCI Security",
  "Time Simulation",
];

const simulations = [
  { title: "Satellite Cybersecurity", domain: "Space / Cyber", level: "Future" },
  { title: "Quantum Encryption Lab", domain: "Quantum", level: "Future" },
  { title: "AI Threat Detection", domain: "Cyber", level: "Real" },
  { title: "Brain Signal Decoder", domain: "BCI", level: "Future" },
  { title: "Time Dilation Model", domain: "Physics", level: "Beyond" },
  { title: "Universe Expansion Sim", domain: "Cosmic", level: "Beyond" },
];

const stats = [
  "Three Worlds",
  "One Mind",
  "Endless Growth",
  "System Ready",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050008] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen px-6 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#6517ff_0%,#23005a_32%,#050008_70%)] opacity-80" />
        <div className="absolute left-1/2 top-[42%] h-[420px] w-[1100px] -translate-x-1/2 rounded-[100%] border-t-[34px] border-white/80 blur-sm shadow-[0_0_90px_35px_rgba(111,32,255,0.85)]" />
        <div className="absolute left-1/2 top-[44%] h-[430px] w-[1200px] -translate-x-1/2 rounded-[100%] border-t-[80px] border-[#6b16ff] blur-md opacity-90" />

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 text-sm font-semibold tracking-[0.35em] text-violet-300"
          >
            IDENTITY DECIPHERED • SYSTEM READY
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl"
          >
            3OUN — Three Worlds.
            <br />
            <span className="text-violet-400">One Mind.</span> Endless Growth.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/70 md:text-lg"
          >
            A futuristic command center for cybersecurity, space systems,
            quantum computing, simulations, research, and experimental ideas
            designed to become a future deep-tech company.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-9 flex flex-wrap justify-center gap-4"
          >
            <button className="rounded-md bg-violet-600 px-7 py-3 text-sm font-bold shadow-[0_0_35px_rgba(124,58,237,0.7)] transition hover:bg-violet-500">
              Enter System
            </button>
            <button className="rounded-md border border-white/25 px-7 py-3 text-sm font-bold text-white/90 transition hover:bg-white/10">
              Explore Simulations
            </button>
          </motion.div>

          <div className="mx-auto mt-24 grid max-w-4xl grid-cols-2 gap-0 overflow-hidden rounded-xl border border-white/20 bg-black/40 backdrop-blur md:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item}
                className="border-white/15 px-6 py-5 text-center md:border-r last:border-r-0"
              >
                <p className="text-sm font-bold text-white">{item}</p>
                <p className="mt-1 text-xs text-white/45">3OUN Protocol</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative px-6 py-28">
        <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-violet-700/25 blur-[120px]" />
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-black md:text-5xl">
              Innovating Tomorrow.{" "}
              <span className="text-violet-500">Building Today.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/60">
              3OUN organizes future technologies into worlds, simulations,
              ideas, and research systems.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`rounded-xl border border-white/15 bg-white/[0.04] p-7 backdrop-blur transition ${
                  index === 1
                    ? "bg-violet-700 shadow-[0_0_45px_rgba(124,58,237,0.45)]"
                    : ""
                }`}
              >
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-lg border border-violet-400/40 bg-violet-500/10 text-violet-300">
                  <Cpu className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">{service}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  A modular 3OUN layer built for future concepts, experimental
                  research, and prototype directions.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE WORLDS */}
      <section className="bg-gradient-to-b from-[#12002d] to-[#30008a] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-black md:text-5xl">
            Three Worlds. One System.
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {worlds.map((world, index) => {
              const Icon = world.icon;
              return (
                <motion.div
                  key={world.title}
                  whileHover={{ y: -10 }}
                  className="rounded-xl border border-white/20 bg-black/25 p-8 backdrop-blur"
                >
                  <p className="text-5xl font-black text-white/20">
                    0{index + 1}
                  </p>
                  <Icon className="mt-8 h-10 w-10 text-violet-300" />
                  <h3 className="mt-6 text-2xl font-black">{world.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/65">
                    {world.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SIMULATION LAB */}
      <section className="relative px-6 py-28">
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-violet-700/25 blur-[130px]" />
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-black md:text-5xl">
              Simulation Lab.{" "}
              <span className="text-violet-500">Concept Engine.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/60">
              First version uses clean visual cards and placeholders. Advanced
              physics and AI simulations can be added later.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {simulations.map((sim) => (
              <motion.div
                key={sim.title}
                whileHover={{ y: -8 }}
                className="group rounded-xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur"
              >
                <div className="mb-6 flex h-36 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-violet-950 to-black">
                  <Sparkles className="h-10 w-10 text-violet-300" />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
                  {sim.domain}
                </p>
                <h3 className="mt-3 text-xl font-black">{sim.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  Reality Level:{" "}
                  <span className="font-bold text-white">{sim.level}</span>
                </p>

                <button className="mt-6 flex items-center gap-2 text-sm font-bold text-violet-300 transition group-hover:text-white">
                  Explore Simulation <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IDENTITY CORE */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl rounded-2xl border border-white/15 bg-white/[0.04] p-8 backdrop-blur md:p-12">
          <h2 className="text-3xl font-black md:text-5xl">Identity Core</h2>
          <p className="mt-4 max-w-2xl text-white/60">
            3OUN is a multi-layer identity system: cosmic, technical, and
            ambition-driven.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["O", "Orbit", "Operations", "Objective"],
              ["U", "Universe", "Underground", "Unstoppable"],
              ["N", "Network", "Network", "Next-Level"],
            ].map(([letter, a, b, c]) => (
              <div
                key={letter}
                className="rounded-xl border border-white/15 bg-black/30 p-7"
              >
                <p className="text-6xl font-black text-violet-500">{letter}</p>
                <div className="mt-6 space-y-3 text-sm text-white/70">
                  <p>Cosmic: {a}</p>
                  <p>Technical: {b}</p>
                  <p>Ambition: {c}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY GENESIS */}
      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {[
            {
              icon: Globe2,
              title: "Research Library",
              text: "Cybersecurity, quantum computing, space technology, time physics, BCI, and digital identity.",
            },
            {
              icon: Fingerprint,
              title: "AI Mind Map",
              text: "Transform raw ideas into domains, technologies, prototypes, and future company products.",
            },
            {
              icon: Zap,
              title: "Company Genesis",
              text: "3OUN starts as a website and evolves into a deep-tech company foundation.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-white/15 bg-white/[0.04] p-8"
              >
                <Icon className="h-9 w-9 text-violet-300" />
                <h3 className="mt-6 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}