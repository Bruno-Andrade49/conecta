<script setup>
// Generic scroll-reveal wrapper: fades + lifts content once it enters the
// viewport. One-shot (never re-hides), GPU-cheap (transform + opacity only),
// and collapses to an instant static render under prefers-reduced-motion
// via useReveal().
import { useReveal } from '../../composables/useReveal'

const props = defineProps({
  as: { type: String, default: 'div' },
  delay: { type: Number, default: 0 },
  distance: { type: Number, default: 22 },
})

const { target, visible } = useReveal()
</script>

<template>
  <component
    :is="as"
    ref="target"
    class="transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform]"
    :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0'"
    :style="{
      transitionDelay: `${props.delay}ms`,
      transform: visible ? undefined : `translateY(${props.distance}px)`,
    }"
  >
    <slot />
  </component>
</template>
