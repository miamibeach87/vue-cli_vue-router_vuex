<template>
  <aside class="sidebar menu" v-if="isOpen()">
    <ul class="menu-list">
      <li>
        <router-link class="navbar-item" to="/">Home</router-link>
      </li>
      <li>
        <router-link class="navbar-item" to="/users">Users</router-link>
      </li>
      <li>
        <router-link class="navbar-item" to="/settings">Settings</router-link>
      </li>
    </ul>
    <a class="navbar-item" @click="setDefaultState()">
      Clear store
    </a>
  </aside>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {mapActions} from 'vuex';

@Component({
  methods: {
    ...mapActions([
      'setDefaultState',
    ]),
  },
})
export default class Sidebar extends Vue {
  constructor() {
    super();
  }

  public isOpen() {
    return this.$store.getters.sidebarIsOpened;
  }

  public closeSidebar() {
    this.$store.commit('closeSidebar');
    console.log('after close', this.isOpen());
  }

  private mounted() {
    console.log('mounted', this.isOpen());
  }
}
</script>
<style scoped lang="scss">
  aside {
    height: 100vh;
    position: fixed;
    z-index: 222;
    width: auto;
    background: black;
    padding-top: 10px;
    margin-top: 1px;
  }
</style>