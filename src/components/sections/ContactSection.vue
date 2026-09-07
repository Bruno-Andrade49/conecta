<script setup>
import { ref, computed } from 'vue'
import { PhPhoneCall, PhEnvelopeSimple, PhInstagramLogo, PhPaperPlaneTilt } from '@phosphor-icons/vue'
import { CONTACT, whatsappWithMessage } from '../../data/content'

const name = ref('')
const message = ref('')

const canSubmit = computed(() => name.value.trim().length > 1 && message.value.trim().length > 4)

function handleSubmit() {
  if (!canSubmit.value) return
  const text = `Olá, Conecta! Meu nome é ${name.value.trim()}.\n\n${message.value.trim()}`
  window.open(whatsappWithMessage(text), '_blank', 'noopener')
}
</script>

<template>
  <section id="contato" class="relative overflow-hidden bg-laranja py-24 sm:py-32">
    <div
      class="absolute inset-0 opacity-90"
      style="background-image: repeating-radial-gradient(ellipse 140% 60% at 50% 130%, transparent 0 11px, rgba(0,0,0,0.09) 11px 13px)"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-5xl px-5 sm:px-8">
      <div class="text-center">
        <h2 class="text-display-xl font-black uppercase leading-[0.92] text-ink">Vamos conectar?</h2>
        <p class="mx-auto mt-4 max-w-[46ch] text-[1.02rem] font-semibold text-ink/80">
          Conta pra gente sobre a sua marca, seu evento ou sua ideia. Respondemos por WhatsApp em pouco tempo.
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12">
        <form
          novalidate
          class="rounded-clip bg-paper p-6 shadow-[0_24px_60px_-20px_rgba(20,20,20,0.45)] sm:p-8"
          @submit.prevent="handleSubmit"
        >
          <div class="grid gap-5">
            <div>
              <label for="contact-name" class="mb-1.5 block text-sm font-bold text-ink">Seu nome</label>
              <input
                id="contact-name"
                v-model="name"
                type="text"
                autocomplete="name"
                placeholder="Como podemos te chamar?"
                class="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-cinza focus-visible:border-laranja-dark focus-visible:outline-2 focus-visible:outline-laranja"
              />
            </div>
            <div>
              <label for="contact-message" class="mb-1.5 block text-sm font-bold text-ink">Sua mensagem</label>
              <textarea
                id="contact-message"
                v-model="message"
                rows="4"
                placeholder="Conte um pouco sobre o seu projeto ou evento"
                class="w-full resize-none rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-cinza focus-visible:border-laranja-dark focus-visible:outline-2 focus-visible:outline-laranja"
              />
              <p class="mt-1.5 text-xs text-cinza">Ao enviar, abrimos uma conversa no WhatsApp com essa mensagem pronta.</p>
            </div>
            <button
              type="submit"
              :disabled="!canSubmit"
              class="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-black uppercase tracking-wide text-paper transition-[translate,opacity] duration-300 enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Enviar mensagem
              <PhPaperPlaneTilt :size="16" weight="fill" />
            </button>
          </div>
        </form>

        <ul class="grid gap-3 text-ink">
          <li v-for="phone in CONTACT.phones" :key="phone.href">
            <a :href="phone.href" class="flex items-center gap-3 rounded-2xl bg-ink/8 px-5 py-4 font-bold transition-colors hover:bg-ink/14">
              <PhPhoneCall :size="20" weight="bold" />
              {{ phone.display }}
            </a>
          </li>
          <li>
            <a :href="`mailto:${CONTACT.email}`" class="flex items-center gap-3 rounded-2xl bg-ink/8 px-5 py-4 font-bold break-all transition-colors hover:bg-ink/14">
              <PhEnvelopeSimple :size="20" weight="bold" class="flex-none" />
              {{ CONTACT.email }}
            </a>
          </li>
          <li>
            <a :href="CONTACT.instagram.url" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 rounded-2xl bg-ink/8 px-5 py-4 font-bold transition-colors hover:bg-ink/14">
              <PhInstagramLogo :size="20" weight="bold" />
              {{ CONTACT.instagram.handle }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
