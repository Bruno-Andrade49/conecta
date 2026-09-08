<script setup>
import AppNavbar from './components/layout/AppNavbar.vue'
import AppFooter from './components/layout/AppFooter.vue'
import BackToTopButton from './components/ui/BackToTopButton.vue'
import HeroSection from './components/sections/HeroSection.vue'
import RosterMarquee from './components/sections/RosterMarquee.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ManifestoSection from './components/sections/ManifestoSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import CommunitiesSection from './components/sections/CommunitiesSection.vue'
import CaseStudySection from './components/sections/CaseStudySection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>

<template>
  <AppNavbar />
  <main>
    <HeroSection />
    <RosterMarquee />
    <AboutSection />
    <ManifestoSection />
    <ServicesSection />
    <CommunitiesSection />
    <CaseStudySection />
    <ContactSection />
  </main>
  <AppFooter />
  <BackToTopButton />
</template>
