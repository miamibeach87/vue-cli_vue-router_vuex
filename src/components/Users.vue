<template>

</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component({})
  export default class Users extends Vue {
    constructor() {
      super();
    }

    private mounted() {
      console.log("mounted in users");
    }
  }
</script>

<style scoped lang="scss">

</style>