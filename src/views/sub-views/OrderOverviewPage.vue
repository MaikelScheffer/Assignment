<template>
  <LastOrdersComponent :orders="orderHistory" />
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
    ...mapGetters(['orderHistory', 'customer'])
  }
};
</script>
