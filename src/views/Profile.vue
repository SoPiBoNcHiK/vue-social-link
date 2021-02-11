<template>
        <div>
        <v-row class="text-left">
            <v-col cols="10">
                <h1 class="green--text text--darken-2">
                    <v-icon large color="green darken-2">mdi-account-outline</v-icon>
                    {{userData.name}}
                </h1>
            </v-col>
        </v-row>
        <v-row class="text-left">
            <v-col cols="2">
                <img v-bind:src="`https://randomuser.me/api/portraits/men/${$route.params.id}.jpg`" style="max-width: 100% cover">
            </v-col>
            <v-col cols="10" class="text-left">
                <p>
                    Веб-сайт: <a :href="'http://' + userData.website" target="_blank">{{userData.website}}</a>
                </p>
                <p>
                    E-mail: <a :href="'mailto:' + userData.email">{{userData.email}}</a>
                </p>
                <p>
                    Город: {{userData.address.city}}
                </p>
                <p>
                    Место работы: {{userData.company.name}}
                </p>
            </v-col>
        </v-row>
    <v-divider>
    <h2 class="my-8">Публикации</h2>
    </v-divider>
    <v-card
    class="mt-5"
    color="light-grey"
    max-width="1000"
    
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-comment-account
      </v-icon>
      <span class="title font-weight-light">Social link</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, est. Reiciendis soluta, quod ut impedit reprehenderit neque doloribus corrupti, eius sint illum, illo dignissimos totam deleniti aspernatur numquam magni porro?
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            v-bind:src="`https://randomuser.me/api/portraits/men/${$route.params.id}.jpg`"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{userData.name}}</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1">
            mdi-heart
          </v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">
            mdi-share-variant
          </v-icon>
          <span class="subheading">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
  <v-card
    class="mt-5"
    color="light-grey"
    max-width="1000"
    
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-comment-account
      </v-icon>
      <span class="title font-weight-light">Social link</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem architecto ipsam harum modi reprehenderit praesentium doloremque! Culpa, soluta autem quia esse quisquam nostrum velit recusandae, perferendis quidem maxime laborum rerum?
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            v-bind:src="`https://randomuser.me/api/portraits/men/${$route.params.id}.jpg`"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{userData.name}}</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1">
            mdi-heart
          </v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">
            mdi-share-variant
          </v-icon>
          <span class="subheading">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    data(){
        return  {
            userData: '',
            photo: ''
        }
    },
    methods: {
        getUserData(){
            this.axios.get(`http://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
                .then( (response)=>{
                    this.userData = response.data;
                } )
        },
    },
    mounted(){
        this.getUserData();
    },
    watch: {
        $route(){
            this.getUserData();
        }
    }
}
</script>