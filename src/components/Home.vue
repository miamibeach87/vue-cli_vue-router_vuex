<template>
  <div class="hello">
    <h1>Welcome home!</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    data() {
      return {
        msg: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut consectetur
               consequuntur, libero nobis nulla obcaecati perferendis placeat porro quis quod sapiente velit voluptatem. Aliquam
               asperiores consectetur delectus ex magni.`
      }
    }
  })
  export default class Home extends Vue {
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
