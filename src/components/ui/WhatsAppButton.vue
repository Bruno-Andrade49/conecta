<script setup>
// The site's one recurring conversion action. Just the icon + label via
// PillButton — no extra animation riding on it.
import { PhWhatsappLogo } from '@phosphor-icons/vue'
import PillButton from './PillButton.vue'
import { WHATSAPP_URL } from '../../data/content'

defineProps({
  variant: { type: String, default: 'orange' },
})
</script>

<template>
  <PillButton :href="WHATSAPP_URL" external :variant="variant">
    <template #icon-left><PhWhatsappLogo :size="16" weight="fill" /></template>
    Chamar no WhatsApp
  </PillButton>
</template>
