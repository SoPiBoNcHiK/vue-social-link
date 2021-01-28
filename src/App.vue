<template>
  <v-app>
    <v-navigation-drawer
      v-model="nav"
      app
      absolute
      temporary
    ></v-navigation-drawer>
    <v-content app>
      <v-btn v-on:click="nav = !nav">Меню</v-btn>
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
