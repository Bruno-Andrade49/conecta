# Conecta Comunicação e Produtora - Landing Page

Landing page da Conecta, construída com **Vue 3 + Vite + Tailwind CSS v4**.
O visual central é a "moldura" de software de edição (barra de título estilo
Premiere/After Effects/Photoshop) que aparecia no material original da marca,
reconstruída como um componente reutilizável, com uma timeline animada no
herói e microinterações leves em CSS/IntersectionObserver entre as seções.

## Stack

- **Vue 3** (Composition API, `<script setup>`)
- **Vite** - bundler e servidor de desenvolvimento
- **Tailwind CSS v4** - estilos utilitários, tokens de marca definidos em `src/style.css`
- **Baloo 2** - a fonte do site inteiro, escolhida por ser a mesma família redonda usada no logotipo "Conecta"
- **Phosphor Icons** - todos os ícones da interface
- **VueUse** - utilitários (scroll, media query, click-outside)

Nenhum backend é necessário: é um site 100% estático depois do build.

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org) 18 ou mais recente.

```bash
npm install       # instala as dependências (só precisa rodar 1x, ou quando mudar algo no package.json)
npm run dev       # servidor de desenvolvimento, com recarregamento automático
npm run build     # gera a versão de produção na pasta dist/
npm run preview   # sobe um servidor local para testar a pasta dist/ gerada
```

O `npm run dev` abre em `http://localhost:5173`.

## Estrutura do projeto

```
src/
  data/content.js          # TODO fato real do site: telefones, e-mail, Instagram,
                            # lista de eventos cobertos, textos dos serviços, case, etc.
                            # Mude aqui primeiro sempre que um dado mudar.
  components/
    layout/                  # Navbar e Footer
    sections/                # Uma seção da página = um arquivo
    ui/AppWindow.vue         # a "moldura" de software de edição, reutilizada em
                              # 4 seções (Hero, Quem somos, Comunidades, Case)
    ui/PillButton.vue        # botão padrão usado em toda a página
    ui/RevealBlock.vue       # wrapper que anima a entrada de cada bloco
  style.css                 # tokens de marca (cores, tipografia fluida) e fontes
  App.vue                   # junta todas as seções na ordem em que aparecem
  assets/photos/            # fotos e artes reais da Conecta (ver abaixo)
public/
  favicon.svg                # ícone da aba do navegador
  og-cover.jpg                # imagem de capa ao compartilhar o link
_legacy/
  index-original.html        # a versão estática antiga, mantida só como referência
```

### Onde editar o quê

| Quero mudar... | Arquivo |
|---|---|
| Telefone, e-mail, Instagram, link do WhatsApp | `src/data/content.js` (`CONTACT`) |
| Lista de eventos/clientes do letreiro | `src/data/content.js` (`ROSTER`) |
| Textos de "O que fazemos" (4 categorias) | `src/data/content.js` (`WHAT_WE_DO`) |
| **Os links reais de cada vídeo/projeto** | `src/data/links.js` (`VIDEO_LINKS`, `OTHER_LINKS`) — ver abaixo |
| Números de seguidores das comunidades | `src/data/content.js` (`COMMUNITIES`) |
| Texto do case "Central Informa Bode" | `src/data/content.js` (`CASE_STUDY`) |
| Cores da marca | `src/style.css` (bloco `@theme`, variáveis `--color-*`) |
| Textos e imagens de uma seção específica | o arquivo correspondente em `src/components/sections/` |

### Colocando os links reais dos vídeos

