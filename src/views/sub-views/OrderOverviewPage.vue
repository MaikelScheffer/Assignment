<template>
  <div class="custom__order-overview-page">
    <LastOrdersComponent :orders="orderHistory" :currency="selectedLanguage.currency" />
  </div>
</template>

<script>
// @ is an alias to /src
import LastOrdersComponent from '@/components/LastOrdersComponent.vue';

import { mapGetters } from 'vuex';

export default {
  name: 'OrderOverview',
  components: {
    LastOrdersComponent
  },
  computed: {
    ...mapGetters(['orderHistory', 'customer', 'selectedLanguage'])
  }
};
</script>
