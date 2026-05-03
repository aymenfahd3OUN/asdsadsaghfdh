"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import {
  BrainCircuit,
  Cpu,
  Eye,
  Orbit,
  Shield,
  Sparkles,
  X,
  Play,
  Terminal,
  Activity,
  Wand2,
  User,
  CheckCircle2,
  Loader2,
  ChevronRight
} from "lucide-react";

// Modal Data
const ideasData = [
  {
    title: "Quantum Simulation",
    description: "Initialize a controlled vacuum state. Manipulate subatomic particles to observe superposition, forcing wave-function collapse upon measurement.",
    image: "/images/quantum.jpg",
    slug: "quantum-simulation",
    domain: "Quantum",
    level: "Beyond",
    concepts: ["Qubit Generation", "State Superposition", "Entanglement", "Wave Collapse"],
    experience: [
      { action: "Generate Qubit", result: "SYS.LOG: Qubit instantiated. Coherence stable." },
      { action: "Apply Hadamard Gate", result: "SYS.LOG: Superposition achieved. Probability distribution equalized." },
      { action: "Measure System", result: "SYS.LOG: Wave-function collapsed. Output vector resolved." }
    ],
  },
  {
    title: "AI Cyber Defense",
    description: "Deploy an autonomous neural sentry. Monitor real-time network traffic, identify anomalous patterns, and execute zero-day mitigation protocols.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    slug: "ai-cyber-defense",
    domain: "Cyber",
    level: "Real",
    concepts: ["Heuristic Analysis", "Packet Sniffing", "Auto-Mitigation", "Threat Tracing"],
    experience: [
      { action: "Inject Malware", result: "WARN: Unauthorized payload detected in Node 0x4A." },
      { action: "Isolate Node", result: "SYS.LOG: Node 0x4A quarantined. Network integrity preserved." },
      { action: "Purge Threat", result: "SYS.LOG: Threat neutralized. Security index restored to 99.9%." }
    ],
  },
  {
    title: "Space Systems",
    description: "Architect orbital mechanics. Launch microsatellites into Low Earth Orbit, establish deep-space telemetry, and synchronize communication arrays.",
    image: "/images/space.jpg",
    slug: "space-systems",
    domain: "Space",
    level: "Future",
    concepts: ["Orbital Injection", "Telemetry Sync", "Signal Propagation", "Gravitational Assist"],
    experience: [
      { action: "Launch Sequence", result: "SYS.LOG: Thrusters ignited. Exiting atmosphere." },
      { action: "Deploy Solar Arrays", result: "SYS.LOG: Arrays deployed. Power generation nominal." },
      { action: "Ping Deep Space", result: "SYS.LOG: Signal transmitted. Awaiting echo delay (2.4s)." }
    ],
  },
  {
    title: "Digital Identity",
    description: "Construct an unbreakable cryptographic persona. Distribute identity fragments across a decentralized ledger to ensure absolute data sovereignty.",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ce?auto=format&fit=crop&q=80&w=800",
    slug: "digital-identity",
    domain: "Identity",
    level: "Real",
    concepts: ["Zero-Knowledge Proofs", "Biometric Hashing", "Decentralized Ledger", "Access Tokens"],
    experience: [
      { action: "Hash Biometrics", result: "SYS.LOG: Biometric data encrypted via SHA-256." },
      { action: "Generate ZK-Proof", result: "SYS.LOG: Proof generated. Identity verified without data exposure." },
      { action: "Revoke Access", result: "SYS.LOG: Token revoked. Session terminated securely." }
    ],
  },
  {
    title: "BCI Security",
    description: "Fortify neural uplinks. Implement firewalls directly into the brain-computer interface bridge to block cognitive intrusion and data skimming.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    slug: "bci-security",
    domain: "BCI",
    level: "Future",
    concepts: ["Neural Encryption", "Synaptic Firewalls", "Cognitive Shielding", "Signal Integrity"],
    experience: [
      { action: "Establish Uplink", result: "SYS.LOG: Neural bridge connected. Sync rate 98%." },
      { action: "Detect Intrusion", result: "WARN: Unrecognized synaptic pattern detected." },
      { action: "Activate Shielding", result: "SYS.LOG: Cognitive firewall deployed. Uplink secured." }
    ],
  },
  {
    title: "Time Simulation",
    description: "Compute hyper-dimensional timelines. Map causality trees, analyze the butterfly effect of micro-decisions, and render alternate reality branches.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=800",
    slug: "time-simulation",
    domain: "Physics",
    level: "Beyond",
    concepts: ["Causality Mapping", "Branch Prediction", "Temporal Paradoxes", "Entropy Reversal"],
    experience: [
      { action: "Map Current Vector", result: "SYS.LOG: Baseline reality anchored." },
      { action: "Introduce Anomaly", result: "SYS.LOG: Anomaly injected. Timeline branching detected." },
      { action: "Observe Outcome", result: "SYS.LOG: Alternate future rendered. Variance: 42%." }
    ],
  },
];

