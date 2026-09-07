export const BRAND = {
  name: 'Conecta',
  fullName: 'Conecta Comunicação e Produtora',
  since: 2020,
  city: 'Cabaceiras',
  state: 'Paraíba',
  region: 'Cariri paraibano',
  nickname: 'Roliúde Nordestina',
}

export const CONTACT = {
  phones: [
    { display: '(83) 9 8901-4340', href: 'tel:+5583989014340' },
    { display: '(83) 9 8132-2998', href: 'tel:+5583981322998' },
  ],
  email: 'contatoconectastreaming@gmail.com',
  instagram: { handle: '@conectacom_', url: 'https://instagram.com/conectacom_' },
  whatsappNumber: '5583989014340',
}

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsappNumber}`

export function whatsappWithMessage(message) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
}

export const ROSTER = [
  'Festa do Bode Rei',
  'Expocouro',
  'Congo tá na Moda',
  'Expoagropeixe',
  'Exporuralqueimadas',
  'São João na Roliúde',
  'Cavalgada Rota do Couro',
  'Vaquejada',
  'Motocross',
]

export const WHAT_WE_DO = [
  {
    key: 'conexao',
    title: 'Conexão',
    description:
      'Na Conecta, acreditamos que um vídeo, um design ou uma fotografia vão muito além de visuais bonitos: precisam ter propósito, transmitir sentimentos e criar conexões.',
    items: ['Hino da Festa do Bode Rei 2026', 'Açude Epitácio Pessoa 2025', 'Festa do Bode Rei 2026'],
  },
  {
    key: 'video',
    title: 'Contando histórias',
    description:
      'Toda marca, evento ou pessoa tem algo para contar. Participamos do plano de mídia, escrevemos os roteiros e damos vida a eles com captação de imagem e áudio, montagem, sound design, color grading e motion design.',
    items: ['Expocouro 2025', 'Crocheteiras do Marinho', 'Expoagropeixe 2026'],
  },
  {
    key: 'brand',
    title: 'Dando vida às marcas',
    description:
      'Uma marca não é apenas um logo. É identidade, personalidade e uma forma de se comunicar com o mundo. Criamos conteúdos que ajudam marcas a encontrar sua voz.',
    items: ['Institucional Festa do Bode Rei 2026', 'Congo tá na Moda 2026', 'Cavalgada Rota do Couro 2025'],
  },
  {
    key: 'events',
    title: 'Registrando momentos',
    description:
      'Alguns momentos acontecem uma única vez. Cobrimos eventos em tempo real, com conteúdo dinâmico que aproxima o público e preserva o que não pode ser esquecido.',
    items: ['Motocross 2025', 'Festa do Bode Rei 2026', 'Congo tá na Moda 2026', 'Matrimônio (2024)'],
  },
]

export const COMMUNITIES = [
  { name: 'Festa do Bode Rei', posts: 354, followers: '40,6 mil', avatar: 'festa-do-bode-rei' },
  { name: 'Exporuralqueimadas', posts: 398, followers: '8.245', avatar: 'exporuralqueimadas' },
  { name: 'Expo Agropeixe', posts: 93, followers: '4.051', avatar: 'expo-agropeixe' },
  { name: 'Expocouro', posts: 116, followers: '6.745', avatar: 'expocouro' },
  { name: 'Festival Congo tá na Moda', posts: 110, followers: '3.505', avatar: 'congo-ta-na-moda' },
]

export const CASE_STUDY = {
  title: 'Central Informa Bode',
  client: 'Festa do Bode Rei 2026',
  paragraphs: [
    'No plano de mídia da Festa do Bode Rei 2026, o desafio era claro: falar com o público de forma mais assertiva, mostrando melhorias e respostas do evento em vídeos dinâmicos e bem-humorados.',
    'Transformamos o Informa Bode, um serviço que já existia no festival, em uma série digital com linguagem direta e bom humor, aproximando a marca dos seus seguidores.',
  ],
}
