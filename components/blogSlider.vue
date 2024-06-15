<template>
  <section id="experience" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-teal-600 font-bold text-3xl mb-6 text-center md:text-left">EXPERIENCES - FORMATIONS</h2>
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 md:pr-8 mb-8">
          <div class="timeline-label">
            <h4 class="text-xl font-bold text-teal-600 mb-4">Domaine clé</h4>
            <p class="text-gray-600 mb-4">Front-end development avec design UI/UX, Développement back-end et
              Déploiement(CI/CD), Docker</p>
            <a href="https://www.linkedin.com/in/ogtay-aliyev/" target="_blank" rel="noopener noreferrer"
              class="button-group-li inline-flex items-center text-teal-600 hover:text-white hover:bg-teal-600 py-2 px-4 rounded-lg">
              <div class="text-timeline mr-2">View on LinkedIn</div>
              <div class="icon-li"><span class="fa fa-linkedin"></span></div>
            </a>
          </div>
          <Icon name="uil:react" color="teal" size="4rem" />
          <Icon name="uil:vuejs" color="teal" size="4rem" />
          <Icon name="uil:docker" color="teal" size="4rem" />
          <Icon name="uil:github" color="teal" size="4rem" />
          <Icon name="uil:css3-simple" color="teal" size="4rem" />
          <Icon name="uil:html5" color="teal" size="4rem" />
          <Icon name="uil:database" color="teal" size="4rem" />
          <Icon name="bx:bxl-java" color="teal" size="4rem" />
          <Icon name="bx:bxl-spring-boot" color="teal" size="4rem" />
          <Icon name="bx:bxl-javascript" color="teal" size="4rem" />
          <Icon name="bx:bxl-python" color="teal" size="4rem" />
        </div>
        <div class="w-full md:w-1/2">
          <div class="timeline">
            <div v-for="(experience, index) in experiences" :key="experience.year" class="timeline-year mb-8">
              <time class="block text-gray-400 font-bold mb-2">{{ experience.year }}</time>
              <div class="timeline-experience flex items-start">
                <span class="timeline-circle bg-gray-300 rounded-full h-3 w-3 mt-1 mr-2"></span>
                <div class="timeline-experience-img">
                  <img :src="experience.companyLogo" :alt="experience.company" class="rounded-full w-12 h-12">
                </div>
                <div class="timeline-experience-info ml-4">
                  <h5 class="text-teal-600 font-bold mb-1">{{ experience.company }}</h5>
                  <div class="timeline-role text-teal-600 mb-1">{{ experience.role }}</div>
                  <p class="text-gray-600">{{ experience.date }}</p>
                </div>
              </div>
              <!-- Connector line -->
              <div v-if="index > 0" class="connector-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>


const experiences = [
  {
    year: 2024,
    company: "WashaWeb",
    role: "Developpeur front-end",
    date: "Juin 2024 - Aout 2024",
    companyLogo: "/logo/circle-logo.svg"
  },
  {
    year: 2024,
    company: "Metz Numeric School",
    role: "Formation Concepteur Developpeur D'application",
    date: "janvier 2024 - Septembre 2024",
    companyLogo: "/logo/logo-mns.svg"
  },
  {
    year: 2023,
    company: "Metz Numeric School",
    role: "Internal Communication Technician",
    date: "March 2014 - May 2015",
    companyLogo: "/logo/logo-mns.svg"
  },
  {
    year: 2023,
    company: "Amazon",
    role: "SLAM Operateur & Support Lead",
    date: "Aout 2023 - present",
    companyLogo: "/logo/amazon.png"
  },
  {
    year: 2017,
    company: "Universite de Lorraine",
    role: "LEA-Langue Etrangères Appliquées",
    date: "Septembre 2015 - May 2017",
    companyLogo: "/logo/lea.png"
  },
  {
    year: 2007,
    company: "Universite de Azerbaidjan",
    role: "Mathematique et Informatique Bac +3",
    date: "Septembre 2003 - May 2007",
    companyLogo: ""
  }
];
</script>

<style scoped>
/* Responsive timeline styles */
.timeline-label h4,
.timeline-experience-info h5,
.timeline-role {
  font-size: 1.25rem;
}

@media (min-width: 768px) {

  .timeline-label h4,
  .timeline-experience-info h5 {
    font-size: 1.5rem;
  }

  .timeline-role {
    font-size: 1.25rem;
  }
}

@media (min-width: 1024px) {

  .timeline-label h4,
  .timeline-experience-info h5 {
    font-size: 1.75rem;
  }

  .timeline-role {
    font-size: 1.5rem;
  }
}
</style>