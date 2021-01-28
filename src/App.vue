<template>
  <v-app>
    <v-navigation-drawer
      v-model="nav"
      app
      color="green"
      dark
      expand-on-hover
      hide-overlay
      permanent
      right
    >
    <v-list
      nav
      shaped
      dense
    >
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/5.jpg">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            SocialLink
          </v-list-item-title>
          <v-list-item-subtitle>
            Кто-то там
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    </v-navigation-drawer>
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
