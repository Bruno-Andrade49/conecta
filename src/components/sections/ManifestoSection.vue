<script setup>
import RevealBlock from '../ui/RevealBlock.vue'
import instagramMockup from '../../assets/photos/instagram-mockup.png'
</script>

<template>
  <section class="on-orange relative overflow-hidden bg-laranja py-20 sm:py-28">
    <div
      class="absolute inset-0 opacity-90"
      style="background-image: repeating-radial-gradient(ellipse 140% 60% at 50% 130%, transparent 0 11px, rgba(0,0,0,0.09) 11px 13px)"
      aria-hidden="true"
    />
    <div class="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
      <div class="text-center lg:text-left">
        <RevealBlock as="h2" class="text-display-l font-black uppercase text-ink">
          Um vídeo vai muito além de visuais bonitos.
        </RevealBlock>
        <RevealBlock :delay="140">
          <p class="mx-auto mt-6 max-w-[52ch] text-[1.05rem] font-semibold leading-relaxed text-ink/85 lg:mx-0">
            Acreditamos que um vídeo, um design ou uma fotografia <mark>precisam ter propósito e criar conexão.</mark>
            Por isso, valorizamos o diálogo com nossos clientes durante todo o processo criativo, para entender a
            essência de cada marca e potencializar sua capacidade de se conectar com o público.
          </p>
        </RevealBlock>
      </div>

      <RevealBlock :delay="200" class="mx-auto w-full max-w-64 lg:max-w-none">
        <img
          :src="instagramMockup"
          alt="Print de um post da Conecta no Instagram, com fotos reais de coberturas de eventos"
          class="w-full"
          loading="lazy"
          width="680"
          height="1238"
        />
      </RevealBlock>
    </div>
  </section>
</template>
