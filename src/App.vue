<template>
  <div id="app">
    <Sidebar></Sidebar>
    <Header></Header>
    <main class="main-content">
      <router-view/>
    </main>
    <Footer></Footer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Sidebar from "@/components/Sidebar.vue";
import "normalize.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

Vue.component("font-awesome-icon", FontAwesomeIcon as any);

@Component({
  components: {
    Header,
    Footer,
    Sidebar
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-content {
  display: flex;
  padding: 0 10vw 0 10vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 77px);
  margin-top: 51px;
  background: #4dba87;
  color: black;
}
</style>
