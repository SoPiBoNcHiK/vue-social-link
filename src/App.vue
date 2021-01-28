<template>
  <v-app>
    <v-navigation-drawer
      v-model="nav"
      app
      absolute
      temporary
    ></v-navigation-drawer>
    <v-content app class="px-12 py-3">
      <v-container fluid>
      <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    nav: false
  }),
};
</script>
