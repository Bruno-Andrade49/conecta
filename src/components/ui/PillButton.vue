<script setup>
// Single pill-button primitive shared by every CTA on the page, so the
// shape system (full radius) and interaction states stay consistent
// everywhere instead of being redeclared per section.
const props = defineProps({
  href: { type: String, required: true },
  variant: { type: String, default: 'orange' }, // orange | ghost | dark | light
  external: { type: Boolean, default: false },
})

// Tailwind v4 utilities like `-translate-y-0.5` and `active:scale-[0.97]`
// set the individual CSS `translate`/`scale` properties, not the combined
// `transform` — a transition list that says literally "transform" never
// catches those, so the hover lift used to jump instead of easing in. This
// is the actual fix for the "teleporting" hover across every button.
const base =
  'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.8rem] font-black uppercase tracking-wide leading-none whitespace-nowrap transition-[translate,scale,background-color,color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-laranja-light focus-visible:outline-offset-4'

const variants = {
  // Orange is a constant brand surface in both themes, so its text is the
  // constant `ink` (dark) rather than the theme-flippable off-white — a
  // small contrast fix too: white text on this orange fails WCAG AA at
  // this size, dark text comfortably passes it.
  // Background stays constant on hover — darkening it drops the
  // dark-ink-on-orange contrast below AA — so the lift alone reads as
  // hover, keeping the shadow static (cheap, no box-shadow animation jank).
  orange:
    'bg-laranja text-ink hover:-translate-y-0.5 shadow-[0_8px_24px_-8px_rgba(224,86,27,0.55)]',
  light:
    'bg-paper text-ink hover:bg-white hover:-translate-y-0.5 shadow-[0_8px_24px_-10px_rgba(0,0,0,0.4)]',
  ghost:
    'text-off-white ring-1 ring-inset ring-hairline/35 hover:ring-hairline/70 hover:-translate-y-0.5',
  dark: 'bg-ink text-paper hover:opacity-90 hover:-translate-y-0.5',
}
</script>

<template>
  <a
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :class="[base, variants[props.variant]]"
  >
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </a>
</template>
