import { CONTACT } from './content'

export const VIDEO_LINKS = {
  // Categoria "Conexão"
  conexao: [
    'https://www.youtube.com/shorts/D8dPSUEzXkY', // Hino da Festa do Bode Rei 2026
    'https://www.youtube.com/shorts/hDpVix6VWd4', // Açude Epitácio Pessoa 2025
    'https://www.youtube.com/shorts/NNW0UXCRvyk', // Festa do Bode Rei 2026
  ],
  // Categoria "Contando histórias"
  video: [
    'https://youtu.be/9ebNVdqyRTM', // Expocouro 2025
    'https://youtu.be/y__thzCSkmg', // Crocheteiras do Marinho
    'https://youtube.com/shorts/LbfZNrTVTsk', // Expoagropeixe 2026
  ],
  // Categoria "Dando vida às marcas"
  brand: [
    'https://youtu.be/KN6PVpijN1A', // Institucional Festa do Bode Rei 2026
    'https://youtube.com/shorts/oWQz4NuGdkY', // Congo tá na Moda 2026
    'https://youtube.com/shorts/M4TXYfmMa0o', // Cavalgada Rota do Couro 2025
  ],
  // Categoria "Registrando momentos"
  events: [
    'https://www.youtube.com/shorts/zEntyci-OC8', // Motocross 2025
    'https://www.youtube.com/shorts/VC63utvhca0', // Festa do Bode Rei 2026
    'https://www.youtube.com/shorts/FYzqh3YKMtE', // Congo tá na Moda 2026
    'https://youtu.be/RLskSZR3hYE', // Matrimônio (2024)
  ],
}

export const OTHER_LINKS = {
  // Botão "Ver a série no Instagram" na seção Case (Central Informa Bode)
  caseStudy: 'https://youtu.be/jAtGirPz24A',
}

export function getVideoLink(categoryKey, index) {
  return VIDEO_LINKS[categoryKey]?.[index] || CONTACT.instagram.url
}

export function getOtherLink(key) {
  return OTHER_LINKS[key] || CONTACT.instagram.url
}
