<template>
  <aside class="sidebar menu" v-if="isOpen()">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li><a>Lorem ipsum.</a></li>
      <li><a>Lorem ipsum dolor.</a></li>
    </ul>
    <p class="menu-label">
      Lorem ipsum
    </p>
    <ul class="menu-list">
      <li><a>Team Settings</a></li>
      <li>
        <a>Lorem ipsum dolor</a>
        <ul>
          <li><a>Lorem ipsum.</a></li>
          <li><a>Lorem ipsum.</a></li>
          <li><a>Lorem ipsum.</a></li>
        </ul>
      </li>
      <li><a>Lorem ipsum.</a></li>
      <li><a>Lorem ipsum dolor sit.</a></li>
      <li><a>Lorem ipsum.</a></li>
    </ul>
    <p class="menu-label">
      Lorem ipsum
    </p>
    <ul class="menu-list">
      <li><a>Lorem ipsum</a></li>
      <li><a>Lorem ipsum</a></li>
      <li><a>Lorem ipsum</a></li>
    </ul>
  </aside>
</template>
<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component({})
  export default class Sidebar extends Vue {
    constructor() {
      super();
    }

    public isOpen() {
      return this.$store.getters.sidebarIsOpened;
    }

    public closeSidebar() {
      this.$store.commit("closeSidebar");
      console.log("after close", this.isOpen());
    }

    private mounted() {
      console.log("mounted", this.isOpen());
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
  }
</style>