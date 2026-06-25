import { Equipment, Testimonial, Hotspot, LogisticsHub } from './types';

export const HERO_DATA = {
  title: "O padrão ouro em infraestrutura audiovisual para grandes eventos na Bahia.",
  subtitle: "SOMARTS | Engenharia Audiovisual Full Service",
  description: "Mais que locação de equipamentos, entregamos tranquilidade. O seu evento corporativo não tem margem para o erro. Tenha o padrão técnico de São Paulo executado com maestria no Nordeste.",
  image: "/src/assets/images/hero_stage_av_1782392496398.jpg"
};

export const RISK_SOLUTION_DATA = {
  title: "O Seu Evento Não Tem Margem Para Erro.",
  description: "Entenda por que grandes agências nacionais não arriscam e escolhem a Somarts para blindar suas produções na Bahia.",
  risks: [
    {
      id: "anxiety",
      title: "Ansiedade Logística",
      description: "Trazer um megaevento do Sudeste para a Bahia exige o dobro de controle, coordenação e pontualidade."
    },
    {
      id: "adaptation",
      title: "Risco das Adaptações",
      description: "Fornecedores amadores que alteram o rider técnico de última hora por falta de maquinário de reposição ou negligência."
    },
    {
      id: "execution",
      title: "Execução Falha",
      description: "Equipamentos obsoletos, atrasos no processamento (color banding) e equipes locais desalinhadas com os padrões das agências."
    }
  ],
  solution: {
    title: "A Nossa Promessa: Risco Zero",
    description: "Da leitura minuciosa da planta baixa ao 'play' final na House Mix, eliminamos toda a imprevisibilidade técnica e logística. O padrão técnico da capital paulista operando no seu resort baiano, com tranquilidade absoluta e nenhuma dor de cabeça.",
    bullets: [
      "Engenharia audiovisual dedicada ao projeto",
      "Rider técnico cumprido à risca, sem substituições baratas",
      "Backup 100% redundante de sinal e energia (Hot Standby)",
      "Equipe bilíngue uniformizada e altamente qualificada"
    ]
  }
};

