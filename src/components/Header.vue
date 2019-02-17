<template>
  <nav class="navbar is-fixed-top" :style="{backgroundColor: getHeaderBgColor}" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" :href="null" @click="toggleSidebar()">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/400px-Vue.js_Logo.svg.png" width="40" height="40">
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/users">Users</router-link>
        <router-link class="navbar-item" to="/settings">Settings</router-link>
      </div>

      <div class="navbar-end">
        <a class="navbar-item" @click="setDefaultState()">
          Clear store
        </a>

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
  import { mapActions } from 'vuex'

  @Component({
    methods: {
      ...mapActions([
        'toggleSidebar',
        'setDefaultState'
      ]),
    },
    computed: {
      getHeaderBgColor() {
        return this.$store.getters.getHeaderBgColor;
      }
    }
  })
  export default class Header extends Vue {
    constructor() {
      super();
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