Todo botão "clique e confira" (os links de "O que fazemos" e o botão "Ver a
série no Instagram" do Case) hoje abre o perfil geral do Instagram
(`@conectacom_`), porque nenhum link específico de vídeo estava disponível.

Para colocar o link real de cada um, abra `src/data/links.js`: é uma lista
com o nome de cada vídeo já comentado do lado, só falta colar a URL entre
aspas no lugar certo. Enquanto um item ficar vazio (`''`), ele continua
caindo no Instagram como alternativa, então nada quebra.

## Imagens usadas

Todas as fotos e artes vêm do material real da Conecta (extraídas do PDF de
portfólio e dos arquivos enviados), sem nenhuma foto de banco de imagens.
Ficam em `src/assets/photos/`:

| Arquivo | Onde aparece | Origem |
|---|---|---|
| `about-team-1.jpg`, `about-team-2.jpg` | Quem somos | fotos da equipe em cobertura de evento |
| `avatar-*.png` (5 arquivos) | Comunidades | logos dos perfis geridos pela Conecta |
| `case-poster.jpg` | Case | pôster oficial da série Central Informa Bode |
| `instagram-mockup.png` | Conexão | print de um post real do Instagram da Conecta |
| `logo-wordmark.png` | Navbar | logotipo oficial, só a palavra "Conecta" |
| `logo-full.png` | Rodapé | logotipo oficial completo (wordmark + tagline) |

"O que fazemos" não usa fotos: é uma lista dos vídeos e projetos reais
citados no portfólio, organizados por tema (Conexão, Contando histórias,
Dando vida às marcas, Registrando momentos).

Se a Conecta quiser trocar alguma dessas imagens no futuro, é só substituir o
arquivo em `src/assets/photos/` mantendo o mesmo nome, ou trocar o caminho no
`import` correspondente dentro do componente da seção.

Os únicos itens sem link real são os botões "Ver a série no Instagram" e
similares, que apontam para o perfil geral (`@conectacom_`) por não haver um
link direto de vídeo específico disponível.

## Modo claro / escuro

O botão ao lado de "Chamar no WhatsApp" (desktop) ou dentro do menu (mobile)
alterna o site inteiro entre os dois temas, com um visual de scrubber de
timeline no lugar do interruptor genérico. A escolha fica salva no
navegador de quem visita (`localStorage`), então volta a mesma na próxima
visita.

Barra de navegação, rodapé e a barra de título das janelas de software
(Premiere/After Effects/Photoshop) ficam sempre escuros nos dois temas -
é assim que um app de edição de verdade se comporta, e é onde vive a logo
branca. Só o "miolo" das seções (fundo da página, cards, textos) muda de
cor. Para ajustar as cores de cada tema, edite `src/style.css`: o bloco
`@theme` no topo define o tema escuro (padrão), e o bloco
`:root[data-theme="light"]` logo abaixo define o tema claro.

## Publicando (hospedagem)

O projeto gera um site estático (`npm run build` → pasta `dist/`), então
qualquer hospedagem de arquivos estáticos serve. As mais simples:

### Vercel ou Netlify (recomendado, grátis)
1. Suba este projeto para um repositório no GitHub.
2. Na Vercel/Netlify, importe o repositório.
3. Configuração de build: `npm run build`, pasta de saída: `dist`.
4. Pronto: cada novo `git push` na branch principal publica uma nova versão.

### Qualquer hospedagem de arquivos estáticos (cPanel, etc.)
1. Rode `npm run build` localmente.
2. Envie o conteúdo da pasta `dist/` (via FTP/painel) para a pasta pública do
   domínio (geralmente `public_html/`).

## SEO

O `index.html` já sai do build com a estrutura básica de SEO on-page:

- **Título e meta description** únicos, descrevendo o negócio.
- **`<link rel="canonical">`** e **`<meta name="robots" content="index, follow">`**.
- **Open Graph + Twitter Card** completos (título, descrição, imagem
  1200×630 com `alt`, `site_name`, `locale`), usando `public/og-cover.jpg`
  como imagem de compartilhamento.
- **Dados estruturados (JSON-LD, `schema.org/LocalBusiness`)**: nome,
  telefone, e-mail, endereço (Cabaceiras/PB), ano de fundação e Instagram —
  ajuda o Google a exibir a empresa de forma mais rica (inclusive no Google
  Meu Negócio/Maps).
- **`robots.txt`** liberando todo o site para indexação e apontando pro
  `sitemap.xml`.
- **`sitemap.xml`** com a página única do site (é uma landing page de uma
  página só; se no futuro surgirem mais páginas/rotas, adicione uma
  entrada `<url>` por página aqui).
- **Ícones completos**: favicon SVG (nítido em qualquer tela), PNGs de
  fallback (16/32px), `apple-touch-icon` (180px) e `site.webmanifest` com
  ícones 192/512px — cobre aba do navegador, atalho na tela inicial do
  iOS/Android e instalação como PWA básica.
- **Um único `<h1>` por página**, hierarquia de headings (`h1` → `h2` →
  `h3`) sem pular níveis, e `alt` descritivo em toda imagem de conteúdo
  (decorativas usam `alt=""`).

O que **não** está incluso (porque depende de decisão do negócio, não é
técnico): Google Search Console/Analytics, blog para SEO de conteúdo, e
backlinks. Nada disso é bloqueio para o lançamento.

## Segurança

Por ser um site 100% estático (sem backend, sem login, sem banco de
dados), a superfície de ataque é pequena, mas os seguintes cuidados foram
aplicados:

- **Content-Security-Policy (CSP) restritiva**: só permite scripts,
  estilos, fontes e imagens da própria origem (`'self'`), bloqueia
  `<object>`/plugins, proíbe o site de ser carregado dentro de um
  `<iframe>` de terceiros (`frame-ancestors 'none'`) e força HTTPS em
  todo recurso (`upgrade-insecure-requests`).
- **Outros headers de segurança**: `X-Content-Type-Options: nosniff`
  (impede o navegador de "adivinhar" tipo de arquivo), `X-Frame-Options:
  DENY` (reforça a proteção contra clickjacking), `Referrer-Policy:
  strict-origin-when-cross-origin` (não vaza a URL completa pra sites
  externos), `Permissions-Policy` (desliga câmera/microfone/geolocalização
  que o site nunca usa) e `Strict-Transport-Security` (HSTS, força HTTPS
  no navegador do visitante).
- Esses headers estão configurados em dois formatos, prontos para os
  destinos de hospedagem mais comuns — o build não sabe ainda em qual
  serviço vai parar:
  - `vercel.json` (Vercel)
  - `public/_headers` (Netlify — o Vite já copia esse arquivo pra dentro
    de `dist/` automaticamente)
  
  Se a hospedagem final for outra (cPanel, S3+CloudFront, etc.), copie os
  valores de header de um desses dois arquivos para a configuração do
  servidor/CDN usado.
- A CSP foi **testada de verdade** contra o build de produção (servidor
  local aplicando o header real + Chromium headless verificando o
  console): zero erros, zero violação de CSP, fonte e imagens carregam
  normalmente.
- **Sem `v-html`** em lugar nenhum do código (elimina o principal vetor de
  XSS em apps Vue).
- Todo link externo (`target="_blank"`) usa `rel="noopener noreferrer"`
  (evita que a aba aberta manipule a página de origem ou vaze o
  `referrer`).
- **`npm audit`**: 0 vulnerabilidades nas dependências no momento da
  última verificação. Rode `npm audit` de tempos em tempos, especialmente
  antes de publicar uma atualização.
- O formulário de contato é só front-end (não envia dados a lugar nenhum
  além do link do WhatsApp) — não há superfície de injeção de
  servidor/banco de dados a proteger.

## Acessibilidade e performance

- Contraste de texto testado nas combinações de cor usadas (WCAG AA).
- Toda animação respeita `prefers-reduced-motion` (o usuário que desativa
  animações no sistema operacional não vê nenhuma).
- Sem bibliotecas pesadas: o site inteiro (JS + CSS) fica em torno de 190KB
  comprimidos, sem contar as fontes.
