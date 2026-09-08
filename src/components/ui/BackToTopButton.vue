<script setup>
// Floating "back to top" pill, shown only once the visitor is actually
// nearing the end of the page (not just scrolled a little), then takes
// them back to the hero on click. Styled like the rest of the button
// system (PillButton's orange variant, same lift/press motion).
import { computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { PhArrowUp } from '@phosphor-icons/vue'

const { y } = useWindowScroll()

const visible = computed(() => {
  if (typeof window === 'undefined') return false
  const viewport = window.innerHeight
  const fullHeight = document.documentElement.scrollHeight
  const scrolledPastHero = y.value > viewport * 0.6
  const nearingTheEnd = y.value + viewport >= fullHeight - viewport * 0.5
  return scrolledPastHero && nearingTheEnd
})

function scrollToTop() {
  // No explicit `behavior` here on purpose: the default ('auto') defers to
  // the page's own `scroll-behavior` CSS (smooth by default, forced back
  // to instant under prefers-reduced-motion in style.css), so this keeps
  // respecting that preference instead of overriding it.
  window.scrollTo({ top: 0 })
}
</script>

<template>
  <Transition
    enter-active-class="transition-[opacity,scale,translate] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
    enter-from-class="opacity-0 scale-75 translate-y-2"
    enter-to-class="opacity-100 scale-100 translate-y-0"
    leave-active-class="transition-[opacity,scale,translate] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]"
    leave-from-class="opacity-100 scale-100 translate-y-0"
    leave-to-class="opacity-0 scale-75 translate-y-2"
  >
    <button
      v-if="visible"
      type="button"
      class="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-laranja text-ink shadow-[0_10px_28px_-8px_rgba(224,86,27,0.55)] transition-[translate,scale] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-laranja-light focus-visible:outline-offset-4 sm:bottom-8 sm:right-8"
      aria-label="Voltar ao topo"
      @click="scrollToTop"
    >
      <PhArrowUp :size="20" weight="bold" />
    </button>
  </Transition>
</template>
