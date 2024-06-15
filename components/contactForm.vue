<template>
    <div class=" py-12 ">
        <div class="max-w-4xl mx-auto px-6 sm:px-8 py-8 bg-white shadow-2xl rounded-3xl shadow-teal-600 opacity-75">
        <h2 class="text-2xl sm:text-4xl font-montserrat text-teal-600 mb-6 text-center">Me Contacter</h2>
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Nom</label>
            <input type="text" v-model.trim="formData.name" id="name" name="name"
                   :class="{'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm': true, 'border-red-500': errors.name}"
                   required>
            <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" v-model.trim="formData.email" id="email" name="email"
                   :class="{'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm': true, 'border-red-500': errors.email}"
                   required>
            <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" v-model.trim="formData.message" name="message" rows="4"
                      :class="{'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm': true, 'border-red-500': errors.message}"
                      required></textarea>
            <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
          </div>
          <div class="flex justify-end">
            <button type="submit"
                    class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Envoyer
            </button>
          </div>
          <p v-if="status" :class="{'text-green-600': status === 'success', 'text-red-600': status === 'error'}"
             class="text-center mt-2">{{ statusMessage }}</p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        },
        errors: {},
        status: null,
        statusMessage: ''
      };
    },
    methods: {
      async submitForm() {
        this.errors = {}; // Reset errors
        try {
          // Validate form inputs
          this.validateForm();
  
          // If no errors, proceed to submit
          if (Object.keys(this.errors).length === 0) {
            const response = await this.$axios.post('/api/send-email', this.formData); // Example with Axios
            console.log(response.data);
            this.status = 'success';
            this.statusMessage = 'Votre message a été envoyé avec succès!';
            this.resetForm();
          }
        } catch (error) {
          console.error('Erreur lors de l\'envoi du message:', error);
          this.status = 'error';
          this.statusMessage = 'Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer plus tard.';
        }
      },
      validateForm() {
        if (!this.formData.name) {
          this.errors.name = 'Le nom est requis.';
        }
        if (!this.formData.email) {
          this.errors.email = 'L\'email est requis.';
        } else if (!this.validEmail(this.formData.email)) {
          this.errors.email = 'L\'email n\'est pas valide.';
        }
        if (!this.formData.message) {
          this.errors.message = 'Le message est requis.';
        }
      },
      validEmail(email) {
        // Basic email validation regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
      },
      resetForm() {
        this.formData.name = '';
        this.formData.email = '';
        this.formData.message = '';
      }
    }
  };
  </script>
  
  <style scoped>
  /* Ajoutez ici vos styles personnalisés spécifiques au composant */
  </style>
  