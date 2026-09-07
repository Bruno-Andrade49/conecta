<script setup>
import RevealBlock from '../ui/RevealBlock.vue'
import AppWindow from '../ui/AppWindow.vue'
import teamPhoto1 from '../../assets/photos/about-team-1.jpg'
import teamPhoto2 from '../../assets/photos/about-team-2.jpg'
</script>

<template>
  <section id="quem-somos" class="relative overflow-hidden bg-carvao py-20 sm:py-28 lg:py-36">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <AppWindow
        :app="{ label: 'Adobe After Effects', abbr: 'Ae', color: '#4a2f87' }"
        filename="quem_somos.aep"
        :menu="['Arquivo', 'Editar', 'Composição', 'Camada', 'Efeito', 'Animação']"
        :tabs="[{ label: 'Padrão', active: true }, { label: 'Revisão' }, { label: 'Aprendizado' }]"
      >
        <div class="grid grid-cols-1 gap-12 p-6 sm:p-10 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:gap-10 lg:p-14">
          <RevealBlock as="div" class="max-w-xl">
            <h2 class="text-display-l font-black uppercase text-off-white">
              Quem<br /><span class="text-laranja">somos?</span>
            </h2>
            <div class="mt-7 space-y-4 text-[0.98rem] leading-relaxed text-cinza-claro">
              <p>
                A <strong class="text-off-white">Conecta Comunicação e Produtora</strong> nasceu em 2020, num momento
                em que o mundo precisou encontrar novas formas de se comunicar.
              </p>
              <p>
                Em meio aos desafios da pandemia, começamos com uma ideia simples:
                <mark>usar a comunicação e o audiovisual para aproximar pessoas, marcas e histórias.</mark> Mergulhamos
                na produção de vídeo, na criação de conteúdo, na comunicação de marcas e na cobertura de grandes
                eventos.
              </p>
              <p>
                A cada projeto, entendemos melhor o que nos move.
                <mark>Não se trata apenas de produzir vídeos. Trata-se de encontrar histórias, dar significado a elas
                e fazer com que cheguem a quem precisa vê-las.</mark>
              </p>
            </div>
          </RevealBlock>

          <div class="grid gap-4">
            <RevealBlock :delay="160" class="aspect-[27/14] w-full overflow-hidden rounded-clip border-2 border-white/10">
              <img
                :src="teamPhoto1"
                alt="Equipe da Conecta em cobertura de evento no Cariri paraibano"
                class="h-full w-full object-cover"
                loading="lazy"
                width="1349"
                height="700"
              />
            </RevealBlock>
            <RevealBlock :delay="240" class="aspect-[27/14] w-full overflow-hidden rounded-clip border-2 border-white/10">
              <img
                :src="teamPhoto2"
                alt="Equipe da Conecta durante gravação no Açude Epitácio Pessoa"
                class="h-full w-full object-cover"
                loading="lazy"
                width="1351"
                height="700"
              />
            </RevealBlock>
          </div>
        </div>
      </AppWindow>
    </div>
  </section>
</template>
