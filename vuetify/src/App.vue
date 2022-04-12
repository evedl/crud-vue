<template>
  <v-app>
    <Navegacion />
    <v-main>
      <router-view/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>

import Navegacion from'./components/Navegacion.vue'
import Footer from'./components/Footer.vue'

export default {
  
  name: 'App',
  components:{
    Navegacion,
    Footer
    
  },
  data: () => ({
    //
  }),
};
</script>
<style scoped>

</style>
