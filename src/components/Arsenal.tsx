import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EQUIPMENTS_DATA } from '../data';
import { Volume2, Monitor, Sun, Zap, CheckCircle2 } from 'lucide-react';

export default function Arsenal() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'audio' | 'video' | 'lighting' | 'power'>('all');

  const categories = [
    { id: 'all', label: 'Ver Todo o Arsenal', icon: null },
    { id: 'audio', label: 'Áudio & Som', icon: Volume2 },
    { id: 'video', label: 'Painéis & Projeção', icon: Monitor },
    { id: 'lighting', label: 'Luz & Iluminação', icon: Sun },
    { id: 'power', label: 'Energia & Clima', icon: Zap },
  ];

  const filteredEquipments = selectedCategory === 'all'
    ? EQUIPMENTS_DATA
    : EQUIPMENTS_DATA.filter(item => item.category === selectedCategory);

  return (
    <section id="arsenal" className="py-24 bg-pitch-black text-white relative overflow-hidden border-t border-white/5">
      {/* Background radial spotlights */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-light rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-accent-light rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-accent uppercase bg-accent-light px-3 py-1 border border-accent-border">
              Alta Performance Homologada
            </span>
            <h2 id="arsenal-title" className="text-3xl md:text-5xl font-display font-bold tracking-tight mt-4 text-white">
              Tecnologia Invisível, <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">Impacto Visível</span>
            </h2>
            <p className="text-gray-400 mt-2 text-base md:text-lg max-w-2xl">
              Equipamentos de padrão internacional mantidos sob rigoroso controle de manutenção. O melhor portfólio de marcas globais operando em sincronia para o seu evento corporativo.
            </p>
          </div>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-6 mb-10 overflow-x-auto scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs md:text-sm font-mono tracking-wide uppercase transition-all shrink-0 border ${
                  isSelected
                    ? 'bg-accent border-accent text-black font-semibold shadow-lg shadow-accent/15'
                    : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Equipment Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredEquipments.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col justify-between bg-white/5 border border-white/10 p-6 transition-all duration-300 relative overflow-hidden"
              >
                {/* Tech grid texture inside card */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-medium text-accent tracking-wider uppercase bg-accent-light border border-accent-border px-2.5 py-1">
                      {item.brand}
                    </span>
                    <span className="text-xxs font-mono text-zinc-500 flex items-center gap-1.5 uppercase">
                      <span className={`w-2 h-2 rounded-full ${item.category === 'power' ? 'bg-emerald-500' : 'bg-blue-500'} animate-pulse`} />
                      Operação Ativa
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-zinc-100 group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    <span className="text-xxs font-mono text-zinc-500 uppercase tracking-widest block">Especificações Técnicas:</span>
                    {item.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-accent/70 mt-0.5 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-zinc-500 font-mono">Disponível na Bahia</span>
                  <a
                    href="#contato"
                    className="text-accent group-hover:text-accent-hover hover:underline font-semibold font-mono"
                  >
                    Consultar Cotação &rarr;
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Brand strip showing global standard logos in elegant text formats */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale contrast-200">
          <span className="font-display font-bold text-lg tracking-wider text-white">YAMAHA RIVAGE</span>
          <span className="font-sans font-bold text-xl tracking-widest text-white">SHURE</span>
          <span className="font-display font-bold text-lg tracking-wide text-white">ABSEN LED</span>
          <span className="font-mono text-base tracking-widest text-white">grandMA 3</span>
          <span className="font-sans font-black italic text-lg tracking-tight text-white">RESOLUME</span>
        </div>
      </div>
    </section>
  );
}
