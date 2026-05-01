"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ArrowRight, Shield, Rocket, BrainCircuit, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[800px] flex flex-col justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-bg.png" 
            alt="Engineers looking at simulation" 
            fill 
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h1 className="font-sans text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
              Empowering Innovation <br /> Through Simulation
            </h1>
            
            <div className="space-y-4 text-[15px] text-white/90 font-light leading-relaxed mb-10 max-w-2xl">
              <p>Accelerate your design, testing, and analysis with cutting-edge simulation solutions tailored to your needs.</p>
              <p><strong className="font-semibold text-white">Seamless Integration.</strong> Simplify workflows with software that adapts to your processes.</p>
              <p><strong className="font-semibold text-white">Comprehensive Support.</strong> Partner with experts who understand your industry.</p>
              <p><strong className="font-semibold text-white">Proven Results.</strong> Drive efficiency, reduce costs, and bring your ideas to life faster.</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-accent-red hover:bg-accent-red-hover text-white px-8 py-3.5 rounded text-sm font-bold flex items-center gap-2 transition-colors">
                Explore Solutions <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-transparent border border-white hover:bg-white/10 text-white px-8 py-3.5 rounded text-sm font-bold transition-colors">
                Request a Demo
              </button>
            </div>
          </motion.div>
        </div>

        {/* Partner Logos Bar at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-white py-4 border-t border-gray-200 z-20 overflow-hidden">
          <div className="flex items-center gap-16 animate-[marquee_20s_linear_infinite] whitespace-nowrap px-8">
            {/* Repeated Logos */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div key={i} className="flex items-center gap-2 text-2xl font-bold text-black/80 tracking-tighter">
                <span className="text-accent-red">3OUN</span>
                <span>SYSTEMS</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REMAINDER OF PAGE (Adapted to corporate style) */}
      <section id="why-us" className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Core Operational Domains</h2>
            <div className="w-20 h-1 bg-accent-red mb-6" />
            <p className="text-gray-600 max-w-2xl text-lg">The foundation of our intelligence network and enterprise simulation capabilities.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Shield className="w-12 h-12 text-accent-red mb-6" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">Cyber Intelligence</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>• AI threat detection models</li>
                <li>• Enterprise attack/defense simulations</li>
                <li>• Post-quantum cybersecurity frameworks</li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-t-4 border-t-accent-red">
              <Rocket className="w-12 h-12 text-accent-red mb-6" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">Space Systems</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>• Satellite infrastructure optimization</li>
                <li>• Interplanetary communication protocols</li>
                <li>• Orbital mechanics simulation</li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <BrainCircuit className="w-12 h-12 text-accent-red mb-6" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">Quantum Mind</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>• Quantum computing architecture</li>
                <li>• Qubits & entanglement mapping</li>
                <li>• Neural interface modeling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SIMULATION LAB / PRODUCTS */}
      <section id="products" className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Simulation Products</h2>
              <div className="w-20 h-1 bg-accent-red mb-6" />
              <p className="text-gray-600 max-w-xl text-lg">Enterprise-grade testing environments for complex theoretical and physical models.</p>
            </div>
            <button className="text-sm font-bold tracking-wider uppercase flex items-center gap-2 text-accent-red hover:text-accent-red-hover transition-colors">
              View All Products <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Orbital Def-Sim", cat: "Aerospace" },
              { title: "NeuralCrypt 2.0", cat: "Security" },
              { title: "Q-State Modeler", cat: "Quantum" },
              { title: "Thermo-Dynamics", cat: "Engineering" }
            ].map((sim, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded overflow-hidden group">
                <div className="h-40 bg-gray-200 relative flex items-center justify-center">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                     <span className="font-bold text-gray-400">IMG</span>
                   </div>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold text-accent-red uppercase tracking-wider mb-2 block">{sim.cat}</span>
                  <h4 className="text-lg font-bold mb-3 text-gray-900">{sim.title}</h4>
                  <p className="text-sm text-gray-600 mb-6">Advanced simulation engine tailored for enterprise requirements.</p>
                  <button className="text-sm font-bold flex items-center gap-2 text-gray-900 group-hover:text-accent-red transition-colors">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#111111] text-white py-12 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-accent-red flex items-center justify-center rounded text-white font-bold text-xl">3</div>
              <span className="font-display font-bold text-lg tracking-wide">3OUN Technologies</span>
            </div>
            <p className="text-gray-400 text-sm">Empowering innovation through cutting-edge simulation software and enterprise solutions.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Simulation Suites</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud Processing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quantum Modules</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} 3OUN Technologies. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
