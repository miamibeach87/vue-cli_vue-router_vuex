<template>
  <div>
    <div v-if="user">
      <h2>User {{ userId }} raw info:</h2>
      <code v-if="user">
        {{JSON.stringify(user)}}
      </code>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  computed: {
    userId() {
      return this.$route.params.id;
    },
    user() {
      return this.$store.getters.getUserById(this.$route.params.id);
    },
  },
})
export default class UserProfile extends Vue {
  constructor() {
    super();
  }

  get users() {
    return this.$store.getters.getUsers;
  }
}
</script>

<style scoped lang="scss">
  code {
    color: black;
    font-size: 9px;
  }
</style>