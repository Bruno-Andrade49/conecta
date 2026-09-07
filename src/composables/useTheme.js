import { ref, watchEffect } from 'vue'

const STORAGE_KEY = 'conecta-theme'

function getInitialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // localStorage unavailable (private mode, blocked storage, etc.) — fall
    // through to the default below, same as any first-time visitor.
  }
  return 'dark'
}

// Module-level (not per-component) so every consumer of useTheme() shares
// the exact same state — the toggle in the navbar and any other reader stay
// in sync without needing a store library for one boolean.
const theme = ref(getInitialTheme())

watchEffect(() => {
  document.documentElement.setAttribute('data-theme', theme.value)
  try {
    localStorage.setItem(STORAGE_KEY, theme.value)
  } catch {
    // ignore — theme still applies for this page view, just won't persist
  }
})

export function useTheme() {
  function toggle() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }
  function setTheme(next) {
    if (next === 'dark' || next === 'light') theme.value = next
  }
  return { theme, toggle, setTheme }
}
