<template>
    <section id="timeline" class="bg-gray-100 py-12 mx-auto p-8">
      <h1 class="text-center text-4xl font-light mb-8 uppercase font-montserrat text-teal-300">PORTFOLIO</h1>
      <p class="text-center max-w-2xl mx-auto mb-10">
        Passionné par le développement web, j'ai créé des applications web performantes et intuitives. Spécialisé en Java-Spring Boot, JavaScript, React, et Vue.js, je suis constamment à la recherche de nouveaux défis qui me permettent de mettre en œuvre mes compétences en développement front-end et back-end.
      </p>
      <div class="demo-card-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        <div v-for="(step, index) in steps" :key="index" class="demo-card bg-white shadow-lg rounded-lg mb-8">
          <div class="head flex items-center bg-teal-600 text-white font-medium py-4 px-6 rounded-t-lg">
            <div class="number-box bg-black bg-opacity-20 p-3 rounded-full">
              <span class="text-white text-xl font-bold leading-none">{{ index + 1 < 10 ? '0' + (index + 1) : index + 1 }}</span>
            </div>
            <a :href="step.url" target="_blank" class="text-lg ml-4 uppercase hover:underline">{{ step.title }}</a>
          </div>
          <div class="body p-6">
            <p class="text-base leading-6 mb-4">{{ step.description }}</p>
            <img :src="step.image" :alt="step.title" class="w-full rounded-lg">
          </div>
        </div>
      </div>
    </section>
  </template>
  
  
  <script setup>
  const steps = [
    {
      title: 'Garage Associatif',
      description: 'Front End du Garage Associatif : Interface utilisateur en React JS utilisant Axios pour les requêtes API.',
      image: '/images/Header.png', // Ensure correct path
      url: 'https://github.com/ogtayaliyev/Garage-Associatif-Front-End'
    },
    {
      title: 'Reservation Entretien',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: '/images/backend.png',  // Ensure correct path
      url: 'https://github.com/ogtayaliyev/Garage-Associatif-Back-End'
    },
    {
      title: 'Quizz',
      description: 'Quiz avec Java : Développement d\'une application de quiz en utilisant Java-Spring Boot-MySQL',
      image: '/images/quizz.png',  // Ensure correct path
      url: 'https://github.com/ogtayaliyev/Quiz-Java-Spring-Boot-Mysql'
    },
    {
      title: 'CV Responsive',
      description: 'Projet CV Responsive : Conception d\'un CV interactif et adaptable avec HTML5 et CSS3.',
      image: '/images/cvresp.png',  // Ensure correct path
      url: 'https://github.com/ogtayaliyev/CV-Responsif'
    },
    {
      title: 'Maquettage',
      description: 'Maquettage avec Figma : Conception visuelle et prototypage interactif des interfaces.',
      image: '/images/197351.jpg' , // Ensure correct path
      url: 'https://github.com/yourusername/maquettage-figma'
    },
    {
      title: 'Base de Données',
      description: 'Création de l\'Environnement : Configuration de la base de données MySQL avec PhpMyAdmin pour la gestion.',
      image: '/images/bdd.jpg',  // Ensure correct path
      url: 'https://github.com/yourusername/maquettage-figma'
    }
  ];
  
  </script>
  
  <style scoped>
  .head {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  .number-box {
    width: 48px;
    height: 48px;
  }
  @media (min-width: 768px) {
    .body {
      min-height: 300px;
    }
  }
  </style>
  