<script setup>
// The hero's signature visual: a Premiere-style sequence timeline standing
// in for a portfolio summary. Each track is one line of the studio's work
// (video, motion, design, live coverage); the clip's position/width along
// the 2020-2026 ruler is a rough, honest read of when that work picked up,
// not a real edit decision list.
import AppWindow from '../ui/AppWindow.vue'

const YEARS = [2020, 2021, 2022, 2023, 2024, 2025, 2026]

const TRACKS = [
  { name: 'Vídeo', color: '#e0561b', clip: 'Produção audiovisual: roteiro, captação, montagem, color', left: '1%', width: '97%' },
  { name: 'Motion', color: '#f27a3d', clip: 'Motion design e identidade em movimento', left: '26%', width: '72%' },
  { name: 'Design', color: '#b3441a', clip: 'Design e comunicação de marcas', left: '13%', width: '85%' },
  { name: 'Eventos', color: '#8e8a86', clip: 'Cobertura em tempo real de grandes eventos', left: '39%', width: '59%' },
]
</script>

<template>
  <AppWindow
    :app="{ label: 'Adobe Premiere', abbr: 'Pr', color: '#8f2b78' }"
    filename="conecta_2026.prproj"
    :menu="['Arquivo', 'Editar', 'Clipe', 'Sequência', 'Marcadores']"
    :tabs="[{ label: 'Importar' }, { label: 'Editar', active: true }, { label: 'Exportar' }]"
  >
    <div class="overflow-x-auto">
      <div class="grid grid-cols-[92px_minmax(560px,1fr)] text-[0.72rem] sm:grid-cols-[140px_minmax(560px,1fr)] sm:text-[0.8rem]">
        <div class="sticky left-0 z-10 border-b border-hairline/10 bg-carvao-soft px-3 py-2 text-cinza">Sequência</div>
        <div class="flex items-end border-b border-hairline/10 bg-carvao-soft" aria-hidden="true">
          <span v-for="year in YEARS" :key="year" class="flex-1 border-l border-hairline/30 pb-1 pl-1.5 text-[0.62rem] text-cinza/70">
            {{ year }}
          </span>
        </div>

        <template v-for="track in TRACKS" :key="track.name">
          <div class="sticky left-0 z-10 flex items-center gap-2 border-b border-hairline/10 bg-carvao-soft px-3 py-3 font-semibold text-cinza-claro">
            <span class="h-2 w-2 flex-none rounded-[2px]" :style="{ background: track.color }" aria-hidden="true" />
            {{ track.name }}
          </div>
          <div
            class="relative border-b border-hairline/10 px-1.5 py-2"
            style="background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px); background-size: 12.5% 100%"
          >
            <div
              class="absolute inset-y-1.5 flex items-center overflow-hidden whitespace-nowrap rounded-md px-2.5 text-[0.68rem] font-bold text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]"
              :style="{ left: track.left, width: track.width, background: track.color }"
            >
              {{ track.clip }}
            </div>
          </div>
        </template>

        <div
          class="pointer-events-none absolute inset-y-0 w-px bg-laranja-light [animation:scrub_16s_linear_infinite]"
          :style="{ gridColumn: '2', gridRow: `2 / span ${TRACKS.length}` }"
          aria-hidden="true"
        >
          <span class="absolute -left-[7px] -top-px h-0 w-0 border-x-[7px] border-t-[9px] border-x-transparent border-t-laranja-light" />
        </div>
      </div>
    </div>
  </AppWindow>
</template>

<style>
/* Unscoped on purpose: this keyframe is referenced by a Tailwind
   arbitrary-value utility class in the template ([animation:scrub_...]),
   which is generated in the global stylesheet. A `scoped` block here would
   get its @keyframes name silently rewritten (e.g. scrub-05ec806a),
   breaking the match against that global utility. */
@keyframes scrub {
  from {
    left: 0;
  }
  to {
    left: 100%;
  }
}
</style>
