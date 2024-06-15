<script setup lang="ts">
useHead({
  titleTemplate: 'Aliyev Ogtay-Portfolio',
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { name: 'description', content: 'My portfolio.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>

<template>
  <div>
    <Hero/>
    <work/>
    <Footer/>
  </div>
</template>

<style scoped></style>
