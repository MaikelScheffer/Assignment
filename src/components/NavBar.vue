<template>
  <nav class="navbar custom__navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="../assets/logo.svg" />
        </a>
      </div>

      <div class="navbar-end custom__navbar__navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link is-arrowless">
            <i class="fas fa-globe"></i>
          </a>

          <div class="navbar-dropdown">
            <a
              v-for="lang in languages"
              :key="lang.flag"
              class="navbar-item"
              @click="changeLocale(lang.language)"
            >{{ lang.title }}</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: { languages: { type: Array, required: true } },
  methods: {
    changeLocale(locale) {
      console.log(locale);

      this.$root.$i18n.locale = locale;
    }
  }
};
</script>
