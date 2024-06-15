<script setup lang="ts">
useHead({
  titleTemplate: 'Aliyev Ogtay-Contact',
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
})</script>

<template>
  <div>
    <Hero/>
    <div class="flex flex-wrap">
  <!-- Div avec image et texte à gauche -->
  <div class="w-full md:w-1/2 p-6 mt-14">
    <div class=" p-4 ">
      <h2 class="text-2xl sm:text-4xl font-montserrat text-teal-600 mb-6 text-center">Mes Contacts</h2>

      <!-- Contenu textuel -->
      <div class="richtext">
        <p class="text-2xl sm:text-3xl font-montserrat text-teal-600">N'hésitez pas à me contacter pour discuter de vos idées...</p>
        <hr class="border-2 border-teal-600 mt-2">
      </div>

      <!-- Numéros de contact -->
      <div id="contact-numbers" class="flex items-center mt-4">
<svg class="w-12 h-12 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 7l-4 3h8l-4-3zm0 6v-3l4 3h-8l4-3zm4-3v3l-4-3 4-3z"></path>
</svg>
<p class="ml-4 text-teal-600 text-3xl">07.83.50.12.07</p>
</div>

      <div id="email-contact" class="flex items-center mt-4">
    <svg class="w-12 h-12 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 7l-4 3h8l-4-3zm0 6v-3l4 3h-8l4-3zm4-3v3l-4-3 4-3z"></path>
    </svg>
    <p class="ml-4 text-teal-600 text-xl">ogtayaliyev@javadeveloper.pro</p>
  </div>
    </div>
  </div>

  <!-- ContactForm à droite -->
  <div class="w-full md:w-1/2 p-6">
    <ContactForm />
  </div>
</div>
    <Footer/>
  </div>
</template>

<style scoped></style>
