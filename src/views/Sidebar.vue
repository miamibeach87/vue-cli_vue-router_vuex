<template>
  <nav class="sidebar" v-if="isOpen()">
    <ul>
      <li>Насоси</li>
      <li>Генератори</li>
      <li>Двигуни</li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

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
.sidebar {
  height: 100vh;
  position: fixed;
  z-index: 222;
  width: auto;
  background: black;
}
</style>