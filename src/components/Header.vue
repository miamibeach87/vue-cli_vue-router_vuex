<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" :href="null" @click="openSidebar()">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/400px-Vue.js_Logo.svg.png" width="40" height="40">
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/users">Users</router-link>
        <router-link class="navbar-item" to="/settings">Settings</router-link>
      </div>

      <div class="navbar-end">
        <a class="navbar-item">
          Sign up
        </a>
        <a class="navbar-item">
          Login
        </a>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({})
  export default class Header extends Vue {
    public openSidebar() {
      this.$store.commit('toggleSidebar');
    }
  }
</script>
<style scoped lang="scss">
.navbar {
  background: black;

  .navbar-item {
    color: #9c9c9c;

    &:hover {
      background: #4dba87;
      color: black;
    }
  }
}

li {
  color: white;
}
</style>