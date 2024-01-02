<template>
  <div>
    <a
      href="https://vitejs.dev"
      target="_blank"
    >
      <img
        src="/vite.svg"
        class="logo"
        alt="Vite logo"
      >
    </a>
  </div>
  <div>Hello World</div>
  <Button label="Test" />
  <div v-if="loading">
    Loading...
  </div>
  <div v-if="error">
    Error: {{ error }}
  </div>
  <div v-if="data">
    <h2>API Call Result:</h2>
    <p>{{ data.updated }}</p>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import axios from 'axios';

const loading = ref( true );
const data = ref( null );
const error = ref( null );

axios.get('https://storage.googleapis.com/edwmurph-public/public-stats.json')
  .then( ( response ) => {
    loading.value = false;
    data.value = response.data;
  })
  .catch( ( err ) => {
    console.log( err );
    loading.value = false;
    error.value = err;
  });
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
