<template>
  <div id="app">
    <NavBar :languages="languages" />

    <div class="container">
      <div class="columns">
        <div class="column">
          <PendingOrderStatus />
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import PendingOrderStatus from '@/components/PendingOrderStatus.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    PendingOrderStatus
  },
  data() {
    return {
      languages: [
        { flag: 'uk', language: 'en', title: 'English', currency: '£' },
        { flag: 'nl', language: 'nl-NL', title: 'Nederlands', currency: '€' }
      ]
    };
  },

  beforeCreate() {
    const language = window.navigator.userLanguage || window.navigator.language;
    this.$root.$i18n.locale = language;
  }
};
</script>
