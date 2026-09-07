<script setup>
import { PhFilmSlate, PhPlay, PhPaintBrushBroad, PhBroadcast } from '@phosphor-icons/vue'
import RevealBlock from '../ui/RevealBlock.vue'
import { WHAT_WE_DO } from '../../data/content'
import { getVideoLink } from '../../data/links'

const icons = { conexao: PhFilmSlate, video: PhPlay, brand: PhPaintBrushBroad, events: PhBroadcast }
// alternates orange / dark for a checkerboard rhythm across the 4 cards
const onOrange = { conexao: true, video: false, brand: true, events: false }
</script>

<template>
  <section id="servicos" class="bg-carvao py-20 sm:py-28 lg:py-36">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <RevealBlock as="h2" class="max-w-md text-display-l font-black uppercase text-off-white">
        O que fazemos
      </RevealBlock>

      <div class="mt-10 grid grid-cols-1 gap-5 sm:mt-14 lg:grid-cols-2 lg:gap-6">
        <RevealBlock v-for="(group, i) in WHAT_WE_DO" :key="group.key" :delay="i * 80" class="group relative">
          <!-- glow sits behind the card and only fades in on hover (opacity,
               not box-shadow, so the transition stays cheap/smooth — see
               Ajuste 1) -->
          <div
            class="pointer-events-none absolute -inset-2 rounded-clip bg-laranja opacity-0 blur-2xl transition-opacity duration-500 ease-out group-hover:opacity-35"
            aria-hidden="true"
          />
          <article
            class="relative h-full overflow-hidden rounded-clip p-7 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 sm:p-8"
            :class="onOrange[group.key] ? 'text-ink' : 'bg-carvao-soft text-off-white ring-1 ring-hairline/10'"
            :style="onOrange[group.key] ? 'background: linear-gradient(155deg, #f5b041, #e0561b 55%, #b3441a)' : ''"
          >
            <div
              v-if="onOrange[group.key]"
              class="absolute inset-0 opacity-60"
              style="background-image: repeating-linear-gradient(45deg, rgba(0,0,0,0.07) 0 6px, transparent 6px 14px)"
              aria-hidden="true"
            />
            <div class="relative">
              <span
                class="grid h-11 w-11 place-items-center rounded-full transition-transform duration-300 group-hover:scale-110"
                :class="onOrange[group.key] ? 'bg-ink text-laranja' : 'bg-laranja text-off-white'"
              >
                <component :is="icons[group.key]" :size="20" weight="fill" />
              </span>
              <h3 class="mt-5 text-2xl font-black uppercase">{{ group.title }}</h3>
              <p class="mt-3 max-w-md text-[0.95rem] leading-relaxed" :class="onOrange[group.key] ? 'text-ink/80' : 'text-cinza-claro'">
                {{ group.description }}
              </p>
              <ul class="mt-5 flex flex-wrap gap-2">
                <li v-for="(item, itemIndex) in group.items" :key="item">
                  <a
                    :href="getVideoLink(group.key, itemIndex)"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-block rounded-full px-3.5 py-1.5 text-xs font-bold transition-colors"
                    :class="onOrange[group.key]
                      ? 'bg-ink/12 text-ink hover:bg-ink/22'
                      : 'bg-hairline/10 text-off-white/85 hover:bg-hairline/16'"
                  >
                    {{ item }}
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </RevealBlock>
      </div>
    </div>
  </section>
</template>
