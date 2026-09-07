import { ref, onMounted, onUnmounted } from 'vue'
import { usePreferredReducedMotion } from '@vueuse/core'

/**
 * Lightweight "reveal on scroll" composable.
 *
 * Deliberately avoids window scroll listeners and GSAP: a single
 * IntersectionObserver toggles a boolean once per element, and the
 * component itself drives a CSS transition on transform/opacity only
 * (compositor-friendly, no layout thrash). This is the right tool for
 * "fade up when entering the viewport" — GSAP/ScrollTrigger is reserved
 * for the two spots that actually need pinning or scrubbing.
 *
 * @param {object} [opts]
 * @param {number} [opts.threshold=0.2]
 * @param {string} [opts.rootMargin='0px 0px -10% 0px']
 */
export function useReveal(opts = {}) {
  const { threshold = 0.2, rootMargin = '0px 0px -10% 0px' } = opts
  const target = ref(null)
  const visible = ref(false)
  const reducedMotion = usePreferredReducedMotion()

  let observer

  onMounted(() => {
    // Respect the user's OS-level motion preference: skip the observed
    // fade entirely and just show the content.
    if (reducedMotion.value === 'reduce') {
      visible.value = true
      return
    }
    if (!target.value) return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true
          observer?.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(target.value)
  })

  onUnmounted(() => observer?.disconnect())

  return { target, visible }
}
