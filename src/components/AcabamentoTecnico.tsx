import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HOTSPOTS_DATA } from '../data';
import { Sparkles, Eye, ShieldCheck, CheckCircle } from 'lucide-react';

export default function AcabamentoTecnico() {
  const [activeHotspot, setActiveHotspot] = useState<string>("bastidores");

  const currentData = HOTSPOTS_DATA.find(h => h.id === activeHotspot) || HOTSPOTS_DATA[0];

  return (
    <section id="acabamento" className="py-24 bg-pitch-black text-white relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,30,40,0.15),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-light rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-accent uppercase bg-accent-light px-3 py-1 border border-accent-border">
            A Assinatura Somarts
          </span>
          <h2 id="acabamento-title" className="text-3xl md:text-5xl font-display font-bold tracking-tight mt-4 text-white">
            O Acabamento Técnico é a Nossa Marca Registrada.
          </h2>
          <p className="text-gray-400 mt-4 text-lg font-sans">
            Acreditamos que o backstage deve ser tão impecável quanto o palco principal. Clique nos pontos interativos para conhecer nosso padrão maniaco de organização.
          </p>
        </div>

        {/* Hotspot grid / layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Interactive Image with Hotspot Pins */}
          <div className="lg:col-span-7 relative group overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 aspect-video">
            <img
              src="/images/backstage_engineer_1782392507272.jpg"
              alt="Backstage Técnico da Somarts Eventos"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Dark overlay for rich contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-pitch-black/60 via-transparent to-pitch-black/20 pointer-events-none" />

            {/* Hotspots Render */}
            {HOTSPOTS_DATA.map((hotspot) => {
              const isActive = activeHotspot === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setActiveHotspot(hotspot.id)}
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/pin"
                >
                  {/* Glowing halo ring */}
                  <span className={`absolute inset-0 rounded-full scale-150 animate-ping opacity-60 ${isActive ? 'bg-accent' : 'bg-white/80'}`} />
                  
                  {/* Outer circle */}
                  <span className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all ${
                    isActive 
                      ? 'bg-accent border-accent text-black scale-110 shadow-lg shadow-accent/35' 
                      : 'bg-black/90 border-zinc-500 text-white hover:border-accent hover:text-accent'
                  }`}>
                    {isActive ? (
                      <Sparkles className="w-4 h-4" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-white group-hover/pin:bg-accent transition-colors" />
                    )}
                  </span>

                  {/* Tiny label on hover */}
                  <span className="absolute left-1/2 -translate-x-1/2 top-10 whitespace-nowrap px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase bg-black/90 border border-zinc-800 rounded opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none text-zinc-300">
                    {hotspot.title}
                  </span>
                </button>
              );
            })}

            {/* Visual Instruction Badge */}
            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded flex items-center gap-2 text-xs text-zinc-300 pointer-events-none">
              <Eye className="w-3.5 h-3.5 text-accent animate-pulse" />
              <span>Toque nos pontos brilhantes no painel</span>
            </div>
          </div>

          {/* Right: Detailed text presentation with animations */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="space-y-4">
              {/* Tabs buttons to switch content manually as fallback */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-white/10 pb-4">
                {HOTSPOTS_DATA.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setActiveHotspot(h.id)}
                    className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all border ${
                      activeHotspot === h.id
                        ? 'bg-accent-light border-accent-border text-accent'
                        : 'border-transparent text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {h.title.split(" ")[0]}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentData.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white/5 p-8 border border-white/10 relative"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-accent-light rounded-full blur-2xl" />
                  
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="p-2.5 bg-accent-light border border-accent-border">
                      <ShieldCheck className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white">
                      {currentData.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 leading-relaxed font-sans text-sm md:text-base">
                    {currentData.description}
                  </p>

                  <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                    <span className="text-xxs font-mono text-zinc-500 uppercase tracking-widest block">Compromisso B2B:</span>
                    <div className="flex items-start gap-2.5 text-xs text-gray-400">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>Rígido controle com check-list impresso de montagem entregue ao diretor de palco.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-gray-400">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>Montadores uniformizados com calçados de segurança e crachás de identificação.</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
