<template>
  <v-card >
    <v-navigation-drawer
      permanent
      expand-on-hover
      app
      dark   

    >
    <v-list>    
      <v-list-item class="px-3 ">
        <v-list-item-avatar>
          <v-img src="https://i0.wp.com/useforcode.com/wp-content/uploads/2021/04/225-2254691_9kib-354x415-unnamed-mongodb-logo-svg.jpg?fit=820%2C454&ssl=1"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              CRUD con mongodb
            </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
        </v-list>

      <v-divider></v-divider>

      <v-list 
      nav
      dense >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link class="link" :to="`${ item.path }`"> 
              {{ item.title }}
              </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>

</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Usuarios', icon: 'mdi-account-group', path: '/listar' },
          { title: 'Crear Usuario', icon: 'mdi-account-plus-outline', path: '/crear' }
        ],
        mini: true,
      }
    },
  }
</script>

<style scoped>
.link{
  text-decoration:none;
  color: rgb(192, 214, 203);
}
</style>