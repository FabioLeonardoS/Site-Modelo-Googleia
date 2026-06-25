import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, Upload, Volume2, Monitor, Sun, Zap, HelpCircle, 
  ChevronRight, ArrowLeft, Check, Send, Sparkles, User, Mail, Phone, MapPin 
} from 'lucide-react';

interface BriefFormData {
  name: string;
  email: string;
  phone: string;
  eventSize: 'pequeno' | 'medio' | 'grande' | 'mega';
  services: string[];
  venue: string;
  additionalNotes: string;
  riderFile: File | null;
}

export default function RiderForm() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<BriefFormData>({
    name: '',
    email: '',
    phone: '',
    eventSize: 'medio',
    services: ['audio', 'video'],
    venue: '',
    additionalNotes: '',
    riderFile: null
  });

  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleService = (service: string) => {
    if (formData.services.includes(service)) {
      setFormData({
        ...formData,
        services: formData.services.filter(s => s !== service)
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, service]
      });
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData({
        ...formData,
        riderFile: e.dataTransfer.files[0]
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        riderFile: e.target.files[0]
      });
    }
  };

  const getRecommendedEquipment = () => {
    const list: string[] = [];
    if (formData.services.includes('audio')) {
      list.push(formData.eventSize === 'pequeno' || formData.eventSize === 'medio' 
        ? "Consoles Yamaha DM7 & Microfonação Digital Shure ULX-D" 
        : "Consoles Yamaha RIVAGE PM5/DM7 & Microfonação Shure Axient Digital com Rede Dante Redundante");
    }
    if (formData.services.includes('video')) {
      list.push(formData.eventSize === 'pequeno' || formData.eventSize === 'medio'
        ? "Painéis de LED Absen P2.9 & Processamento NovaStar" 
        : "Painéis de LED Absen High-Refresh P2.9/P3.91, Processadores NovaStar H9 e Video Mapping via Resolume Arena");
    }
    if (formData.services.includes('lighting')) {
      list.push(formData.eventSize === 'pequeno' || formData.eventSize === 'medio'
        ? "Mesa grandMA3 Compact XT & Iluminação Cênica LED"
        : "Consoles grandMA3 Light, Moving Heads Robe de alta performance e projetos 3D");
    }
    if (formData.services.includes('power')) {
      list.push("Grupo de Geradores Cabinados Silenciados com ATS redundante (Risco Zero)");
    }
    return list;
  };

  const generateWhatsAppLink = () => {
    const spacePrefix = "%20";
    const breakLine = "%0A";
    
    let text = `*NOVO BRIEFING - SOMARTS EVENTOS*${breakLine}${breakLine}`;
    text += `*Contato:*${breakLine}`;
    text += `• Nome: ${formData.name}${breakLine}`;
    text += `• E-mail: ${formData.email}${breakLine}`;
    text += `• Telefone: ${formData.phone}${breakLine}${breakLine}`;
    
    text += `*Detalhes do Evento:*${breakLine}`;
    text += `• Local/Hotel: ${formData.venue || 'Não informado'}${breakLine}`;
    
    const sizeMap = {
      pequeno: "Pequeno (Plenárias locais)",
      medio: "Médio (Até 300 pessoas)",
      grande: "Grande (De 300 a 800 pessoas)",
      mega: "Mega Convenção Nacional (+800 pessoas)"
    };
    text += `• Porte: ${sizeMap[formData.eventSize]}${breakLine}${breakLine}`;
    
    text += `*Serviços Requeridos:*${breakLine}`;
    formData.services.forEach(s => {
      const sMap: Record<string, string> = {
        audio: "Sonorização Profissional",
        video: "Painéis de LED & Projeção",
        lighting: "Iluminação Cênica",
        power: "Energia Segura (Geradores)"
      };
      text += `• ${sMap[s]}${breakLine}`;
    });
    
    if (formData.riderFile) {
      text += `${breakLine}*Rider Técnico:* Anexado (${formData.riderFile.name})${breakLine}`;
    }
    
    if (formData.additionalNotes) {
      text += `${breakLine}*Observações:* ${formData.additionalNotes}${breakLine}`;
    }
    
    text += `${breakLine}---${breakLine}Enviado via simulador de briefing da Landing Page Somarts.`;
    
    // (71) 3374-2193 or (71) 3379-1910
    return `https://api.whatsapp.com/send?phone=557133742193&text=${text}`;
  };

  return (
    <section id="contato" className="py-24 bg-pitch-black text-white relative overflow-hidden border-t border-white/5">
      {/* Background elements */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent-light rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-widest text-accent uppercase bg-accent-light px-3 py-1 border border-accent-border">
            Engine de Briefing B2B
          </span>
          <h2 id="briefing-title" className="text-3xl md:text-5xl font-display font-bold tracking-tight mt-4 text-white">
            Desenhe o Seu Projeto Conosco.
          </h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base font-sans">
            Preencha os dados do seu evento em 3 passos simples. Nossa equipe de engenharia receberá o briefing imediato para analisar sua planta baixa.
          </p>
        </div>

        {/* Step Progress Bar */}
        <div className="max-w-md mx-auto mb-10">
          <div className="flex items-center justify-between font-mono text-xs text-zinc-500">
            <span className={step >= 1 ? 'text-accent font-bold' : ''}>1. Escopo & Porte</span>
            <span className={step >= 2 ? 'text-accent font-bold' : ''}>2. Local & Arquivo</span>
            <span className={step >= 3 ? 'text-accent font-bold' : ''}>3. Identificação</span>
          </div>
          <div className="w-full bg-white/5 h-1 mt-2 overflow-hidden">
            <motion.div 
              className="bg-accent h-full"
              initial={{ width: '33.33%' }}
              animate={{ width: `${step * 33.33}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Main interactive form card */}
        <div className="bg-white/5 border border-white/10 p-6 md:p-10 shadow-2xl relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
          
          <AnimatePresence mode="wait">
            {/* STEP 1: SERVICES AND SIZE */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-lg md:text-xl font-bold font-display text-zinc-200">
                    Selecione as demandas tecnológicas do seu evento:
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <button
                      type="button"
                      onClick={() => toggleService('audio')}
                      className={`p-4 border flex flex-col items-center justify-center text-center gap-3 transition-all cursor-pointer ${
                        formData.services.includes('audio')
                          ? 'bg-accent-light border-accent text-accent'
                          : 'bg-white/5 border-white/10 hover:border-white/20 text-zinc-400'
                      }`}
                    >
                      <Volume2 className="w-6 h-6 shrink-0" />
                      <span className="text-xs font-semibold tracking-wide font-mono">Sonorização</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => toggleService('video')}
                      className={`p-4 border flex flex-col items-center justify-center text-center gap-3 transition-all cursor-pointer ${
                        formData.services.includes('video')
                          ? 'bg-accent-light border-accent text-accent'
                          : 'bg-white/5 border-white/10 hover:border-white/20 text-zinc-400'
                      }`}
                    >
                      <Monitor className="w-6 h-6 shrink-0" />
                      <span className="text-xs font-semibold tracking-wide font-mono">Painéis & LED</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => toggleService('lighting')}
                      className={`p-4 border flex flex-col items-center justify-center text-center gap-3 transition-all cursor-pointer ${
                        formData.services.includes('lighting')
                          ? 'bg-accent-light border-accent text-accent'
                          : 'bg-white/5 border-white/10 hover:border-white/20 text-zinc-400'
                      }`}
                    >
                      <Sun className="w-6 h-6 shrink-0" />
                      <span className="text-xs font-semibold tracking-wide font-mono">Iluminação</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => toggleService('power')}
                      className={`p-4 border flex flex-col items-center justify-center text-center gap-3 transition-all cursor-pointer ${
                        formData.services.includes('power')
                          ? 'bg-accent-light border-accent text-accent'
                          : 'bg-white/5 border-white/10 hover:border-white/20 text-zinc-400'
                      }`}
                    >
                      <Zap className="w-6 h-6 shrink-0" />
                      <span className="text-xs font-semibold tracking-wide font-mono">Geradores (Energia)</span>
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold font-display text-zinc-200">
                    Qual é a escala estimada do público?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-4">
                    {[
                      { id: 'pequeno', title: 'Pequeno Porte', desc: 'Até 100 pax' },
                      { id: 'medio', title: 'Médio Porte', desc: '100 a 300 pax' },
                      { id: 'grande', title: 'Grande Porte', desc: '300 a 800 pax' },
                      { id: 'mega', title: 'Mega Evento', desc: 'Convenções (+800)' },
                    ].map((size) => (
                      <button
                        key={size.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, eventSize: size.id as any })}
                        className={`p-4 border text-left flex flex-col justify-between transition-all cursor-pointer ${
                          formData.eventSize === size.id
                            ? 'bg-accent-light border-accent text-accent shadow-md'
                            : 'bg-white/5 border-white/10 hover:border-white/20 text-zinc-400'
                        }`}
                      >
                        <span className="text-sm font-semibold font-display text-zinc-200">{size.title}</span>
                        <span className="text-xs text-zinc-400 mt-1 block">{size.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={formData.services.length === 0}
                    className="px-6 py-3 bg-accent text-black hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-sm transition-all inline-flex items-center gap-2 uppercase tracking-wide shadow-lg shadow-accent/15"
                  >
                    Prosseguir
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: RIDER FILE AND VENUE */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left input details */}
                  <div className="space-y-5">
                    <div>
                      <label className="text-sm font-semibold text-zinc-300 font-display flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-accent" />
                        Qual é o hotel, resort ou centro de convenções da Bahia?
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Tivoli Ecoresort Praia do Forte, Grand Palladium, etc"
                        value={formData.venue}
                        onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-accent focus:outline-none p-3.5 text-zinc-200 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-zinc-300 font-display flex items-center gap-2 mb-2">
                        Observações Especiais ou Planta Baixa
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Ex: Necessitamos de palco 3D integrado, delay line na plenária traseira, ou backup total redundante de som..."
                        value={formData.additionalNotes}
                        onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-accent focus:outline-none p-3.5 text-zinc-200 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  {/* Right simulated file drop */}
                  <div>
                    <span className="text-sm font-semibold text-zinc-300 font-display flex items-center gap-2 mb-2">
                      <FileText className="w-4 h-4 text-accent" />
                      Anexar o Rider Técnico do seu Evento (PDF, DOCX)
                    </span>
                    
                    <div
                      onDragEnter={handleDrag}
                      onDragOver={handleDrag}
                      onDragLeave={handleDrag}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`h-[180px] md:h-[220px] border-2 border-dashed flex flex-col items-center justify-center text-center p-6 cursor-pointer transition-all ${
                        dragActive 
                          ? 'border-accent bg-accent-light' 
                          : formData.riderFile 
                          ? 'border-emerald-500 bg-emerald-500/5' 
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept=".pdf,.docx,.doc,.txt,.xlsx"
                      />
                      
                      {formData.riderFile ? (
                        <>
                          <div className="p-3 bg-emerald-500/15 rounded-full border border-emerald-500/20 text-emerald-400 mb-3">
                            <Check className="w-6 h-6 animate-bounce" />
                          </div>
                          <span className="text-sm font-semibold text-zinc-200 font-mono truncate max-w-full px-4">
                            {formData.riderFile.name}
                          </span>
                          <span className="text-xs text-zinc-500 mt-1">
                            {(formData.riderFile.size / (1024 * 1024)).toFixed(2)} MB • Clique para alterar
                          </span>
                        </>
                      ) : (
                        <>
                          <div className="p-3 bg-white/5 border border-white/10 text-zinc-400 mb-3 group-hover:text-accent transition-colors">
                            <Upload className="w-6 h-6" />
                          </div>
                          <span className="text-sm font-medium text-zinc-300">
                            Arraste seu PDF de Rider Técnico aqui
                          </span>
                          <span className="text-xs text-zinc-500 mt-1">
                            ou clique para navegar no seu computador
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 font-semibold text-sm transition-all inline-flex items-center gap-1.5 uppercase tracking-wide"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Voltar
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-6 py-3 bg-accent text-black hover:bg-accent-hover font-semibold text-sm transition-all inline-flex items-center gap-2 uppercase tracking-wide shadow-lg shadow-accent/15"
                  >
                    Prosseguir
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: CONTACT INFOS AND ESTIMATES RECOMMENDATIONS */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Left inputs */}
                  <div className="md:col-span-7 space-y-4">
                    <h3 className="text-lg font-bold font-display text-zinc-200">
                      Identificação da Agência / Produtora
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1">
                      Precisamos do seu contato corporativo para que nosso Diretor de Projetos retorne o contato com a planta técnica montada em 3D.
                    </p>

                    <div className="space-y-4 pt-2">
                      <div className="relative">
                        <User className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                        <input
                          type="text"
                          required
                          placeholder="Seu Nome Completo"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-accent focus:outline-none p-3.5 pl-11 text-zinc-200 transition-colors text-sm"
                        />
                      </div>

                      <div className="relative">
                        <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                        <input
                          type="email"
                          required
                          placeholder="E-mail Corporativo"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-accent focus:outline-none p-3.5 pl-11 text-zinc-200 transition-colors text-sm"
                        />
                      </div>

                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                        <input
                          type="tel"
                          required
                          placeholder="Telefone / WhatsApp (com DDD)"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-accent focus:outline-none p-3.5 pl-11 text-zinc-200 transition-colors text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right: Dynamic estimation preview */}
                  <div className="md:col-span-5 bg-white/5 border border-white/10 p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3 text-accent font-mono text-[10px] uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                        <span>Sugerido pela Engenharia</span>
                      </div>
                      <span className="text-xs font-bold text-zinc-300 font-display block uppercase tracking-wide">Equipamentos do Escopo</span>
                      
                      <div className="space-y-3 mt-4">
                        {getRecommendedEquipment().map((equip, idx) => (
                          <div key={idx} className="flex gap-2 items-start text-xs text-zinc-400">
                            <span className="text-accent font-mono mt-0.5">•</span>
                            <span className="leading-relaxed">{equip}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 text-xxs font-mono text-zinc-500 uppercase leading-relaxed">
                      Equipe técnica com operador de áudio dedicado, operador de VJ Resolume e diretor de stage.
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 font-semibold text-sm transition-all inline-flex items-center gap-1.5 uppercase tracking-wide"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Voltar
                  </button>

                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-accent text-black hover:bg-accent-hover font-semibold text-sm transition-all inline-flex items-center gap-2 uppercase tracking-wide shadow-lg shadow-accent/25 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Rider e Conectar no WhatsApp
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
