"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, Mail, Linkedin, Smartphone, Server, Brain, 
  Code, Globe, Database, Cloud, ArrowUpRight, Terminal, CheckCircle2,
  Shield, Layers 
} from 'lucide-react';
import Image from "next/image";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-bg-base text-zinc-100 relative selection:bg-brand selection:text-white">
      
      {/* TEXTURA DE FONDO GLOBAL */}
      <div className="absolute inset-0 premium-grid pointer-events-none z-0" />

      {/* --- NAVBAR PREMIUM (Estilo Dock Flotante Difuminado) --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-border-subtle/50 backdrop-blur-md bg-bg-base/70">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">

            <h1 className="text-sm font-mono tracking-widest text-zinc-400">
              JOSE<span className="text-brand font-bold">.DEV</span>
            </h1>
          </div>

          <div className="hidden md:flex gap-8 text-xs font-mono tracking-wide text-zinc-400">
            <a href="#about" className="hover:text-brand transition-colors">// about</a>
            <a href="#skills" className="hover:text-brand transition-colors">// arsenal</a>
            <a href="#projects" className="hover:text-brand transition-colors">// featured_work</a>
            <a href="#contact" className="hover:text-brand transition-colors">// contact</a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 relative pt-20">
        <div className="max-w-4xl w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter leading-[0.95]">
              Engineering high-performance apps & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-purple-400 to-zinc-400">
                intelligent systems.
              </span>
            </h2>

            <p className="text-base md:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed">
              I specialize in building robust Full Stack architectures and training localized neural networks. 
              Focused on database optimization, ultra-low latency APIs, and direct business ROI.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="px-6 py-3 bg-brand hover:bg-brand/90 text-white font-medium text-sm rounded-lg transition-all duration-300 shadow-lg shadow-brand/10 hover:shadow-brand/20 flex items-center gap-2 group">
                Explore Engineering Work
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="#contact" className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border border-border-subtle text-zinc-300 hover:text-white font-medium text-sm rounded-lg transition-all duration-300">
                Execute Contact
              </a>
            </div>
          </motion.div>
        </div>
      </section>
{/* --- TECHNICAL ARSENAL --- */}
      <section id="skills" className="py-24 px-6 border-t border-border-subtle/40 bg-zinc-950/20 relative z-10">
        <div className="max-w-7xl mx-auto"> {/* Ampliado a 7xl para dar aire a las 5 columnas */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-mono text-brand uppercase tracking-widest">// technical capability</span>
              <h3 className="text-3xl font-black text-white tracking-tight mt-1">Architectural Stack</h3>
            </div>
            <p className="text-zinc-400 max-w-xs text-xs font-mono leading-relaxed">
              Production-ready technologies verified through stress testing and scaling.
            </p>
          </div>
          
          {/* Ajuste de columnas: 1 en móvil, 2 en tablets, 3 en pantallas medianas y 5 en desktops */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <SkillCard icon={<Globe size={20} />} title="Frontend Infrastructure" skills="React, Next.js 15, TypeScript, Tailwind v4, Angular, Core Web Vitals" />
            <SkillCard icon={<Server size={20} />} title="Backend & Microservices" skills="Python, Django, FastAPI, Node.js, C#, Distributed Architectures" />
            
            {/* NUEVA CARD: DATA ARCHITECTURE */}
            <SkillCard icon={<Database size={20} />} title="Data & Storage Engine" skills="PostgreSQL, MongoDB, Redis Cluster, Polyglot Persistence, Query Tuning, Transactional Isolation" />
            
            <SkillCard icon={<Brain size={20} />} title="AI & Data Intelligence" skills="Keras Neural Networks, NLP pipelines, Gemini API orchestration, LLM Finetuning" />
            <SkillCard icon={<Cloud size={20} />} title="Cloud & CloudNative DevOps" skills="Docker containers, AWS (S3/EC2), Google Cloud, CI/CD Automated Pipelines" />
          </div>
        </div>
      </section>

      {/* --- FEATURED PROJECTS (BENTO GRID EXPANDIDO) --- */}
      <section id="projects" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-mono text-brand uppercase tracking-widest">// real world execution</span>
            <h3 className="text-3xl font-black text-white tracking-tight mt-1">Production Shipments</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Proyecto 1: Neura (Ancho Completo / Destacado Principal) */}
            <div className="lg:col-span-2 group relative overflow-hidden rounded-xl bg-bg-surface border border-border-subtle premium-card-glow transition-all duration-300 hover:border-zinc-700">
              <div className="p-8 flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-brand transition-colors duration-300">
                      Neura — AI Emotional Architecture
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-1 bg-zinc-900 border border-border-subtle rounded text-zinc-400">Mental Health Tech</span>
                  </div>
                  <p className="text-sm text-zinc-400 mb-6 max-w-xl leading-relaxed">
                    Ecosistema móvil diseñado para el análisis psicológico automatizado. Implementa un backend robusto en FastAPI para procesar y transmitir análisis semánticos mediante nodos optimizados de Gemini AI, garantizando la encriptación de datos sensibles del usuario.
                  </p>
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-4 py-4 my-4 border-y border-border-subtle/50 font-mono text-xs">
                    <div><span className="text-brand font-bold">Latency:</span> &lt;240ms stream</div>
                    <div><span className="text-brand font-bold">Security:</span> End-to-End Encrypted</div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Kotlin', 'FastAPI', 'Gemini AI', 'PostgreSQL Layer', 'Docker'].map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 text-[11px] font-mono text-zinc-400 bg-zinc-900 rounded border border-border-subtle">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Proyecto 2: SmartKey (NUEVO - IoT / Conversión Comercial) */}
            <div className="group relative overflow-hidden rounded-xl bg-bg-surface border border-border-subtle premium-card-glow transition-all duration-300 hover:border-zinc-700">
              <div className="p-8 flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-brand transition-colors duration-300">
                      SmartKey — IoT Security Deployment
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-1 bg-zinc-900 border border-border-subtle rounded text-zinc-400">IoT Operations</span>
                  </div>
                  <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                    Plataforma comercial de alta conversión optimizada para logística y solicitudes de instalación de cerraduras inteligentes. Conecta un frontend reactivo con Webhooks automatizados y APIs de captura de leads corporativos.
                  </p>
                </div>
                <div>
                  <div className="py-2 my-2 font-mono text-xs text-zinc-500 border-t border-border-subtle/30">
                    // Conversion Rate: +28% acquisition metrics
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Next.js 15', 'Tailwind v4', 'Webhooks API', 'Lead Funnels'].map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 text-[11px] font-mono text-zinc-400 bg-zinc-900 rounded border border-border-subtle">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Proyecto 3: Vix Core OS */}
            <div className="group relative overflow-hidden rounded-xl bg-bg-surface border border-border-subtle premium-card-glow transition-all duration-300 hover:border-zinc-700">
              <div className="p-8 flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-brand transition-colors duration-300">
                      Vix Core Assistant
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-1 bg-zinc-900 border border-border-subtle rounded text-zinc-400">AI Core</span>
                  </div>
                  <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                    Asistente virtual autónomo basado en redes neuronales densas con Keras. Diseñado para procesamiento de lenguaje natural (NLP) y orquestación de comandos locales mediante pipelines del sistema seguros de bajo nivel.
                  </p>
                </div>
                <div>
                  <div className="py-2 my-2 font-mono text-xs text-zinc-500 border-t border-border-subtle/30">
                    // Accuracy Rate: 98.4% NLP Match
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Python', 'Keras', 'NLP Core', 'System Pipelines'].map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 text-[11px] font-mono text-zinc-400 bg-zinc-900 rounded border border-border-subtle">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Proyecto 4: Polyglot Persistence Engine (NUEVO - Backend / Arquitectura de datos) */}
            <div className="group relative overflow-hidden rounded-xl bg-bg-surface border border-border-subtle premium-card-glow transition-all duration-300 hover:border-zinc-700">
              <div className="p-8 flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-brand transition-colors duration-300">
                      Polyglot Persistence Layer
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-1 bg-zinc-900 border border-border-subtle rounded text-zinc-400">Data Architecture</span>
                  </div>
                  <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                    Mapeador de persistencia políglota para gestionar e interoperar datos homogéneos a través de múltiples tecnologías de bases de datos de forma distribuida, resolviendo problemas críticos de consistencia eventual.
                  </p>
                </div>
                <div>
                  <div className="py-2 my-2 font-mono text-xs text-zinc-500 border-t border-border-subtle/30">
                    // Routing Performance: &lt;4ms per query
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['PostgreSQL', 'MongoDB', 'Redis Cluster', 'Python Core'].map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 text-[11px] font-mono text-zinc-400 bg-zinc-900 rounded border border-border-subtle">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Proyecto 5: Pet Hotel Platform */}
            <div className="group relative overflow-hidden rounded-xl bg-bg-surface border border-border-subtle premium-card-glow transition-all duration-300 hover:border-zinc-700">
              <div className="p-8 flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-brand transition-colors duration-300">
                      High-Conv Booking Platform
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-1 bg-zinc-900 border border-border-subtle rounded text-zinc-400">Web App</span>
                  </div>
                  <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                    Motor de reservas enfocado intensamente en la optimización de Core Web Vitals (100/100). Diseñado con React estructurado de forma atómica para automatizar el agendamiento y flujos de retención de clientes.
                  </p>
                </div>
                <div>
                  <div className="py-2 my-2 font-mono text-xs text-zinc-500 border-t border-border-subtle/30">
                    // Conversion Increase: +42% growth metrics
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['React Stack', 'Advanced UI/UX', 'SEO Automation'].map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 text-[11px] font-mono text-zinc-400 bg-zinc-900 rounded border border-border-subtle">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta Bento Inferior Completa: Filosofía de código */}
            <div className="lg:col-span-3 group relative overflow-hidden rounded-xl bg-zinc-950 border border-border-subtle/80 p-8 flex items-center">
              <div className="flex gap-4 items-start">
                <Terminal className="text-brand shrink-0 mt-1" size={24} />
                <div>
                  <h5 className="font-mono text-xs uppercase tracking-wider text-zinc-300 font-bold">Engineering Manifesto</h5>
                  <p className="text-xs text-zinc-500 mt-1 max-w-3xl leading-relaxed">
                    I treat type-safety, multi-engine database orchestration, and documentation not as choices, but as non-negotiable fundamentals. Every application I deploy is architected to survive traffic surges, preserve structural data integrity, and maintain modular clean-code maintainability.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- BUSINESS SERVICES --- */}
      <section className="py-24 px-6 border-t border-border-subtle/40 bg-zinc-950/20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-brand uppercase tracking-widest">// high value capabilities</span>
            <h3 className="text-3xl font-black text-white tracking-tight mt-1">Targeted Solutions</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-xl border border-border-subtle bg-bg-surface/50 premium-card-glow">
              <div className="w-10 h-10 rounded-lg bg-brand-muted border border-brand/20 flex items-center justify-center text-brand mb-6">
                <Code size={20} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Enterprise Software Engineering</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Development of mission-critical systems and state-of-the-art corporate web platforms utilizing transactional micro-frontends and robust architectural design patterns.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-border-subtle bg-bg-surface/50 premium-card-glow">
              <div className="w-10 h-10 rounded-lg bg-brand-muted border border-brand/20 flex items-center justify-center text-brand mb-6">
                <Database size={20} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Backends, Data Pipelines & Core APIs</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Construction of optimized, completely secure REST/GraphQL environments using modern Python and Node.js engines. Focused deeply on SQL schema indexing and low memory usage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER / CONTACT --- */}
      <footer id="contact" className="py-24 px-6 border-t border-border-subtle bg-black relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-mono text-brand uppercase tracking-widest">// initial transmission</span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            Let's build a profitable digital system.
          </h2>
          <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
            Open for high-level software engineering consultancies, complex full stack architectures, and full-time technical roles.
          </p>

          <div className="pt-6">
            <a 
              href="mailto:josebotero679@gmail.com" 
              className="inline-flex items-center gap-3 text-lg sm:text-2xl font-mono text-white hover:text-brand transition-colors duration-300 border border-border-subtle bg-zinc-950 px-6 py-3 rounded-xl hover:border-brand/30 group"
            >
              <Mail size={20} className="text-zinc-500 group-hover:text-brand transition-colors" /> 
              josebotero679@gmail.com
            </a>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-6 pt-12">
            <div className="flex gap-6 text-zinc-500">
              <a href="https://github.com/Richard-2003" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/josebotero2026" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200"><Linkedin size={20} /></a>
              <a href="https://wa.me/573146379187" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200"><Smartphone size={20} /></a>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 bg-zinc-950 px-3 py-1 border border-border-subtle/60 rounded-full">
              <CheckCircle2 size={12} className="text-emerald-500" />
              WhatsApp Response ETA: &lt; 24h
            </div>

            <p className="text-[10px] font-mono text-zinc-600 pt-8">
              © 2026 JOSÉ BOTERO VALENCIA. CODE ARCHITECTED INDEPENDENTLY. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}

// Helper Component (Tipado Fuertemente de forma Senior para evitar 'any')
interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string;
}

function SkillCard({ icon, title, skills }: SkillCardProps) {
  return (
    <div className="p-6 bg-bg-surface border border-border-subtle rounded-xl premium-card-glow transition-all duration-300 hover:border-brand/40 group">
      <div className="text-zinc-500 group-hover:text-brand mb-4 transition-colors duration-300">
        {icon}
      </div>
      <h4 className="text-sm font-bold text-zinc-200 mb-1 tracking-tight group-hover:text-white transition-colors">{title}</h4>
      <p className="text-xs text-zinc-400 leading-relaxed font-normal">{skills}</p>
    </div>
  );
}