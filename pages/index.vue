<template>
  <div class="principal">
    <Hero />
    <BlogSlider />
    <Footer />
  </div>
</template>

<script setup>
useHead({
  titleTemplate: 'Aliyev Ogtay',
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

<style scoped>
.principal {
  background-color: #061A3A;
  color: #fff;
  min-height: 100vh;
}
</style>
