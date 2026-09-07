<script setup>
import { PhInstagramLogo, PhUsersThree } from '@phosphor-icons/vue'
import RevealBlock from '../ui/RevealBlock.vue'
import PillButton from '../ui/PillButton.vue'
import AppWindow from '../ui/AppWindow.vue'
import { COMMUNITIES, CONTACT } from '../../data/content'

import avatarFestaDoBodeRei from '../../assets/photos/avatar-festa-do-bode-rei.png'
import avatarExporuralqueimadas from '../../assets/photos/avatar-exporuralqueimadas.png'
import avatarExpoAgropeixe from '../../assets/photos/avatar-expo-agropeixe.png'
import avatarExpocouro from '../../assets/photos/avatar-expocouro.png'
import avatarCongoTaNaModa from '../../assets/photos/avatar-congo-ta-na-moda.png'

const AVATARS = {
  'festa-do-bode-rei': avatarFestaDoBodeRei,
  'exporuralqueimadas': avatarExporuralqueimadas,
  'expo-agropeixe': avatarExpoAgropeixe,
  'expocouro': avatarExpocouro,
  'congo-ta-na-moda': avatarCongoTaNaModa,
}
</script>

<template>
  <section id="comunidades" class="bg-carvao-deep py-20 sm:py-28 lg:py-36">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <AppWindow
        :app="{ label: 'Adobe Premiere', abbr: 'Pr', color: '#8f2b78' }"
        filename="comunidades.prproj"
        :menu="['Arquivo', 'Editar', 'Clipe', 'Sequência', 'Gráficos e títulos']"
      >
        <div class="grid grid-cols-1 gap-12 p-6 sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:p-14">
          <RevealBlock as="div" class="max-w-lg">
            <h2 class="text-display-l font-black uppercase text-off-white">Construindo comunidades</h2>
            <p class="mt-6 text-[0.98rem] leading-relaxed text-cinza-claro">
              Mais do que alcançar pessoas, queremos que elas se sintam parte. Criamos projetos leves, autênticos e
              bem-humorados que aproximam marcas de seus públicos até virarem comunidade, não só audiência.
            </p>
            <PillButton :href="CONTACT.instagram.url" external variant="ghost" class="mt-7">
              <template #icon-left><PhInstagramLogo :size="16" weight="bold" /></template>
              Seguir no Instagram
            </PillButton>
          </RevealBlock>

          <RevealBlock :delay="140" class="rounded-clip bg-carvao p-2 ring-1 ring-hairline/10 sm:p-3">
            <ul class="divide-y divide-hairline/8">
              <li v-for="community in COMMUNITIES" :key="community.name" class="flex items-center gap-4 px-3 py-4 sm:px-4">
                <span class="h-12 w-12 flex-none overflow-hidden rounded-full ring-2 ring-hairline/10">
                  <img
                    :src="AVATARS[community.avatar]"
                    :alt="`Logo do perfil ${community.name}`"
                    class="h-full w-full object-cover"
                    loading="lazy"
                    width="156"
                    height="156"
                  />
                </span>
                <span class="min-w-0 flex-1">
                  <span class="block truncate font-bold text-off-white">{{ community.name }}</span>
                  <span class="mt-0.5 flex items-center gap-1.5 text-xs text-cinza">
                    <PhUsersThree :size="13" />
                    gerido pela Conecta
                  </span>
                </span>
                <span class="flex-none text-right">
                  <span class="block font-mono text-lg font-bold text-off-white sm:text-xl">{{ community.followers }}</span>
                  <span class="block text-[0.68rem] uppercase tracking-wide text-cinza">seguidores</span>
                </span>
              </li>
            </ul>
          </RevealBlock>
        </div>
      </AppWindow>
    </div>
  </section>
</template>
