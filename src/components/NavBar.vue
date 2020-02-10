<template>
  <nav class="navbar custom__navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://www.thuisbezorgd.nl/">
          <img src="../assets/logo.svg" />
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"></a>

          <div class="navbar-dropdown">
            <a v-for="lang in languages" :key="lang.flag" class="navbar-item">{{ lang.title }}</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: { languages: { type: Array, required: true } }
};
</script>