const stats = [
  { label: "Three Worlds", desc: "Physical, Digital, Neural" },
  { label: "One Mind", desc: "Unified Intelligence" },
  { label: "Endless Growth", desc: "Infinite Iteration" },
  { label: "System Ready", desc: "All Protocols Online" },
];

export default function Home() {
  const [activeModal, setActiveModal] = useState<typeof ideasData[0] | null>(null);
  
  // Interactive Simulation State
  const [activeSimResult, setActiveSimResult] = useState<string>("");
  const [isSimulating, setIsSimulating] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [pulse, setPulse] = useState(false);

  // Typewriter effect for terminal result
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
    setIsSimulating(true);
    setActiveSimResult("");
    setPulse(true);
    setTimeout(() => setPulse(false), 300);
    
    // Fake execution delay
    setTimeout(() => {
      setIsSimulating(false);
      setActiveSimResult(resultText);
    }, 800);
  };

  // AI Generator state
  const [aiInput, setAiInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSim, setGeneratedSim] = useState<any>(null);

  const handleGenerate = () => {
    if (!aiInput.trim()) return;
    setIsGenerating(true);
    setGeneratedSim(null);
    
    setTimeout(() => {
      setGeneratedSim({
        title: `Project: ${aiInput.split(" ")[0].toUpperCase()}`,
        description: `Neural engine successfully mapped new paradigm based on "${aiInput}". Parameters initialized for execution.`,
        concepts: ["Dynamic Systems", "Neural Pathways", "Data Synthesis", "Quantum Logic"],
        experience: ["Initialize Core", "Process Data", "Execute Protocol"]
      });
      setIsGenerating(false);
    }, 2500);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#050008] text-white selection:bg-violet-500/30">
      <Navbar />

      {/* MODAL */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Blur Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
              onClick={() => {
                setActiveModal(null);
                setActiveSimResult("");
                setDisplayedText("");
              }}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#0a0014]/95 shadow-[0_0_100px_rgba(124,58,237,0.3)] max-h-[90vh] overflow-y-auto z-10"
            >
              <button
                onClick={() => {
                  setActiveModal(null);
                  setActiveSimResult("");
                  setDisplayedText("");
                }}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white/80 backdrop-blur-md transition-colors hover:bg-violet-600 hover:text-white"
              >
                <X size={20} />
              </button>

              <div className="relative h-64 w-full overflow-hidden shrink-0">
                <motion.div
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-screen"
                  style={{ backgroundImage: `url(${activeModal.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0014] via-[#0a0014]/70 to-transparent" />
                <div className="absolute bottom-8 left-10">
                  <span className="mb-3 inline-block rounded-full border border-violet-500/40 bg-violet-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-violet-300 backdrop-blur-md shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                    {activeModal.domain}
                  </span>
                  <h2 className="text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]">{activeModal.title}</h2>
                </div>
              </div>

              <div className="p-10">
                <p className="mb-10 text-white/80 leading-relaxed text-lg border-l-2 border-violet-500/50 pl-4">
                  {activeModal.description}
                </p>

                <div className="grid gap-10 md:grid-cols-2">
                  {/* Concepts */}
                  <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-6 shadow-inner">
                    <h3 className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-violet-400">
                      <Terminal size={16} className="text-violet-500" /> System Concepts
                    </h3>
                    <ul className="space-y-4">
                      {activeModal.concepts.map((concept, idx) => (
                        <li key={idx} className="flex items-center gap-4 text-sm font-medium text-white/80">
                          <span className="h-2 w-2 rounded-full bg-violet-500 shadow-[0_0_12px_rgba(124,58,237,0.8)]" />
                          {concept}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Experience Actions */}
                  <div>
                    <h3 className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-violet-400">
                      <Activity size={16} className="text-violet-500" /> Execution Matrix
                    </h3>
                    <div className="space-y-3">
                      {activeModal.experience.map((exp, idx) => (
                        <motion.button
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          key={idx}
                          onClick={() => handleSimAction(exp.result)}
                          className="group w-full flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-left text-sm font-bold text-white/90 transition-all hover:border-violet-500/60 hover:bg-violet-500/10 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]"
                        >
                          <span className="flex items-center">
                            <Play size={14} className="mr-3 text-violet-400 transition-transform group-hover:scale-125 group-hover:text-violet-300" />
                            {exp.action}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Dynamic Result Output */}
                <motion.div 
                  animate={{ 
                    boxShadow: pulse ? "0 0 40px rgba(124,58,237,0.4) inset" : "0 0 10px rgba(0,0,0,0.5) inset" 
                  }}
                  className="mt-10 rounded-2xl border border-white/10 bg-black/60 p-6 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
                  <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                    <Activity size={12} className={isSimulating ? "animate-spin text-violet-400" : ""} /> 
                    Terminal Output
                  </h3>
                  <div className="font-mono text-sm min-h-[2.5rem] flex items-center">
                    {isSimulating ? (
                      <span className="text-violet-400 animate-pulse flex items-center gap-2">
                        <Loader2 size={14} className="animate-spin" /> Processing parameters...
                      </span>
                    ) : (
                      <span className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">
                        {displayedText ? `> ${displayedText}` : "> Awaiting execution command..."}
                      </span>
                    )}
                    {/* Blinking cursor */}
                    {!isSimulating && <span className="inline-block w-2 h-4 ml-1 bg-violet-500 animate-pulse" />}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section className="relative min-h-screen px-6 pt-36 flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#4c1d95_0%,#0f0518_50%,#050008_100%)] opacity-40" />
        <div className="absolute left-1/2 top-[40%] h-[500px] w-[1400px] -translate-x-1/2 rounded-[100%] border-t-[2px] border-violet-500/40 blur-[2px] shadow-[0_0_120px_30px_rgba(124,58,237,0.3)] pointer-events-none" />
        <div className="absolute left-1/2 top-[45%] h-[400px] w-[1000px] -translate-x-1/2 rounded-[100%] border-t-[60px] border-[#6b16ff] blur-3xl opacity-30 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl text-center mt-[-5vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(124,58,237,0.2)]"
          >
            <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-xs font-bold tracking-[0.3em] text-violet-200">SYSTEM READY</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-5xl text-6xl font-black leading-tight tracking-tighter md:text-8xl drop-shadow-2xl"
          >
            3OUN — Three Worlds.
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(124,58,237,0.5)]">
              One Mind.
            </span> Endless Growth.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60 font-medium"
          >
            A futuristic command center for cybersecurity, space systems,
            quantum computing, simulations, research, and experimental ideas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <button className="group relative overflow-hidden rounded-xl bg-violet-600 px-8 py-4 text-sm font-bold shadow-[0_0_40px_rgba(124,58,237,0.4)] transition-all hover:scale-105 hover:bg-violet-500 hover:shadow-[0_0_60px_rgba(124,58,237,0.6)]">
              <span className="relative z-10 flex items-center gap-2">Enter System <ChevronRight size={16} /></span>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] bg-[position:200%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] hover:bg-[position:-200%_0,0_0] hover:duration-[1500ms]" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mx-auto mt-28 grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4"
          >
            {stats.map((item, idx) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center backdrop-blur-xl transition-all duration-500 hover:border-violet-500/40 hover:bg-violet-900/20 hover:shadow-[0_0_40px_rgba(124,58,237,0.2)]"
              >
                {/* Moving light effect on hover */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-violet-500/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                {/* Core glow */}
                <div className="absolute -inset-2 bg-gradient-to-b from-violet-600/0 via-violet-600/10 to-violet-600/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                
                <p className="relative z-10 text-xl font-black tracking-wide text-white transition-colors duration-300 group-hover:text-violet-300">
                  {item.label}
                </p>
                <p className="relative z-10 mt-3 text-xs font-semibold tracking-widest text-white/40 transition-colors group-hover:text-white/70">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* IDEAS CARDS */}
      <section id="ideas" className="relative px-6 py-32 bg-[#030005]">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-violet-700/20 blur-[150px] pointer-events-none opacity-50" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black md:text-6xl tracking-tight">
              Innovating Tomorrow.{" "}
              <span className="text-violet-500 drop-shadow-[0_0_30px_rgba(124,58,237,0.6)]">Building Today.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              Interactive nodes containing blueprints for future technologies. Select a domain to initialize the simulation matrix.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: "1000px" }}>
            {ideasData.map((idea, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                key={idea.slug}
                onClick={() => setActiveModal(idea)}
                whileHover={{ y: -12, scale: 1.03, rotateX: 2, rotateY: -2 }}
                className="group relative h-[420px] w-full cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-black transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:border-violet-500/50 hover:shadow-[0_30px_60px_rgba(124,58,237,0.25)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Background Image with Zoom and Blur */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center opacity-40 blur-[4px] transition-all duration-700 group-hover:opacity-70 group-hover:blur-none group-hover:scale-110"
                  style={{ backgroundImage: `url(${idea.image})` }}
                />
                
                {/* Deep Lighting Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020004] via-[#050008]/80 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-violet-900/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay" />
                
                {/* Core Glow Effect */}
                <div className="absolute inset-0 bg-violet-500/20 opacity-0 mix-blend-screen blur-2xl transition-all duration-500 group-hover:opacity-100" />
                
                {/* Content on Top */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-z-10">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="rounded-full bg-violet-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-violet-200 backdrop-blur-md border border-violet-400/30 shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                      {idea.domain}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-white drop-shadow-lg transition-all duration-300 group-hover:text-violet-300 group-hover:drop-shadow-[0_0_20px_rgba(124,58,237,0.8)]">
                    {idea.title}
                  </h3>
                  <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-white/60 drop-shadow-md transition-colors duration-300 group-hover:text-white/95">
                    {idea.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI SIMULATION GENERATOR */}
      <section className="relative px-6 py-40 bg-[#050008]">
        <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-violet-800/10 blur-[150px] pointer-events-none opacity-60" />
        <div className="relative mx-auto max-w-5xl z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center mb-6 h-16 w-16 rounded-full bg-violet-500/10 border border-violet-500/30 shadow-[0_0_30px_rgba(124,58,237,0.3)]"
            >
              <BrainCircuit size={32} className="text-violet-400" />
            </motion.div>
            <h2 className="text-4xl font-black md:text-6xl">
              Neural Engine <span className="text-violet-500 drop-shadow-[0_0_30px_rgba(124,58,237,0.6)]">Generator</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              Input any concept. The intelligence core will architect a custom simulation environment instantly.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/[0.01] p-8 backdrop-blur-2xl md:p-12 shadow-[0_0_80px_rgba(0,0,0,0.8)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
            
            <div className="flex flex-col gap-6 md:flex-row items-stretch">
              <div className="relative flex-1 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl blur opacity-25 group-focus-within:opacity-60 transition duration-500"></div>
                <div className="relative flex items-center bg-black/80 rounded-xl h-full">
                  <Terminal className="absolute left-5 text-violet-400" size={20} />
                  <input
                    type="text"
                    value={aiInput}
                    onChange={(e) => setAiInput(e.target.value)}
                    placeholder="Initialize parameter (e.g., Dyson Sphere, Nano-Robotics)..."
                    className="w-full h-full rounded-xl bg-transparent px-6 py-5 pl-14 text-lg text-white placeholder-white/30 outline-none"
                    onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                  />
                </div>
              </div>
              <button
                onClick={handleGenerate}
                disabled={isGenerating || !aiInput.trim()}
                className="relative overflow-hidden flex items-center justify-center gap-3 rounded-xl bg-violet-600 px-10 py-5 font-bold text-white shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all hover:bg-violet-500 hover:shadow-[0_0_50px_rgba(124,58,237,0.7)] disabled:opacity-50 disabled:shadow-none hover:scale-105 active:scale-95"
              >
                {isGenerating ? (
                  <>
                    <Loader2 size={22} className="animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Wand2 size={22} />
                    Synthesize
                  </>
                )}
              </button>
            </div>

            <AnimatePresence>
              {generatedSim && !isGenerating && (
                <motion.div
                  initial={{ opacity: 0, height: 0, scale: 0.95 }}
                  animate={{ opacity: 1, height: "auto", scale: 1 }}
                  transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
                  className="mt-12 overflow-hidden"
                >
                  <div className="rounded-2xl border border-violet-500/40 bg-violet-950/20 p-8 shadow-[0_0_50px_rgba(124,58,237,0.15)] relative">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
                    
                    <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-6 gap-4 relative z-10">
                      <h3 className="text-3xl font-black text-white">{generatedSim.title}</h3>
                      <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.2)]">
                        <CheckCircle2 size={16} /> Matrix Generated
                      </span>
                    </div>
                    <p className="mb-8 text-white/70 text-lg leading-relaxed relative z-10">{generatedSim.description}</p>
                    
                    <div className="grid gap-8 md:grid-cols-2 relative z-10">
                      <div>
                        <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-violet-400">
                          <Cpu size={14} /> Core Concepts
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {generatedSim.concepts.map((c: string, i: number) => (
                            <span key={i} className="rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm font-medium text-white/80 shadow-inner">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-violet-400">
                          <Activity size={14} /> Action Matrix
                        </h4>
                        <div className="flex flex-col gap-3">
                          {generatedSim.experience.map((e: string, i: number) => (
                            <div key={i} className="flex items-center gap-4 rounded-lg border border-white/5 bg-white/[0.02] px-5 py-3 text-sm text-white/80">
                              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/20 text-xs font-bold text-violet-300 border border-violet-500/30">
                                {i + 1}
                              </span>
                              {e}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section className="relative px-6 py-32 border-t border-white/5 bg-[#030005] overflow-hidden">
        <div className="absolute left-[-20%] bottom-[-20%] h-[800px] w-[800px] rounded-full bg-violet-900/20 blur-[200px] pointer-events-none" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid gap-20 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-300 backdrop-blur-md shadow-[0_0_20px_rgba(124,58,237,0.2)]">
                  <User size={16} /> Architect & Founder
                </div>
                <h3 className="text-5xl font-black md:text-7xl text-white tracking-tight drop-shadow-xl mb-8">
                  Aymen Fahd<br/>Al-Hetar
                </h3>
                <p className="text-xl leading-relaxed text-white/60 max-w-lg mb-12">
                  A tech-driven visionary decoding the future. Building the next generation of digital infrastructure through relentless self-learning and an uncompromising futuristic mindset.
                </p>
                
                <div className="flex flex-col gap-6 relative">
                  <div className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-violet-500/50 via-white/10 to-transparent" />
                  {[
                    { icon: Shield, text: "Cybersecurity Analyst", sub: "Google Certificate in Progress" },
                    { icon: BrainCircuit, text: "AI & Prompt Engineering", sub: "Specialist & Developer" },
                    { icon: Terminal, text: "Linux Systems", sub: "Server Architecture Basics" },
                    { icon: Cpu, text: "Electronics", sub: "Real-world Hardware Repair" },
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-6 text-white/80 group cursor-default relative z-10"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black border-[2px] border-violet-500/40 shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all group-hover:border-violet-400 group-hover:shadow-[0_0_25px_rgba(124,58,237,0.6)] group-hover:scale-110">
                        <item.icon size={20} className="text-violet-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <span className="block text-lg font-bold text-white group-hover:text-violet-300 transition-colors">{item.text}</span>
                        <span className="block text-sm text-white/50 group-hover:text-white/70 transition-colors">{item.sub}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative aspect-[4/5] w-full max-w-lg mx-auto rounded-[40px] border border-white/10 bg-gradient-to-b from-[#1a0033] to-[#050008] overflow-hidden group shadow-[0_0_80px_rgba(124,58,237,0.2)]"
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.3)_0%,transparent_70%)] opacity-70 transition-opacity duration-700 group-hover:opacity-100" />
                
                {/* Cyberpunk grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
                
                <motion.div 
                  className="absolute inset-x-8 bottom-8 z-10 rounded-3xl border border-white/10 bg-black/60 p-8 backdrop-blur-2xl shadow-2xl transition-transform duration-700 group-hover:-translate-y-4"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400 mb-4 flex items-center gap-3">
                    <Eye size={16} /> Core Philosophy
                  </p>
                  <p className="text-lg font-medium leading-relaxed text-white/90 italic">
                    "Technology is not just a tool; it is the ultimate extension of human potential. We build today to simulate tomorrow."
                  </p>
                </motion.div>
                
                {/* Abstract visualization */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] flex flex-col items-center pointer-events-none">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-violet-600/30 blur-[100px] animate-pulse" />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                      <Orbit size={240} className="text-violet-500/30" strokeWidth={1} />
                    </motion.div>
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Orbit size={180} className="text-violet-400/40" strokeWidth={1.5} />
                    </motion.div>
                    <BrainCircuit size={80} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-violet-300 drop-shadow-[0_0_30px_rgba(124,58,237,1)]" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#020004] py-16 text-center text-sm text-white/40">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-3 text-white/30 hover:text-violet-400 transition-colors">
            <Shield size={20} />
            <span className="font-bold tracking-[0.3em] uppercase">3OUN Protocol Online</span>
          </div>
          <p className="mt-4">© 2026 3OUN System. Architecting the future.</p>
        </div>
      </footer>
    </main>
  );
}