export const EQUIPMENTS_DATA: Equipment[] = [
  {
    id: "yamaha-rivage",
    category: "audio",
    brand: "Yamaha / Shure",
    name: "Consoles Yamaha RIVAGE & DM7",
    description: "Sistemas de mixagem digital premium de última geração integrados via protocolo Dante redundante.",
    specs: [
      "Processamento de áudio a 96kHz com emulações Rupert Neve",
      "Redundância total de rede Dante e fontes de alimentação",
      "Sistemas de microfonação digital Shure Axient Digital com blindagem de RF",
      "Monitoramento ativo de espectro de frequência"
    ]
  },
  {
    id: "absen-led",
    category: "video",
    brand: "Absen / NovaStar",
    name: "Painéis de LED Absen & Processamento H9",
    description: "Telas de altíssima definição (P2.9 e P3.91) com processamento de imagem ultra-estável sem cintilação.",
    specs: [
      "Zero 'color banding' e calibração pixel a pixel perfeita",
      "Processadores modulares NovaStar H9 para transições limpas",
      "Switchers de corte profissional e distribuidores de fibra óptica",
      "Adequado para transmissão ao vivo e filmagem de alta taxa de quadros"
    ]
  },
  {
    id: "grandma3",
    category: "lighting",
    brand: "MA Lighting",
    name: "Consoles grandMA3 & Moving Heads Robe",
    description: "Controle cênico absoluto utilizando a mesa de luz que é padrão mundial da indústria de entretenimento.",
    specs: [
      "Consoles grandMA3 Light e Compact XT originais",
      "Projetos luminotécnicos em WYSIWYG antes do evento",
      "Moving Heads profissionais Robe e Claypaky",
      "Sincronização de timecode para aberturas cronometradas"
    ]
  },
  {
    id: "resolume",
    category: "video",
    brand: "Resolume",
    name: "Video Mapping & Resolume Arena",
    description: "Servidores de mídia de alta performance para mapeamento 3D de cenografias e projeções monumentais.",
    specs: [
      "Servidores de mídia de alta capacidade em rack antichoque",
      "Reprodução síncrona em múltiplos projetores a laser",
      "Operação com latência imperceptível e backup quente",
      "Flexibilidade total para diretores visuais e VJs"
    ]
  },
  {
    id: "generators",
    category: "power",
    brand: "Caterpillar / Cummins",
    name: "Energia Segura & Geradores Silenciados",
    description: "Redundância energética total para que oscilações da rede local não afetem um único pixel ou decibel do seu show.",
    specs: [
      "Geradores cabinados de alta capacidade com isolamento acústico",
      "Quadros de transferência automática (ATS) sem interrupção de sinal",
      "Sistemas UPS de dupla conversão online",
      "Engenheiros de eletricidade de plantão durante todo o cronograma"
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "pedro",
    quote: "A melhor empresa de eventos do Nordeste com certeza. Nada a desejar comparada com empresas de SP. Equipamentos modernos e confiáveis. Gestão impecável de ponta a ponta.",
    author: "Pedro Luis",
    role: "Diretor Técnico de Produção",
    company: "Agência Live SP",
    rating: 5
  },
  {
    id: "rafael",
    quote: "Quando estou com evento corporativo ou convenção na Bahia, não penso duas vezes em contratar a Somarts. Fica a minha sincera recomendação para quem não quer passar apuros logísticos ou técnicos.",
    author: "Rafael Segovia",
    role: "Produtor Executivo Sênior",
    company: "Mega Brand Experience",
    rating: 5
  },
  {
    id: "mauricio",
    quote: "Equipamentos de altíssima qualidade, equipe técnica extremamente profissional com atendimento e refino impecáveis nas house mixes.",
    author: "Mauricio Calixto",
    role: "Diretor de Eventos Corporativos",
    company: "Calixto Eventos Corporativos",
    rating: 5
  },
  {
    id: "isis",
    quote: "Fez toda a diferença no nosso evento no Tivoli Praia do Forte. Estética de backstage impecável, cabos invisíveis e pontualidade britânica no cronograma de ensaios.",
    author: "Isis Petronella",
    role: "Gerente Geral de Eventos",
    company: "Tivoli Resort",
    rating: 5
  }
];

export const HOTSPOTS_DATA: Hotspot[] = [
  {
    id: "bastidores",
    title: "Estética do Bastidor",
    description: "Entendemos que a infraestrutura faz parte da beleza do seu evento. Flight cases limpos, organizados e dispostos de forma inteligente no backstage.",
    x: 20,
    y: 25
  },
  {
    id: "organizacao",
    title: "Organização Maníaca de Cabos",
    description: "House Mixes meticulosamente cabeadas e palcos com fiação invisível (taped down com fitas premium que não marcam o carpete). Zero riscos de tropeço.",
    x: 45,
    y: 75
  },
  {
    id: "logistica",
    title: "Padrão Logístico e Proteção",
    description: "Todos os equipamentos viajam em flight cases profissionais individuais com espuma de alta densidade, garantindo calibração perfeita na entrega.",
    x: 75,
    y: 35
  },
  {
    id: "equipe",
    title: "Equipe Premium Uniformizada",
    description: "Técnicos uniformizados, discretos e operando sob rigorosos protocolos de EPI. Comunicação via rádio Clear-Com silenciosa e profissional.",
    x: 55,
    y: 18
  }
];

export const LOGISTICS_HUBS: LogisticsHub[] = [
  {
    id: "salvador",
    name: "Salvador (Sede)",
    region: "Capital da Bahia",
    distanceFromSalvador: "0 km",
    experience: "+250 grandes congressos",
    description: "Headquarters com laboratório técnico próprio, estoque principal de reposição instantânea e central de engenharia.",
    coordinates: { x: 30, y: 80 }
  },
  {
    id: "praia_forte",
    name: "Praia do Forte",
    region: "Litoral Norte / Linha Verde",
    distanceFromSalvador: "80 km",
    experience: "+120 convenções em resorts",
    description: "Atuação constante nos principais resorts de luxo da Linha Verde (Tivoli Ecoresort). Logística dominada com frota própria e equipes habituadas às regras de condomínios.",
    coordinates: { x: 55, y: 65 }
  },
  {
    id: "costa_sauipe",
    name: "Costa do Sauípe",
    region: "Litoral Norte / Linha Verde",
    distanceFromSalvador: "110 km",
    experience: "+95 megaeventos integrados",
    description: "Parceiro estratégico para grandes plenárias corporativas. Montagens robustas de som, luz e LED em pavilhões e arenas de convenções.",
    coordinates: { x: 70, y: 50 }
  },
  {
    id: "imbassai",
    name: "Imbassaí",
    region: "Litoral Norte / Linha Verde",
    distanceFromSalvador: "90 km",
    experience: "+60 eventos de destino",
    description: "Equipes homologadas operando em hotéis de bandeira internacional (Grand Palladium). Agilidade extrema na montagem e desmontagem sem interrupções acústicas.",
    coordinates: { x: 62, y: 58 }
  }
];
