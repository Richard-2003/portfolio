"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Smartphone, Server, Brain, Code, Globe, Database, Cloud} from 'lucide-react';
import Image from "next/image";

export default function Portfolio() {
  
  // Design Variables
  const colors = {
    bg: "bg-[#0a0a0a]",
    card: "bg-[#161616]",
    textPrimary: "text-gray-100",
    textSecondary: "text-gray-400",
    accent: "text-[#ff007f]", // The pink from your flyer
    accentHover: "hover:text-[#ff007f]",
    btnPrimary: "bg-[#ff007f] hover:bg-[#d9006c] text-white",
    btnOutline: "border border-[#ff007f] text-[#ff007f] hover:bg-[#ff007f] hover:text-white"
  };

  return (
    <main className={`min-h-screen ${colors.bg} font-sans selection:bg-[#ff007f] selection:text-white`}>
      
      {/* --- NAVBAR --- */}
    <nav className="fixed w-full z-50 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gray-700"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          >
            <Image
              src="/img.jpg"
              alt="José Ricardo Botero"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-xl font-bold text-white tracking-tighter">
            JOSE<span className={colors.accent}>.DEV</span>
          </h1>
        </div>

        {/* RIGHT: Navigation */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#about" className={colors.accentHover}>About</a>
          <a href="#skills" className={colors.accentHover}>Skills</a>
          <a href="#projects" className={colors.accentHover}>Projects</a>
          <a href="#contact" className={colors.accentHover}>Contact</a>
        </div>

      </div>
    </nav>
      {/* --- HERO SECTION --- */}
      <section className="h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Abstract Background Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff007f]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

        <div className="max-w-4xl text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <span className={`inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase border border-gray-700 rounded-full ${colors.textSecondary}`}>
              Full Stack Developer
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Building modern solutions that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff007f] to-purple-600">
                generate real results.
              </span>
            </h2>
            <p className={`text-lg md:text-xl ${colors.textSecondary} max-w-2xl mx-auto mb-10`}>
              I turn complex problems into scalable web applications and intelligent software. 
              Focused on performance, security, and business growth.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#projects" className={`px-8 py-3 rounded-lg font-bold transition-all ${colors.btnPrimary}`}>
                View Projects
              </a>
              <a href="#contact" className={`px-8 py-3 rounded-lg font-bold transition-all ${colors.btnOutline}`}>
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TECH STACK (Skills) --- */}
      <section id="skills" className="py-20 px-6 border-t border-gray-900">
        <div className="max-w-6xl mx-auto">

          <h3 className="text-3xl font-bold text-white mb-12 text-center">Technical <span className={colors.accent}>Arsenal</span></h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SkillCard icon={<Globe size={32} />} title="Frontend" skills="React, Next.js, TypeScript, Tailwind, Angular, Vue" />
            <SkillCard icon={<Server size={32} />} title="Backend" skills="Python, Django, FastAPI, Node.js, Java, C#" />
            <SkillCard icon={<Brain size={32} />} title="AI & Data" skills="Keras, NLP, Gemini API, MySQL, PostgreSQL" />
            <SkillCard icon={<Cloud size={32} />} title="DevOps" skills="Docker, AWS, Google Cloud, Azure, Git" />
          </div>
        </div>
      </section>

      {/* --- FEATURED PROJECTS --- */}
      <motion.section
        id="projects"
        className="py-24 px-6 bg-[#0d0d0d]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Featured Work</h3>
            <p className={colors.textSecondary}>Selected projects demonstrating Full Stack & AI capabilities.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1: Neura */}
            <ProjectCard 
              title="Neura - AI Emotional Diary" 
              desc="Mobile app for mental wellness utilizing Gemini AI to analyze emotional patterns and provide suggestions."
              tags={['Kotlin', 'FastAPI', 'Gemini AI', 'PostgreSQL']}
              color={colors}
            />
            {/* Project 2: Vix */}
            <ProjectCard 
              title="Vix - AI Virtual Assistant" 
              desc="Intelligent chatbot trained with Neural Networks (Keras) capable of NLP and executing system commands."
              tags={['Python', 'Keras', 'NLP', 'Rest API']}
              color={colors}
            />
            {/* Project 3: Hotel Canino */}
            <ProjectCard 
              title="Pet Hotel Platform" 
              desc="High-conversion web platform designed to showcase services and drive customer bookings."
              tags={['React', 'UX/UI', 'JavaScript', 'CSS3']}
              color={colors}
            />
          </div>
        </div>
      </motion.section>

      {/* --- SERVICES --- */}
      <section className="py-20 px-6 border-t border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-12">How can I help you?</h3>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className={`p-6 rounded-xl border border-gray-800 ${colors.card}`}>
              <Code className={`mb-4 ${colors.accent}`} size={40} />
              <h4 className="text-xl font-bold text-white mb-2">Web & Software Development</h4>
              <p className="text-gray-400">Custom tailored sites and software built with modern frameworks like React and Next.js.</p>
            </div>
            <div className={`p-6 rounded-xl border border-gray-800 ${colors.card}`}>
              <Database className={`mb-4 ${colors.accent}`} size={40} />
              <h4 className="text-xl font-bold text-white mb-2">Backend & API Architecture</h4>
              <p className="text-gray-400">Scalable REST APIs using Python and Node.js, focusing on security and efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER / CONTACT --- */}
      <footer id="contact" className="py-20 px-6 bg-black text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to start a project?</h2>
        <p className="text-gray-400 mb-8 text-lg">Open for freelance and full-time opportunities.</p>
        <a 
          href="mailto:josebotero679@gmail.com" 
          className={`inline-flex items-center gap-2 text-2xl font-bold ${colors.accent} hover:underline`}
        >
          <Mail /> josebotero679@gmail.com
        </a>
        
        <div className="flex justify-center gap-6 mt-12 text-gray-500">
          <a href="https://github.com/Richard-2003" className="hover:text-white transition-colors"><Github size={24} /></a>
          <a href="https://www.linkedin.com/in/josebotero2026" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
          <a href="https://wa.me/573146379187" className="hover:text-white transition-colors"><Smartphone size={24} /></a>
          <p className="text-sm text-gray-500 mt-4">
            Available on WhatsApp · Response within 24h
          </p>
        </div>
        <p className="mt-12 text-gray-600 text-sm">© 2026 José Ricardo Botero Valencia. All rights reserved.</p>
      </footer>

    </main>
  );
}

// Helper Components

function SkillCard({ icon, title, skills }: { icon: any, title: string, skills: string }) {
  return (
    <div className="p-6 bg-[#161616] rounded-xl border border-gray-800 hover:border-[#ff007f] transition-all group">
      <div className="text-gray-400 group-hover:text-[#ff007f] mb-4 transition-colors">{icon}</div>
      <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
      <p className="text-sm text-gray-400 leading-relaxed">{skills}</p>
    </div>
  );
}

function ProjectCard({ title, desc, tags, color }: { title: string, desc: string, tags: string[], color: any }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#161616] border border-gray-800 hover:border-gray-600 transition-all">
      <div className="p-8">
        <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ff007f] transition-colors">{title}</h4>
        <p className="text-gray-400 mb-6 leading-relaxed">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 text-xs font-medium text-gray-300 bg-gray-800 rounded-full border border-gray-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}