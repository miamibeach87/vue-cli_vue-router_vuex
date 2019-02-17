<template>
  <section>
    <div v-for="(item, index) in users">
      <UserListItem  :first_name="item.first_name"
                     :last_name="item.last_name"
                     :avatar="item.avatar">
      </UserListItem>
    </div>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import axios from 'axios';
  import UserListItem from '@/components/UserListItem.vue';

  @Component({
    components: {
      UserListItem,
    }
  })
  export default class Users extends Vue {
    constructor() {
      super();
    }

    get users() {
      return this.$store.getters.getUsers;
    }

    private mounted() {
      console.log('Im mounded and I will call BE');
      axios
          .get('https://reqres.in/api/users?page=1')
          .then((response) => {
            console.log(response.data.data);
            this.$store.dispatch('setUsers', response.data.data)
          })
          .catch(error => console.log(error));
    }
  }
</script>

<style scoped lang="scss">

</style>