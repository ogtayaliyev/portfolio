<template>
    <footer class="footer bg-teal-600 text-white py-6">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div class="text-center md:text-left">
          <p>&copy; {{ currentYear }} My Company. All rights reserved.</p>
          <p>Made with ♥ by <a href="https://yourwebsite.com" class="underline">Ogtay Aliyev</a></p>
        </div>
        <div class="flex space-x-4 mt-4 md:mt-0">
        <a href="https://www.linkedin.com/in/ogtay-aliyev/" target="_blank" rel="noopener" aria-label="LinkedIn">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 2.12 6.1 1 7.48 1c1.37 0 2.5 1.12 2.5 2.5S8.85 6 7.48 6 4.98 4.88 4.98 3.5zM0 8.98v14h5v-14H0zm7.3 0v14h4.88v-7.68c0-2.1 3.43-2.28 3.43 0v7.68H20v-8.6c0-6.85-7.73-6.63-9.65-3.24V8.98H7.3z"/>
          </svg>
        </a>
        <a href="https://github.com/ogtayaliyev" target="_blank" rel="noopener" aria-label="GitHub">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.204.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.998.108-.775.418-1.305.76-1.606-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.123-.302-.536-1.515.117-3.158 0 0 1.008-.323 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.004.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.643.24 2.856.117 3.158.77.84 1.235 1.912 1.235 3.222 0 4.61-2.803 5.625-5.475 5.921.43.37.814 1.1.814 2.217v3.293c0 .32.192.694.799.576C20.565 21.795 24 17.297 24 12c0-6.628-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const currentYear = ref(new Date().getFullYear());
  </script>
  
  <style scoped>
  .footer {
    color: #f7fafc; /* Tailwind's gray-100 */
  }
  
  a {
    color: #63b3ed; /* Tailwind's blue-400 */
  }
  
  a:hover {
    color: #4299e1; /* Tailwind's blue-500 */
  }
  
  .container {
    width: 92%;
    max-width: 1600px;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (max-width:767px) {
   .container{padding-bottom: 4rem} ;
  }
  
  @media (min-width: 768px) {
    .container {
      padding-left: 4rem;
      padding-right: 3rem;
    }
  }
  
  @media (min-width: 1024px) {
    .container {
      padding-left: 9rem;
      padding-right: 9rem;
    }
  }
  </style>
  