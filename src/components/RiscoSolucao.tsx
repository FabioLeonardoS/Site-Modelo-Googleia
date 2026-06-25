import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, ShieldCheck, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { RISK_SOLUTION_DATA } from '../data';

export default function RiscoSolucao() {
  const [hoveredRisk, setHoveredRisk] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'compare' | 'risk' | 'solution'>('compare');

  return (
    <section id="blindagem" className="py-24 bg-pitch-black text-white relative overflow-hidden border-t border-white/5">
      {/* Background blueprint lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-light rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-accent-light rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-accent uppercase bg-accent-light px-3 py-1 border border-accent-border">
            Análise de Engenharia
          </span>
          <h2 id="risco-solucao-title" className="text-3xl md:text-5xl font-display font-bold tracking-tight mt-4 text-white">
            {RISK_SOLUTION_DATA.title}
          </h2>
          <p className="text-gray-400 mt-4 text-lg font-sans">
            {RISK_SOLUTION_DATA.description}
          </p>
        </div>

        {/* Mobile View Toggle */}
        <div className="flex md:hidden justify-center p-1 bg-white/5 border border-white/10 mb-8 max-w-sm mx-auto">
          <button
            onClick={() => setActiveTab('compare')}
            className={`flex-1 py-2 text-xs font-medium transition-all ${activeTab === 'compare' ? 'bg-accent text-black shadow-md' : 'text-zinc-400 hover:text-white'}`}
          >
            Lado a Lado
          </button>
          <button
            onClick={() => setActiveTab('risk')}
            className={`flex-1 py-2 text-xs font-medium transition-all ${activeTab === 'risk' ? 'bg-white/5 text-accent' : 'text-zinc-400 hover:text-white'}`}
          >
            Os Riscos
          </button>
          <button
            onClick={() => setActiveTab('solution')}
            className={`flex-1 py-2 text-xs font-medium transition-all ${activeTab === 'solution' ? 'bg-white/5 text-emerald-400' : 'text-zinc-400 hover:text-white'}`}
          >
            A Solução
          </button>
        </div>

        {/* Desktop grid & Interactive compare layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Risks column (Left side) */}
          <div className={`lg:col-span-6 flex flex-col justify-between space-y-6 ${activeTab === 'solution' ? 'hidden lg:flex' : ''}`}>
            <div className="p-6 bg-white/5 border border-red-950/40 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500/40" />
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <h3 className="text-lg font-bold font-display uppercase tracking-wide text-red-400">
                  A realidade amadora do mercado local
                </h3>
              </div>
              <p className="text-sm text-gray-400 font-sans">
                Para produtoras de fora, o maior pavor é a instabilidade e as improvisações de fornecedores sem infraestrutura real.
              </p>
            </div>

            <div className="space-y-4">
              {RISK_SOLUTION_DATA.risks.map((risk, index) => (
                <motion.div
                  key={risk.id}
                  className={`p-6 border transition-all cursor-pointer relative ${
                    hoveredRisk === risk.id
                      ? 'bg-white/10 border-red-500/40 shadow-lg shadow-red-500/5'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                  onMouseEnter={() => setHoveredRisk(risk.id)}
                  onMouseLeave={() => setHoveredRisk(null)}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-8 h-8 bg-red-500/10 text-red-400 font-mono text-xs font-bold border border-red-500/20">
                      0{index + 1}
                    </span>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-zinc-200 flex items-center gap-2">
                        {risk.title}
                        {hoveredRisk === risk.id && (
                          <motion.span layoutId="arrow-risk" className="text-red-400">
                            <ChevronRight className="w-4 h-4" />
                          </motion.span>
                        )}
                      </h4>
                      <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                        {risk.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Solution Column (Right side) */}
          <div className={`lg:col-span-6 flex flex-col justify-between ${activeTab === 'risk' ? 'hidden lg:flex' : ''}`}>
            <div className="h-full flex flex-col p-8 bg-white/5 border border-accent-border relative overflow-hidden shadow-2xl shadow-accent-light">
              {/* Accent backdrop-glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-light rounded-full blur-3xl" />
              <div className="absolute -top-10 -right-10 w-24 h-24 border border-accent-border rounded-full pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent-light border border-accent-border">
                  <ShieldCheck className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <span className="text-xs font-mono text-accent/80 tracking-widest uppercase">
                    Padrão de Engenharia Somarts
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold font-display text-white mt-0.5">
                    {RISK_SOLUTION_DATA.solution.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-300 mb-8 text-base leading-relaxed font-sans">
                {RISK_SOLUTION_DATA.solution.description}
              </p>

              <div className="space-y-4 flex-1">
                {RISK_SOLUTION_DATA.solution.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/5 p-4 border border-white/10 hover:border-accent-border transition-all">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm md:text-base text-gray-300 font-medium">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                  <HelpCircle className="w-4 h-4 text-accent" />
                  <span>Dúvida com a sua planta baixa?</span>
                </div>
                <a
                  href="#contato"
                  className="text-xs font-semibold text-accent hover:text-accent-hover flex items-center gap-1 group transition-all"
                >
                  Falar com Engenheiro Técnico
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic reassurance banner */}
        <div className="mt-16 p-6 md:p-8 bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-3xl">🛡️</span>
            <div>
              <h4 className="text-base font-bold font-display text-white">Rider Técnico Sem Surpresas</h4>
              <p className="text-xs md:text-sm text-gray-400">Assinamos em contrato o fornecimento exato de cada marca e console solicitados no seu rider.</p>
            </div>
          </div>
          <a
            href="#rider-builder"
            className="px-6 py-3 bg-accent hover:bg-accent-hover text-black font-bold text-sm transition-all shadow-lg shadow-accent/10 inline-flex items-center gap-2 uppercase tracking-wide shrink-0"
          >
            Enviar meu Rider Técnico
          </a>
        </div>
      </div>
    </section>
  );
}
