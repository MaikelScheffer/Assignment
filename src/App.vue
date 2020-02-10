<template>
  <div id="app">
    <NavBar />

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
  }
};
</script>
