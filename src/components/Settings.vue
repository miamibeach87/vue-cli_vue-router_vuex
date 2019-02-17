<template>
  
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component({})
  export default class Settings extends Vue {
    constructor() {
      super();
    }

    private mounted() {
      console.log("mounted in settings");
    }
  }
</script>

<style scoped lang="scss">

</style>