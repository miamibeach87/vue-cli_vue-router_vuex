<template>
  <footer>Footer</footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
}
</script>

<style scoped lang="scss">
footer {
  width: 100%;
  background: black;
  color: #9c9c9c;
  padding: 2rem 0 2rem 0;
}
</style>