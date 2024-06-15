<template>
  <nav 
      class="z-20 w-full h-24 bg-teal-600 fixed bottom-0 duration-150 ease-in
      md:bottom-1/2 md:right-0 md:w-24 md:h-80 md:rounded-l-[3rem] md:translate-y-1/2
      lg:-translate-y-[3.25rem] lg:bottom-auto lg:top-0 lg:w-1/2 lg:rounded-tl-none lg:h-24 lg:rounded-bl-full lg:hover:translate-y-0"
  >
      <!-- Flex Container w/ nav buttons -->
      <div
          class="absolute left-0 right-0 bottom-[1rem] flex flex-row space-x-[min(8.5vw,2rem)] space-y-8 items-end justify-center
          md:flex-col  md:left-auto md:right-3 md:bottom-10
          lg:flex-row lg:bottom-5 lg:right-24"
      >
          <!-- Nav Icon 1 ( portfolio ) -->
          <NuxtLink
              @click="scrollToTop()"
              to="/portfolio"
              class="w-16 h-16 flex flex-col items-center justify-end group"
          >
              <!-- Icon -->
              <svg
                  class="fill-cr-gray group-hover:fill-cr-pink"
                  id="portfolio" xmlns="http://www.w3.org/2000/svg"
                  width="34" height="16.98"
                  viewBox="0 0 34 16.98"
              >
                      <rect x="15.08" y=".1" width="3.84" height="16.43" rx=".68" ry=".68" transform="translate(1.99 -3.21) rotate(11.47)"/>
                      <path d="M5.63,9.15l4.93,4.93c.25,.25,.25,.67,0,.92l-1.8,1.79c-.25,.25-.66,.25-.92,0L.19,9.15c-.25-.25-.25-.67,0-.92L8.21,.21c.25-.25,.67-.25,.92,0l1.8,1.8c.25,.25,.25,.67,0,.92l-5.3,5.31c-.25,.25-.25,.67,0,.92Z"/>
                      <path d="M28.37,9.15l-4.93,4.93c-.25,.25-.25,.67,0,.92l1.8,1.79c.25,.25,.66,.25,.92,0l7.64-7.64c.25-.25,.25-.67,0-.92L25.79,.21c-.25-.25-.67-.25-.92,0l-1.8,1.8c-.25,.25-.25,.67,0,.92l5.3,5.31c.25,.25,.25,.67,0,.92Z"/>
              </svg>
              <!-- Link Label -->
              <p
                  class="relative font-montserrat text-cr-light uppercase text-[min(4.2vw,1rem)] leading-none pt-4 font-bold group-hover:text-cr-pink"
              
                  >
                  portfolio
              </p>
          </NuxtLink>
          <!-- Nav Icon 2 ( home ) -->
          <NuxtLink
              @click="scrollToTop()"
              to="/"
              class="w-16 h-16 flex flex-col items-center justify-end group"
          >
              <!-- Icon -->
              <svg 
                  class="fill-cr-gray group-hover:fill-cr-cyan"
                  id="home" xmlns="http://www.w3.org/2000/svg" width="18" height="29" viewBox="0 0 18 29">
                  <path d="M4,14H14c2.21,0,4,1.79,4,4v11H0v-11c0-2.21,1.79-4,4-4Z"/>
                  <circle cx="9" cy="6" r="6"/>
              </svg>
              <!-- Link Label -->
              <p
                  class="relative font-montserrat text-cr-light uppercase text-[min(4.2vw,1rem)] leading-none pt-4 font-bold group-hover:text-cr-cyan"
              >
                  home
              </p>
          </NuxtLink>
          <!-- Nav Icon 3 ( Contact ) -->
          <NuxtLink
              @click="scrollToTop()"
              to="/contact"
              class="w-16 h-16 flex flex-col items-center justify-end group"
          >
              <!-- Icon -->
              <svg
                  class=" fill-cr-gray group-hover:fill-cr-gold"
                  id="contact" xmlns="http://www.w3.org/2000/svg" width="35" height="30.55" 
                  viewBox="0 0 35 30.55">
                  <circle cx="10.5" cy="14.5" r="2.5"/>
                  <circle cx="18" cy="14.5" r="2.5"/>
                  <circle cx="25.5" cy="14.5" r="2.5"/>
                  <path d="M32.83,30.55l-8.63-3.14c-2.14,.72-4.39,1.09-6.7,1.09C7.85,28.5,0,22.11,0,14.25S7.85,0,17.5,0s17.5,6.39,17.5,14.25c0,3.17-1.3,6.26-3.68,8.75l1.51,7.55Zm-8.62-5.26l5.96,2.17-1.02-5.12,.39-.38c2.23-2.17,3.46-4.91,3.46-7.71,0-6.75-6.95-12.25-15.5-12.25S2,7.5,2,14.25s6.95,12.25,15.5,12.25c2.2,0,4.35-.37,6.37-1.09l.34-.12Z"/>
              </svg>
              <!-- Link Label -->
              <p
                  class="relative font-montserrat text-cr-light uppercase text-[min(4.2vw,1rem)] leading-none pt-4 font-bold group-hover:text-cr-gold"
              >
                  co<span class="alt-char">n</span>tact
              </p>
          </NuxtLink>
      </div>
  </nav>
</template>

<script>
  export default {
      methods: {
          scrollToTop() {
              window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
              });
          },
      }
  }
</script>

<style scoped>
  a.router-link-exact-active #home {
      fill: #00EAD0;
  }

  a.router-link-exact-active #portfolio {
      fill: #C500C5;
  }

  a.router-link-exact-active #contact {
      fill: #EEAB00;
  }

  @media screen and (min-width: 1080px) {
      a.router-link-exact-active p::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 4px;
          background-color: #F3F7FF;
          left: 0;
          bottom: 0;
          transform: translateY(10px);
      }
  }

</style>