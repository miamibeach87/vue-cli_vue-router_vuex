<template>
  <div>
    contacts
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class Contacts extends Vue {
    @Prop() private msg!: string;
  }
</script>

<style scoped>
  div {
    border: 1px solid red;
  }
</style>