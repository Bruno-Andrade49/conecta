<script setup>
import { PhArrowRight } from '@phosphor-icons/vue'
import PillButton from '../ui/PillButton.vue'
import WhatsAppButton from '../ui/WhatsAppButton.vue'
import RevealBlock from '../ui/RevealBlock.vue'
import HeroTimeline from './HeroTimeline.vue'
</script>

<template>
  <section id="topo" class="relative overflow-hidden pt-24 pb-16 sm:pb-20">
    <!-- brand-orange ambient glow, fixed and non-interactive -->
    <div
      class="pointer-events-none absolute -right-40 -top-20 h-[36rem] w-[36rem] rounded-full opacity-40 blur-3xl"
      style="background: radial-gradient(circle, rgba(224, 86, 27, 0.35), transparent 70%)"
      aria-hidden="true"
    />

    <div class="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
      <div class="max-w-2xl">
        <RevealBlock as="h1" class="text-display-xl font-black uppercase text-off-white">
          Mais que produzir,<br />
          <span class="text-laranja">conectar.</span>
        </RevealBlock>

        <RevealBlock :delay="140">
          <p class="mt-6 max-w-[42ch] text-lead font-medium text-cinza-claro">
            Vídeo, design, fotografia e cobertura de eventos com propósito, aproximando marcas, pessoas e histórias desde 2020.
          </p>
        </RevealBlock>

        <RevealBlock :delay="260">
          <div class="mt-8 flex flex-wrap items-center gap-3.5">
            <PillButton href="#servicos" variant="orange">
              Ver projetos
              <template #icon-right><PhArrowRight :size="15" weight="bold" /></template>
            </PillButton>
            <WhatsAppButton variant="ghost" />
          </div>
        </RevealBlock>
      </div>

      <RevealBlock :delay="220" :distance="28" class="mt-12 sm:mt-16">
        <HeroTimeline />
      </RevealBlock>
    </div>
  </section>
</template>
