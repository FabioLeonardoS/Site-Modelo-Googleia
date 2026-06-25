import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LOGISTICS_HUBS } from '../data';
import { MapPin, Truck, ShieldCheck, Compass, ArrowRight } from 'lucide-react';
import L from 'leaflet';

export default function LogisticaMap() {
  const [selectedHub, setSelectedHub] = useState<string>("salvador");
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});

  const activeHub = LOGISTICS_HUBS.find(h => h.id === selectedHub) || LOGISTICS_HUBS[0];

  // Map coordinates matching real positions in Bahia Litoral Norte
  const coordsMap: { [key: string]: [number, number] } = {
    salvador: [-12.8953, -38.3294], // Lauro de Freitas HQ
    praia_forte: [-12.5760, -38.0051], // Praia do Forte (Tivoli & Iberostar)
    costa_sauipe: [-12.4419, -37.9405], // Costa do Sauípe
    imbassai: [-12.4842, -37.9554] // Imbassaí (Grand Palladium)
  };

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Initialize Leaflet Map focused on Litoral Norte
    const map = L.map(mapContainerRef.current, {
      center: [-12.6500, -38.1500],
      zoom: 9,
      zoomControl: true,
      attributionControl: false,
      scrollWheelZoom: false
    });

    // Dark Matter styled tiles matching the pitch-black SOMARTS brand identity
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap contributors, © CARTO'
    }).addTo(map);

    mapRef.current = map;

    // Custom colored pins matching the Somarts presentation rules
    const iconSomarts = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      iconSize: [28, 46],
      iconAnchor: [14, 46],
      popupAnchor: [1, -40],
      shadowSize: [41, 41]
    });

    const iconResort = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      iconSize: [24, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    // Add Markers to the map
    LOGISTICS_HUBS.forEach((hub) => {
      const coords = coordsMap[hub.id] || [-12.65, -38.15];
      const isSomarts = hub.id === 'salvador';

      const marker = L.marker(coords, {
        icon: isSomarts ? iconSomarts : iconResort
      })
      .addTo(map)
      .bindPopup(`
        <div style="color: #111; font-family: sans-serif; font-size: 13px; line-height: 1.4; padding: 2px;">
          <b style="color: #FF6B00; font-size: 14px; display: block; margin-bottom: 2px;">${hub.name}</b>
          <span style="font-weight: 500;">${isSomarts ? 'Sede Central & Laboratório' : hub.region}</span>
          <br><span style="font-size: 11px; color: #666; display: block; margin-top: 4px;">Distância da Base: ${hub.distanceFromSalvador}</span>
        </div>
      `);

      // Clicking marker changes active tab and syncs right panel
      marker.on('click', () => {
        setSelectedHub(hub.id);
      });

      markersRef.current[hub.id] = marker;
    });

    // Open Salvador pop-up by default
    setTimeout(() => {
      if (markersRef.current['salvador']) {
        markersRef.current['salvador'].openPopup();
      }
    }, 500);

    // Clean up
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      markersRef.current = {};
    };
  }, []);

  // When selectedHub state changes externally, fly to and highlight location on the map
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const targetCoords = coordsMap[selectedHub];
    if (targetCoords) {
      map.flyTo(targetCoords, 11, {
        duration: 1.2,
        easeLinearity: 0.25
      });

      const marker = markersRef.current[selectedHub];
      if (marker) {
        setTimeout(() => {
          marker.openPopup();
        }, 1200);
      }
    }
  }, [selectedHub]);

  return (
    <section id="logistica" className="py-24 bg-pitch-black text-white relative overflow-hidden border-t border-white/5">
      {/* Background radial lines and spots */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-light rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-accent uppercase bg-accent-light px-3 py-1 border border-accent-border">
            Logística Dominada
          </span>
          <h2 id="logistica-title" className="text-3xl md:text-5xl font-display font-bold tracking-tight mt-4 text-white">
            Salvador, Litoral Norte e os Principais Resorts da Bahia.
          </h2>
          <p className="text-gray-400 mt-4 text-base md:text-lg">
            Atendimento local imediato com logística cirúrgica e frota de caminhões própria. Eliminamos qualquer dor de cabeça alfandegária, fiscal ou de transporte rodoviário.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Panel: Real Leaflet Map */}
          <div className="lg:col-span-7 bg-zinc-950 border border-white/10 flex flex-col justify-between relative overflow-hidden min-h-[480px] md:min-h-[550px] rounded-2xl shadow-2xl">
            
            {/* Header info bar on top of the map */}
            <div className="p-4 bg-zinc-900/90 border-b border-white/10 flex items-center justify-between z-10">
              <div className="text-zinc-400 font-mono text-[9px] flex items-center gap-1.5 uppercase tracking-[0.2em]">
                <Compass className="w-3.5 h-3.5 animate-spin-slow text-accent" />
                <span>LOGÍSTICA BAHIA - ROTAS DO LITORAL NORTE</span>
              </div>
              <div className="flex items-center gap-1.5 text-[9px] font-mono text-zinc-500 uppercase">
                <span className="w-2 h-2 rounded-full bg-accent inline-block animate-pulse" /> Live Map
              </div>
            </div>

            {/* Map wrapper div where leaflet is injected */}
            <div className="flex-1 w-full relative z-0 min-h-[300px] bg-zinc-950">
              <div ref={mapContainerRef} className="absolute inset-0 w-full h-full" style={{ outline: 'none' }} />
            </div>

            {/* Selector Cards inside the map panel for easy binding */}
            <div className="p-3 bg-zinc-900 border-t border-white/10 z-10 flex flex-wrap gap-2 justify-center">
              {LOGISTICS_HUBS.map((hub) => (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub.id)}
                  className={`px-3 py-1.5 text-[10px] font-mono tracking-wider uppercase transition-all rounded duration-300 cursor-pointer ${
                    selectedHub === hub.id
                      ? 'bg-accent text-black font-bold shadow-lg shadow-accent/25 scale-105'
                      : 'bg-zinc-950/80 border border-white/5 text-zinc-400 hover:text-white hover:bg-zinc-800'
                  }`}
                >
                  {hub.name}
                </button>
              ))}
            </div>

            {/* Quick Map Legend */}
            <div className="p-3 bg-zinc-950/90 border-t border-white/10 z-10 flex justify-between items-center">
              <div className="flex gap-4 text-[9px] font-mono text-zinc-500 uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B00] inline-block" /> Sede Central (Orange)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2A82C9] inline-block" /> Resorts (Blue)
                </span>
              </div>
              <span className="text-[9px] font-mono text-accent/80 uppercase tracking-widest hidden sm:inline">
                Mapa Interativo
              </span>
            </div>
          </div>

          {/* Right Panel: Selected Hub Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-white/5 p-8 border border-white/10 h-full flex flex-col justify-between shadow-xl rounded-2xl">
              <div>
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest bg-accent-light border border-accent-border px-2 py-0.5">
                  {activeHub.region}
                </span>

                <h3 className="text-2xl md:text-3xl font-bold font-display text-zinc-100 mt-3 mb-1">
                  {activeHub.name}
                </h3>
                
                <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono mt-2 mb-6">
                  <Truck className="w-4 h-4 text-accent" />
                  <span>Distância da Base: {activeHub.distanceFromSalvador}</span>
                </div>

                <p className="text-gray-300 font-sans leading-relaxed text-sm md:text-base">
                  {activeHub.description}
                </p>

                {/* Sub cards for stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Experiência Real</span>
                    <span className="text-sm font-semibold text-zinc-200 mt-1 block">{activeHub.experience}</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Tempo de Despacho</span>
                    <span className="text-sm font-semibold text-zinc-200 mt-1 block">&lt; 120 minutos</span>
                  </div>
                </div>
              </div>

              {/* Action and bottom reassurance */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-start gap-2.5 text-xs text-gray-400 leading-relaxed">
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Nossa equipe domina as restrições logísticas de hotéis e resorts (horários de carga, gabaritos de portas e limites de decibéis).</span>
                </div>

                <a
                  href="#contato"
                  className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-200 hover:text-white font-semibold text-center text-xs tracking-wider uppercase inline-flex items-center justify-center gap-2 transition-all group rounded-xl"
                >
                  Consultar Viabilidade Logística
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
