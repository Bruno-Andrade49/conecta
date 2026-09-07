<script setup>
import { computed } from 'vue'
import { PhInstagramLogo, PhWhatsappLogo, PhEnvelopeSimple } from '@phosphor-icons/vue'
import { BRAND, CONTACT, WHATSAPP_URL } from '../../data/content'
import { useTheme } from '../../composables/useTheme'
import logoFullLight from '../../assets/photos/logo-full.png'
import logoFullDark from '../../assets/photos/logo-full-dark.png'

const { theme } = useTheme()
const logoFull = computed(() => (theme.value === 'light' ? logoFullDark : logoFullLight))

const links = [
  { label: 'Quem somos', href: '#quem-somos' },
  { label: 'O que fazemos', href: '#servicos' },
  { label: 'Comunidades', href: '#comunidades' },
  { label: 'Case', href: '#case' },
  { label: 'Contato', href: '#contato' },
]
</script>

<template>
  <footer class="bg-carvao-deep pb-8 pt-14">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div class="flex flex-col gap-10 border-b border-hairline/10 pb-10 sm:flex-row sm:justify-between">
        <div>
          <a href="#topo" aria-label="Conecta - início">
            <img :src="logoFull" alt="Conecta Comunicação e Produtora" class="h-11 w-auto sm:h-12" width="1055" height="313" />
          </a>
          <p class="mt-3 max-w-64 text-sm text-cinza">
            {{ BRAND.city }}, {{ BRAND.state }} · {{ BRAND.nickname }}
          </p>
        </div>

        <nav class="grid grid-cols-2 gap-x-8 gap-y-2 text-sm font-semibold text-cinza-claro sm:flex sm:flex-col" aria-label="Navegação do rodapé">
          <a v-for="link in links" :key="link.href" :href="link.href" class="transition-colors hover:text-off-white">{{ link.label }}</a>
        </nav>

        <div class="flex gap-3">
          <a
            :href="WHATSAPP_URL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conecta no WhatsApp"
            class="grid h-11 w-11 place-items-center rounded-full bg-hairline/8 text-off-white transition-colors hover:bg-laranja"
          >
            <PhWhatsappLogo :size="19" weight="fill" />
          </a>
          <a
            :href="CONTACT.instagram.url"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conecta no Instagram"
            class="grid h-11 w-11 place-items-center rounded-full bg-hairline/8 text-off-white transition-colors hover:bg-laranja"
          >
            <PhInstagramLogo :size="19" weight="fill" />
          </a>
          <a
            :href="`mailto:${CONTACT.email}`"
            aria-label="E-mail da Conecta"
            class="grid h-11 w-11 place-items-center rounded-full bg-hairline/8 text-off-white transition-colors hover:bg-laranja"
          >
            <PhEnvelopeSimple :size="19" weight="bold" />
          </a>
        </div>
      </div>

      <p class="pt-6 text-xs text-cinza">{{ BRAND.fullName }} · desde {{ BRAND.since }}</p>
    </div>
  </footer>
</template>
