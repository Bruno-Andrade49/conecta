<script setup>
// The page's one and only marquee: a running strip of real events and
// productions the studio has covered. Sits directly under the hero, in
// the spot a logo wall would normally take — reframed as a roster since
// there are no vector client logos for these local festivals.
import { ROSTER } from '../../data/content'
</script>

<template>
  <p class="sr-only">Eventos e marcas já cobertos pela Conecta: {{ ROSTER.join(', ') }}.</p>
  <div class="overflow-hidden border-y border-hairline/10 bg-carvao-deep py-4" aria-hidden="true">
    <div class="flex w-max animate-[marquee_38s_linear_infinite] gap-10 whitespace-nowrap">
      <span v-for="pass in 2" :key="pass" class="flex gap-10 pr-10 text-lg font-black uppercase tracking-tight text-cinza-claro/70 sm:text-xl">
        <template v-for="(item, i) in ROSTER" :key="item">
          {{ item }}
          <span v-if="i < ROSTER.length - 1" class="text-laranja">/</span>
        </template>
      </span>
    </div>
  </div>
</template>

<style>
/* Unscoped on purpose: referenced by a Tailwind arbitrary-value utility
   class in the template. See HeroTimeline.vue for why `scoped` breaks
   keyframe name matching here. */
@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}
</style>
