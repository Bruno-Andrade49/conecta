<script setup>
import { PhPlay } from '@phosphor-icons/vue'
import RevealBlock from '../ui/RevealBlock.vue'
import PillButton from '../ui/PillButton.vue'
import AppWindow from '../ui/AppWindow.vue'
import { CASE_STUDY } from '../../data/content'
import { getOtherLink } from '../../data/links'
import casePoster from '../../assets/photos/case-poster.jpg'
</script>

<template>
  <section id="case" class="bg-carvao py-20 sm:py-28 lg:py-36">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <AppWindow
        :app="{ label: 'Adobe Photoshop', abbr: 'Ps', color: '#0f4ea3' }"
        filename="central_informa_bode.psd"
        :menu="['Arquivo', 'Editar', 'Imagem', 'Camada', 'Texto', 'Filtro']"
      >
        <div class="grid grid-cols-1 gap-10 p-6 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:p-14">
          <RevealBlock as="div">
            <h2 class="max-w-md text-display-l font-black uppercase text-off-white">{{ CASE_STUDY.title }}</h2>
            <div class="mt-6 space-y-4 text-[0.98rem] leading-relaxed text-cinza-claro">
              <p>{{ CASE_STUDY.paragraphs[0] }}</p>
              <p>
                Transformamos o Informa Bode, um serviço que já existia no festival, em
                <mark>uma série digital com linguagem direta e bom humor</mark>, aproximando a marca dos seus
                seguidores.
              </p>
            </div>
            <PillButton :href="getOtherLink('caseStudy')" external variant="orange" class="mt-7">
              <template #icon-left><PhPlay :size="14" weight="fill" /></template>
              Ver a série
            </PillButton>
          </RevealBlock>

          <RevealBlock :delay="160" class="mx-auto aspect-[4/7] w-full max-w-72 overflow-hidden rounded-clip border-2 border-hairline/10">
            <img
              :src="casePoster"
              alt="Pôster da série Central Informa Bode, com as apresentadoras ao telefone"
              class="h-full w-full object-cover"
              loading="lazy"
              width="542"
              height="949"
            />
          </RevealBlock>
        </div>
      </AppWindow>
    </div>
  </section>
</template>
