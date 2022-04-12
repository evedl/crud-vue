<template>
    <v-footer dark height="auto">
      <v-card flat tile class="#3E3E3E  white--text text-xs-center flex">
      <v-card-text class="text-center">
          Evelyn De Leon Hernandez 
        <v-spacer></v-spacer>
          Universidad Tecnologica de Salamanca
        <v-spacer></v-spacer>
          Tecnologias de la Informacion, Area Desarrollo de Software Multiplataforma
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="white--text text-center">
        {{ new Date().getFullYear() }} — <strong>UTS</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
   
  }
</script>