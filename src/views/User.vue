<template>
    <v-card
    class="mx-auto mt-5"
    
    max-width="500px"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          {{name}}
        </div>
        <v-list-item-subtitle>{{city}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      >
      <img v-bind:src="`https://randomuser.me/api/portraits/men/${id}.jpg`">
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        link :to="`../user/${id}`" 
      >
        Profile
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>



export default {
    name: 'User',
    props: ['id','name','city'],
}
</script>