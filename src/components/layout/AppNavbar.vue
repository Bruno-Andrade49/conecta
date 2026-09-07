<script setup>
import { ref, computed } from 'vue'
import { useWindowScroll, onClickOutside } from '@vueuse/core'
import { PhList, PhX } from '@phosphor-icons/vue'
import WhatsAppButton from '../ui/WhatsAppButton.vue'
import ThemeToggle from '../ui/ThemeToggle.vue'
import { useTheme } from '../../composables/useTheme'
import logoWordmarkLight from '../../assets/photos/logo-wordmark.png'
import logoWordmarkDark from '../../assets/photos/logo-wordmark-dark.png'

const { theme } = useTheme()
const logoWordmark = computed(() => (theme.value === 'light' ? logoWordmarkDark : logoWordmarkLight))

const links = [
  { label: 'Quem somos', href: '#quem-somos' },
  { label: 'O que fazemos', href: '#servicos' },
  { label: 'Comunidades', href: '#comunidades' },
  { label: 'Case', href: '#case' },
  { label: 'Contato', href: '#contato' },
]

const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 8)

const open = ref(false)
const menuRef = ref(null)
const toggleRef = ref(null)
onClickOutside(menuRef, () => (open.value = false), { ignore: [toggleRef] })

function closeMenu() {
  open.value = false
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
    :class="scrolled || open ? 'bg-carvao/85 backdrop-blur-md border-b border-hairline/10' : 'bg-transparent border-b border-transparent'"
  >
    <div class="mx-auto flex h-16 max-w-7xl items-center gap-6 px-5 sm:h-[4.5rem] sm:px-8">
      <a href="#topo" class="flex flex-shrink-0 items-center" aria-label="Conecta - início">
        <img :src="logoWordmark" alt="Conecta" class="h-7 w-auto sm:h-8" width="1052" height="230" />
      </a>

      <nav class="ml-auto hidden items-center gap-7 text-sm font-semibold lg:flex" aria-label="Navegação principal">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-off-white/75 transition-colors hover:text-off-white"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="ml-auto hidden items-center gap-3 lg:flex">
        <ThemeToggle />
        <WhatsAppButton />
      </div>

      <button
        ref="toggleRef"
        type="button"
        class="relative ml-auto grid h-10 w-10 place-items-center rounded-full text-off-white lg:hidden"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        aria-label="Abrir menu"
        @click="open = !open"
      >
        <PhList
          :size="24"
          class="col-start-1 row-start-1 transition-[opacity,rotate,scale] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          :class="open ? 'scale-75 rotate-45 opacity-0' : 'scale-100 rotate-0 opacity-100'"
        />
        <PhX
          :size="24"
          class="col-start-1 row-start-1 transition-[opacity,rotate,scale] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          :class="open ? 'scale-100 rotate-0 opacity-100' : 'scale-75 -rotate-45 opacity-0'"
        />
      </button>
    </div>

    <div
      class="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden"
      :class="open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
    >
      <div class="overflow-hidden">
        <div
          id="mobile-menu"
          ref="menuRef"
          :inert="!open"
          :aria-hidden="!open"
          class="border-t border-hairline/10 bg-carvao px-5 pb-6 pt-2 transition-[opacity,translate] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          :class="open ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'"
        >
          <nav class="flex flex-col" aria-label="Navegação móvel">
            <a
              v-for="link in links"
              :key="link.href"
              :href="link.href"
              class="border-b border-hairline/8 py-3.5 text-base font-semibold text-off-white/85"
              @click="closeMenu"
            >
              {{ link.label }}
            </a>
          </nav>
          <div class="mt-5 flex items-center gap-3">
            <ThemeToggle />
            <WhatsAppButton class="flex-1" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
