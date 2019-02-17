<template>
  <footer>Footer</footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
footer {
  width: 100%;
  background: black;
}
</style>