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
      <v-divider class="my-3"></v-divider>
      <v-list-item link to="/">
        <v-list-item-icon>
          <v-icon>mdi-home-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>Главная</v-list-item-content>
      </v-list-item>
      <v-list-item link to="/myprofile">
        <v-list-item-icon>
          <v-icon>mdi-account</v-icon>
        </v-list-item-icon>
        <v-list-item-content>Мой профиль</v-list-item-content>
      </v-list-item>
      <v-list-item link to="/users">
        <v-list-item-icon>
          <v-icon>mdi-account-multiple-plus</v-icon>
        </v-list-item-icon>
        <v-list-item-content>Найти друзей</v-list-item-content>
      </v-list-item>
      <v-list-item link to="/login">
        <v-list-item-icon>
          <v-icon>mdi-account-plus</v-icon>
        </v-list-item-icon>
        <v-list-item-content>Залогиниться</v-list-item-content>
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
