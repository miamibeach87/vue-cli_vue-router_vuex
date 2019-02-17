<template>
  <div class="i-user">
    <figure class="image is-48x48">
      <img class="is-rounded" :src="avatar"  alt="avatar">
    </figure>
    <p class="user-info">
      {{first_name + ' ' + last_name}}
    </p>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  @Component({
    props: {
      first_name: String,
      last_name: String,
      avatar: String
    }
  })
  export default class UserListItem extends Vue {
    constructor() {
      super();
    }

    private mounted(){
      console.log("user list ", this.$props);
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
    border-radius: 28px;
    padding: 2px;
    margin-bottom: 10px;

    &-img {

    }
    &-info {

    }


  }
</style>