<template>
  <div class="i-user" @click="$router.push({name: 'profile', params: { id: id }})">
    <figure class="image is-48x48">
      <img class="is-rounded" :src="avatar" alt="avatar">
    </figure>
    <p class="user-info">
      {{first_name + ' ' + last_name}}
    </p>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: {
    first_name: String,
    last_name: String,
    avatar: String,
    id: Number,
  },
})
export default class UserListItem extends Vue {
  constructor() {
    super();
  }
}
</script>

<style scoped lang="scss">
  .i-user {
    box-sizing: border-box;
    border: 1px solid black;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-radius: 4px;
    padding: 2px;
    margin-bottom: 10px;
    cursor: pointer;
    max-width: 164px;
    margin-left: auto;
    margin-right: auto;
    &-img {

    }

    &-info {
      color: black;


    }
  }
</style>