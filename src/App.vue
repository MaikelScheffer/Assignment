<template>
  <div id="app">
    <NavBar :languages="languages" />

    <div class="container">
      <div class="columns">
        <div class="column">
          <PendingOrderStatus
            :restaurantName="pendingOrder.restaurantName"
            :orderId="pendingOrder.orderId"
          />
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
import store from '@/store';
import { TRY_CHANGE_LANGUAGE } from '@/store/actions';

export default {
  name: 'App',
  components: {
    NavBar,
    PendingOrderStatus
  },
  computed: {
    ...mapGetters(['pendingOrder', 'languages'])
  },
  async mounted() {
    const language = window.navigator.userLanguage || window.navigator.language;
    await store.dispatch(TRY_CHANGE_LANGUAGE, language);
  }
};
</script>
