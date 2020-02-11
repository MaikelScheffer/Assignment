<template>
  <div id="app">
    <NavBar :languages="languages" />

    <div class="container">
      <div class="columns">
        <div class="column">
          <PendingOrderStatus :order="recentOrder" orderId="A123" />
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
import { mapGetters } from 'vuex';

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
  computed: {
    recentOrder() {
      return this.pendingOrders[0];
    },
    ...mapGetters(['pendingOrders'])
  },
  mounted() {
    setLanguageToBrowserDefault(this);
    setFakeCustomerIdForDemoPurposes(this);
  }
};

function setLanguageToBrowserDefault(x) {
  const language = window.navigator.userLanguage || window.navigator.language;
  x.$root.$i18n.locale = language;
}

function setFakeCustomerIdForDemoPurposes(x) {
  // x.$router.push({ name: 'profile', params: { userId: '123' } });
}
</script>
