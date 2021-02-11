<template>
<v-container app >
    <v-row no-gutters>
      <v-col cols="2">
        <User
        v-for="(item, i) in users"
        v-bind:key="i"
        v-bind:id="item.id"
        v-bind:name="item.name"
        v-bind:city="item.address.city"
        >
          
        </User>
      </v-col>
    </v-row>
</v-container>
</template>

<script>
import User from '@/views/User.vue'
export default {
  name: 'Users',
  components: {User,},
  data(){
    return{
      users: []
    }
  },
  methods:{
    getNews() {
      this.axios({
        method: "GET",
        url:
          "http://jsonplaceholder.typicode.com/users",
      }).then((response) => {
        this.users = response.data;
      });
    },
  },
  mounted(){
    this.getNews();
  },
}
</script>