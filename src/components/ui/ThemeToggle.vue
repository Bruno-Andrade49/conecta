<script setup>
// The theme switch, styled like the one control everyone who's opened an
// NLE recognises: a scrubber. The thumb is a little playhead that slides
// along a two-stop track (dark edit on the left, light edit on the right),
// and carries its own transport-control icon: play while dark ("the edit
// is running"), pause once light ("paused on a bright frame") — a second,
// smaller nod to video editing beyond the slide itself.
import { PhMoonStars, PhSun, PhPlay, PhPause } from '@phosphor-icons/vue'
import { useTheme } from '../../composables/useTheme'

const { theme, toggle } = useTheme()
</script>

<template>
  <button
    type="button"
    role="switch"
    :aria-checked="theme === 'light'"
    aria-label="Alternar entre modo escuro e modo claro"
    class="group relative inline-flex h-8 w-[3.25rem] flex-none items-center rounded-full bg-[#141414] ring-1 ring-white/15 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-laranja-light focus-visible:outline-offset-2"
    @click="toggle"
  >
    <span
      class="pointer-events-none absolute left-[7px] text-[#8e8a86] transition-opacity duration-300"
      :class="theme === 'light' ? 'opacity-30' : 'opacity-90'"
      aria-hidden="true"
    >
      <PhMoonStars :size="12" weight="fill" />
    </span>
    <span
      class="pointer-events-none absolute right-[7px] text-laranja-light transition-opacity duration-300"
      :class="theme === 'light' ? 'opacity-90' : 'opacity-30'"
      aria-hidden="true"
    >
      <PhSun :size="12" weight="fill" />
    </span>

    <!-- the "playhead": an orange marker sliding between the two stops,
         holding a play/pause glyph instead of a plain dot -->
    <span
      class="relative z-10 grid h-6 w-6 place-items-center rounded-full bg-laranja text-ink shadow-[0_2px_8px_rgba(0,0,0,0.45)] transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
      :class="theme === 'light' ? 'translate-x-[26px]' : 'translate-x-[3px]'"
      aria-hidden="true"
    >
      <PhPause v-if="theme === 'light'" :size="11" weight="fill" />
      <PhPlay v-else :size="11" weight="fill" class="ml-[1px]" />
    </span>
  </button>
</template>
