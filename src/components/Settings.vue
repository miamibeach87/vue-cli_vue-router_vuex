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
      <li>
        Set default state:
        <button @click="setDefaultState">click</button>
      </li>
      <li>
        Set default state(async):
        <button @click="asyncSetDefault">click</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';

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
    },
  },
  methods: {
    ...mapActions([
        'toggleSidebar',
        'setDefaultState'
    ]),
    asyncSetDefault() {
      setTimeout(()=>{this.setDefaultState()}, 4000)
    }
  },
})
export default class Settings extends Vue {

  constructor() {
    super();
  }

  public setHeaderBgColor(event: any) {
    this.$store.dispatch('setHeaderBgColor', event.target.value);
  }

  public setMainBgColor(event: any) {
    this.$store.dispatch('setMainBgColor', event.target.value);
  }

  public setFooterBgColor(event: any) {
    this.$store.dispatch('setFooterColor', event.target.value);
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