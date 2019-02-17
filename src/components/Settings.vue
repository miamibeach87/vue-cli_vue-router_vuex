<template>
  <div>
    <ul>
      <li>
        Header background color:
        <select :value="getHeaderBgColor" @change="setHeaderBgColor($event)">
          <option disabled value="">Choose color</option>
          <option value="white">White</option>
          <option value="#4dba87">Vue green</option>
          <option value="black">Black</option>
        </select>
      </li>
      <li>
        Main background color:
        <select :value="getMainBgColor" @change="setMainBgColor($event)">
          <option disabled value="">Choose color</option>
          <option value="white">White</option>
          <option value="#4dba87">Vue green</option>
          <option value="black">Black</option>
        </select>
      </li>
      <li>
        Footer background color:
        <select :value="getFooterBgColor" @change="setFooterBgColor($event)">
          <option disabled value="">Choose color</option>
          <option value="white">White</option>
          <option value="#4dba87">Vue green</option>
          <option value="black">Black</option>
        </select>
      </li>
      <li>
        Toggle sidebar:
        <button @click="toggleSidebar">click</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { mapActions } from 'vuex'

  @Component({
    computed: {
      getHeaderBgColor() {
        return this.$store.getters.getHeaderBgColor;
      },
      getMainBgColor() {
        return this.$store.getters.getMainBgColor;
      },
      getFooterBgColor() {
        return this.$store.getters.getFooterColor;
      }
    },
    methods: {
      ...mapActions([
          'toggleSidebar'
      ])
    }
  })
  export default class Settings extends Vue {

    constructor() {
      super();
    }

    setHeaderBgColor(event: any) {
      this.$store.dispatch('setHeaderBgColor', event.target.value);
    }

    setMainBgColor(event: any) {
      this.$store.dispatch('setMainBgColor', event.target.value)
    }

    setFooterBgColor(event: any) {
      this.$store.dispatch('setFooterColor', event.target.value)
    }
  }
</script>

<style scoped lang="scss">
  ul {
    li {
      margin-top: 10px;
      text-align: right;
    }
  }
</style>