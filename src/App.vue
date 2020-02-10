<template>
  <div id="app">
    <NavBar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
};
</script>
