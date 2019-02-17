<template>
  <nav class="navbar is-fixed-top">
    <div class="navbar-item" @click="openSidebar()">Sidebar</div>
    <div class="container">
      <div class="navbar-brand navbar-item">Tehpostach</div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Головна</router-link>

          <router-link class="navbar-item" to="/contacts">Контакти</router-link>

          <router-link class="navbar-item" to="/market">Магазин</router-link>

          <router-link class="navbar-item" to="/price-list">Прайс листи</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Header extends Vue {
  public openSidebar() {
    this.$store.commit("toggleSidebar");
  }
}
</script>
<style scoped lang="scss">
.navbar {
  background: black;
}

li {
  color: $bg-classroom;
}
</style>