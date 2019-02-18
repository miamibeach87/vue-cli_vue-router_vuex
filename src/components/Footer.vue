<template>
  <footer :style="{backgroundColor: getFooterBgColor}">Super cool footer</footer>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    computed: {
      getFooterBgColor() {
        return this.$store.getters.getFooterColor;
      }
    }
  })
  export default class Footer extends Vue {
  }
</script>

<style scoped lang="scss">
  footer {
    width: 100%;
    background: black;
    color: #9c9c9c;
    padding: 1rem 0;
  }
</style>