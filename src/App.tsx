import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Volume2, Monitor, Sun, Zap, Shield, Phone, MessageSquare, 
  MapPin, CheckCircle2, ChevronRight, Star, Heart, Award, ArrowUpRight, HelpCircle
} from 'lucide-react';

import RiscoSolucao from './components/RiscoSolucao';
import Arsenal from './components/Arsenal';
import AcabamentoTecnico from './components/AcabamentoTecnico';
import LogisticaMap from './components/LogisticaMap';
import RiderForm from './components/RiderForm';
import { TESTIMONIALS_DATA } from './data';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // WhatsApp click handler for floating button
  const handleWhatsAppClick = () => {
    // Lead phone number for Somarts (71) 3374-2193
    window.open('https://api.whatsapp.com/send?phone=557133742193&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20e%20falar%20com%20um%20Engenheiro%20T%C3%A9cnico%20da%20Somarts%20para%20o%20meu%20evento%20corporativo.', '_blank');
  };

  return (
    <div className="bg-pitch-black text-gray-100 font-sans selection:bg-accent selection:text-black min-h-screen relative overflow-x-hidden">
      
      {/* IMMERSIVE BG GLOW PATTERNS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-accent-light rounded-full blur-[100px]" />
        <div className="absolute -bottom-48 left-1/4 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[150px]" />
      </div>

      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 left-0 w-full h-20 border-b border-white/10 bg-pitch-black/80 backdrop-blur-md z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          
          {/* Logo brand */}
          <a href="#" className="flex items-center h-10 group">
            <img 
              src="https://somarts.com.br/theme/Site/img/theme/logo-head.png" 
              alt="SOMARTS EVENTOS" 
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105" 
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase">
            <a href="#blindagem" className="text-gray-400 hover:text-white transition-colors">Diferenciais</a>
            <a href="#arsenal" className="text-gray-400 hover:text-white transition-colors">Arsenal</a>
            <a href="#acabamento" className="text-gray-400 hover:text-white transition-colors">Acabamento</a>
            <a href="#logistica" className="text-gray-400 hover:text-white transition-colors">Logística</a>
            <a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors">Cases</a>
          </nav>

          {/* Action button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#contato" 
              className="px-6 py-2.5 border border-accent/50 text-accent hover:bg-accent hover:text-black font-mono text-xs uppercase tracking-widest font-bold transition-all inline-flex items-center gap-2"
            >
              Falar com Engenheiro
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Abrir menu"
          >
            <div className="space-y-1.5 w-6">
              <span className={`block h-0.5 w-full bg-current transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 w-0' : 'w-full'}`} />
              <span className={`block h-0.5 w-full bg-current transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-zinc-950 border-b border-white/10 px-6 py-8 space-y-4"
          >
            <nav className="flex flex-col gap-4 text-sm font-mono tracking-wider uppercase">
              <a href="#blindagem" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-accent">Diferenciais</a>
              <a href="#arsenal" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-accent">Arsenal</a>
              <a href="#acabamento" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-accent">Acabamento</a>
              <a href="#logistica" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-accent">Logística</a>
              <a href="#depoimentos" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-accent">Cases</a>
            </nav>
            <div className="pt-4 border-t border-white/10">
              <a 
                href="#contato" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-accent hover:bg-accent-hover text-black text-center font-bold text-xs uppercase tracking-wider inline-block"
              >
                Falar com Engenheiro
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* Ambient background with grid lines and blueprint effects overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-pitch-black via-pitch-black/95 to-zinc-950/98" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            
            {/* Left side: presentation card and title */}
            <div className="lg:col-span-7 text-left flex flex-col items-start">
              
              {/* Slide header title with logo icon */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-6"
              >
                <img 
                  src="https://somarts.com.br/theme/Site/img/theme/logo-head.png" 
                  alt="SOMARTS" 
                  className="h-8 w-auto object-contain" 
                  referrerPolicy="no-referrer"
                />
                <span className="text-zinc-600 font-light">|</span>
                <span className="text-xs font-mono tracking-[0.25em] text-zinc-400 font-bold uppercase">ENG. AUDIOVISUAL</span>
              </motion.div>

              {/* Blue-grey premium pill block exactly matching page 1 slide */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="bg-slate-900/60 border border-slate-700/40 p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-md mb-6 relative overflow-hidden w-full"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-accent" />
                <h1 className="text-xl sm:text-2xl md:text-3xl font-display font-bold tracking-tight leading-relaxed text-zinc-100">
                  O padrão de excelência em infraestrutura e tecnologia para grandes convenções e megaeventos corporativos na Bahia.
                </h1>
              </motion.div>

              {/* Slide highlight statement: "Do projeto na planta baixa ao play final na House Mix." */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-white font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight mb-6 leading-normal"
              >
                Do projeto na planta baixa ao play final na House Mix.
              </motion.p>

              {/* Small supporting paragraph */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed mb-8"
              >
                Mais que locação de equipamentos, entregamos tranquilidade. O seu evento corporativo não tem margem para o erro. Tenha o padrão técnico de São Paulo executado com maestria no Nordeste.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <a 
                  href="#contato" 
                  className="px-8 py-4 bg-accent hover:bg-accent-hover text-black font-bold text-sm uppercase tracking-wider transition-all shadow-xl shadow-accent/20 inline-flex items-center justify-center gap-2 group"
                >
                  Enviar meu Rider Técnico
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="#arsenal" 
                  className="px-8 py-4 bg-white/5 border border-white/10 text-gray-300 hover:text-white font-semibold text-sm rounded uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2"
                >
                  Ver Equipamentos
                </a>
              </motion.div>

            </div>

            {/* Right side: The pristine Presentation Image from Slide Page 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative flex justify-center items-center w-full"
            >
              {/* Decorative radial blur backing */}
              <div className="absolute -inset-4 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
              
              {/* Photo Frame matching slide style */}
              <div className="relative border border-white/10 p-2 bg-zinc-900/50 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden w-full max-w-2xl">
                <img 
                  src="/images/hero_stage_av_1782392496398.jpg" 
                  alt="Slide 1 Presentation Stage" 
                  className="w-full h-auto object-cover rounded-xl border border-white/5 shadow-inner"
                  referrerPolicy="no-referrer"
                />
                
                {/* Tech specifications tag embedded under the picture */}
                <div className="absolute bottom-6 right-6 bg-pitch-black/85 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-[9px] font-mono uppercase tracking-widest text-zinc-400">
                  SOMARTS HOUSE MIX CONTROL
                </div>
              </div>

            </motion.div>

          </div>

          {/* Bullet proofs */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 mt-20 pt-10 border-t border-white/10 w-full max-w-5xl font-mono text-[11px] text-gray-500 uppercase tracking-widest text-center"
          >
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-accent font-bold text-sm">✓ ZERO GARGALO</span>
              <span>Estrutura Própria na Bahia</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-accent font-bold text-sm">✓ SEM ADAPTAÇÕES</span>
              <span>Rider Técnico Cumprido</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-accent font-bold text-sm">✓ HOT STANDBY</span>
              <span>Backup Total de Sinal</span>
            </div>
          </motion.div>
        </div>

        {/* Diagonal cut decorative line */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-pitch-black to-transparent pointer-events-none" />
      </section>

      {/* COMPONENT SECTION 2: A DOR E SOLUÇÃO (BLINDAGEM TOTAL) */}
      <RiscoSolucao />

      {/* COMPONENT SECTION 3: NOSSO ARSENAL */}
      <Arsenal />

      {/* COMPONENT SECTION 5: ACABAMENTO TÉCNICO HOTSPOTS */}
      <AcabamentoTecnico />

      {/* COMPONENT SECTION 6: MAPA DE LOGÍSTICA */}
      <LogisticaMap />

      {/* SECTION 4: PROVA SOCIAL (TESTIMONIALS) */}
      <section id="depoimentos" className="py-24 bg-pitch-black text-white relative overflow-hidden border-t border-white/5">
        {/* Background light details */}
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-light rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-accent uppercase bg-accent-light px-3 py-1 border border-accent-border">
              Validação do Mercado
            </span>
            <h2 id="depoimentos-title" className="text-3xl md:text-5xl font-display font-bold tracking-tight mt-4 text-white">
              A Voz de Quem Exige Excelência
            </h2>
            <p className="text-gray-400 mt-4 text-base font-sans">
              A satisfação absoluta de diretores técnicos de agências do Sudeste operando na Bahia. Veja a experiência real de quem não abre mão da perfeição.
            </p>
          </div>

          {/* Testimonial comments grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {TESTIMONIALS_DATA.map((t) => (
              <div 
                key={t.id}
                className="bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col justify-between hover:border-accent-border transition-all group relative overflow-hidden"
              >
                {/* Visual quote indicator */}
                <span className="text-5xl font-serif text-accent/10 absolute top-4 left-4 font-black">“</span>
                
                <div>
                  {/* Google maps style stars */}
                  <div className="flex gap-1 mb-4 relative z-10">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>

                  <p className="text-sm md:text-base text-gray-300 leading-relaxed font-sans relative z-10 italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-3">
                  {/* Simulated letter avatar */}
                  <div className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center font-bold font-display text-sm text-accent">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-200 uppercase font-mono">{t.author}</h4>
                    <span className="text-[10px] text-gray-500 block leading-tight">{t.role}</span>
                    {t.company && <span className="text-[9px] text-accent/70 font-mono block mt-0.5">{t.company}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPONENT SECTION 7: DETAILED RIDER & BRIEFING BUILDER */}
      <div id="rider-builder" className="border-t border-white/5">
        <RiderForm />
      </div>

      {/* SECTION 8: FINAL CTA BANNER */}
      <section className="py-24 bg-gradient-to-t from-pitch-black to-zinc-950 text-white relative overflow-hidden border-t border-white/5">
        {/* Full-bleed sunset resort setup background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/bahia_resort_event_1782392518511.jpg" 
            alt="Show e Convenção de sucesso na Bahia" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pitch-black via-pitch-black/95 to-pitch-black" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="p-10 md:p-16 bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent-light rounded-full blur-3xl" />
            
            <h2 id="final-cta-title" className="text-3xl md:text-5xl font-display font-black tracking-tight text-white mb-4">
              O próximo nível do seu evento na Bahia começa aqui.
            </h2>
            
            <p className="text-gray-400 mt-2 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
              Não perca noites de sono com a produção local. Vamos analisar a sua planta baixa e desenhar a melhor solution? Fale com nosso Diretor Técnico agora e garanta risco zero na sua entrega.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Secondary CTA */}
              <a 
                href="#contato"
                className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-hover text-black font-bold text-sm uppercase tracking-wider transition-all shadow-xl shadow-accent/15 inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                Chamar no WhatsApp
              </a>

              <a 
                href="mailto:comercial1@somarts.com.br"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-gray-300 hover:text-white font-semibold text-sm uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2"
              >
                Enviar por E-mail
              </a>
            </div>

            {/* Quick Contact Infos Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 mt-10 border-t border-white/10 font-mono text-xs text-gray-500 text-center">
              <div>
                <span className="text-[10px] text-gray-600 uppercase block">Atendimento Bahia:</span>
                <span className="text-gray-300 mt-1 block font-semibold">(71) 3374-2193 / (71) 3379-1910</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-600 uppercase block">E-mail Comercial:</span>
                <a href="mailto:comercial1@somarts.com.br" className="text-gray-300 mt-1 block font-semibold hover:text-accent">comercial1@somarts.com.br</a>
              </div>
              <div>
                <span className="text-[10px] text-gray-600 uppercase block">Central Administrativa:</span>
                <span className="text-gray-300 mt-1 block font-semibold">Lauro de Freitas / Salvador</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REAL B2B FOOTER */}
      <footer className="bg-pitch-black border-t border-white/10 py-16 text-gray-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Branding block */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center">
                <img 
                  src="https://somarts.com.br/theme/Site/img/theme/logo-head.png" 
                  alt="SOMARTS EVENTOS" 
                  className="h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
                Engenharia Audiovisual de Alta Performance homologada para grandes plenárias corporativas, congressos médicos e mega convenções na Bahia.
              </p>
              <p className="text-[10px] text-gray-600">
                Sede: Rua Itagibá, 270 - Pitangueiras, Lauro de Freitas - BA. CEP 42701-380.
              </p>
            </div>

            {/* Quick sections Links */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-bold text-gray-300 font-mono uppercase tracking-widest">Nossos Serviços</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#arsenal" className="hover:text-accent transition-colors">Sonorização para Convenções</a></li>
                <li><a href="#arsenal" className="hover:text-accent transition-colors">Painéis de LED Absen e Processamento</a></li>
                <li><a href="#arsenal" className="hover:text-accent transition-colors">Iluminação Cênica grandMA3</a></li>
                <li><a href="#arsenal" className="hover:text-accent transition-colors">Video Mapping e Projeção de Lente Curta</a></li>
                <li><a href="#arsenal" className="hover:text-accent transition-colors">Backup Energético de Segurança</a></li>
              </ul>
            </div>

            {/* Quick Contact & Instagram Block */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs font-bold text-gray-300 font-mono uppercase tracking-widest">Siga nas Redes</h4>
              <p className="text-xs text-gray-400">Acompanhe nossos bastidores e montagens em tempo real no Instagram.</p>
              <div className="flex flex-col gap-2">
                <a 
                  href="https://instagram.com/somartseventos" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs text-accent hover:text-accent-hover font-semibold inline-flex items-center gap-1.5"
                >
                  @somartseventos
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <span className="text-[10px] text-gray-600 font-mono block">Atendimento comercial unificado de segunda a sexta, das 08:00 às 18:00.</span>
              </div>
            </div>
          </div>

          <div className="pt-12 mt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-gray-600">
            <span>© 2026 Somarts Eventos. Logística dominada em Salvador, Litoral Norte e grandes polos da Bahia. Todos os direitos reservados.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-400">Termos de Serviço</a>
              <a href="#" className="hover:text-gray-400">Políticas de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>

      {/* DYNAMIC FLOATING WHATSAPP BUTTON */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 p-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center justify-center border border-emerald-500/30 w-14 h-14"
        aria-label="Fale conosco no WhatsApp"
      >
        <div className="absolute inset-0 bg-emerald-600/45 animate-ping rounded-full opacity-60 pointer-events-none" />
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-whatsapp w-6 h-6 relative z-10 shrink-0" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg>
        
        {/* Hover pill badge showing action prompt */}
        <span className="absolute right-16 whitespace-nowrap px-3 py-1.5 bg-pitch-black border border-white/10 text-gray-200 text-xxs font-mono rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-xl">
          WhatsApp Comercial (71) 3374-2193
        </span>
      </button>

    </div>
  );
}
