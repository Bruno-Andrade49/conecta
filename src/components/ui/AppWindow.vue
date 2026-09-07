<script setup>
/**
 * AppWindow — the "editing software" frame.
 *
 * A flattened, honest homage to the app-chrome mockups (Premiere, After
 * Effects, Photoshop title bars) from the studio's own brand material: a
 * fake title bar with an app badge, menu and filename, an optional tab
 * strip, and a body slot. Purely decorative chrome (menu items, filename,
 * traffic-light controls) is real content voiced by the brand, not
 * functional UI, so it's marked aria-hidden and thinned out on small
 * screens where there's no room for it.
 *
 * The title bar and tab strip stay a fixed dark tone in both site themes —
 * real editing software chrome (menus, tab bars) reads this way regardless
 * of whether the app's own canvas is in a dark or light workspace, so it
 * doubles as a small in-joke when the site's theme toggle is flipped. Only
 * the body/slot area (the "canvas") follows the site's light/dark theme.
 */
defineProps({
  app: { type: Object, required: true }, // { label, abbr, color }
  filename: { type: String, default: '' },
  menu: { type: Array, default: () => [] },
  tabs: { type: Array, default: () => [] }, // [{ label, active }]
})
</script>

<template>
  <div class="overflow-hidden rounded-window ring-1 ring-hairline/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
    <div class="flex items-center gap-5 overflow-hidden border-b border-hairline/10 bg-[#262626] px-3.5 py-2.5 text-[0.78rem] text-[#8e8a86]" aria-hidden="true">
      <span class="inline-flex flex-none items-center gap-2 font-bold text-[#f7f5f2]">
        <span
          class="grid h-5 w-5 flex-none place-items-center rounded text-[0.6rem] font-black text-white"
          :style="{ background: app.color }"
        >
          {{ app.abbr }}
        </span>
        {{ app.label }}
      </span>
      <span v-if="menu.length" class="hidden items-center gap-4 whitespace-nowrap md:flex">
        <span v-for="item in menu" :key="item">{{ item }}</span>
      </span>
      <span v-if="filename" class="ml-auto hidden truncate text-[#8e8a86]/70 sm:block">{{ filename }}</span>
      <span class="ml-3 hidden flex-none items-center gap-2.5 text-[#8e8a86]/50 sm:flex">
        <span>&#8212;</span><span>&#9633;</span><span>&#10005;</span>
      </span>
    </div>

    <div v-if="tabs.length" class="flex gap-5 overflow-x-auto border-b border-hairline/10 bg-[#232323] px-3.5 py-2 text-[0.76rem] text-[#8e8a86] no-scrollbar" aria-hidden="true">
      <span
        v-for="tab in tabs"
        :key="tab.label"
        class="flex-none whitespace-nowrap pb-1"
        :class="tab.active ? 'border-b-2 border-laranja text-[#f7f5f2]' : ''"
      >
        {{ tab.label }}
      </span>
    </div>

    <div class="relative bg-carvao">
      <slot />
    </div>
  </div>
</template>
