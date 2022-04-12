<template>
<div>
  <Encabezado texto="Registrar usuario"/>
  <div class="contenido">
          <div class="pa-2 ma-2">
            <v-form
                @submit.prevent="agregarusuario()"
                class="pa-10 border-10"
            >
              <div class="entrada">
                <v-text-field
                v-model="atributos.nombre"
                :counter="100"
                label="Nombre"
                required
                ></v-text-field>
                <v-text-field
                v-model="atributos.apellidos"
                :counter="100"
                label="Apellidos"
                required
                ></v-text-field>                

                <v-text-field
                v-model="atributos.correo"
                label="Correo electronico"
                required
                ></v-text-field>
              </div>

                <div class="text-center botones">
                <v-btn
                color="success"
                class="mr-4"
                type="submit"
                >
                <v-icon left>
                    mdi-content-save
                </v-icon>
                Guardar usuario
                </v-btn>

                <v-btn
                color="error"
                class="mr-4"
                @click="reset()"                
                >
                <v-icon left>
                    mdi-eraser-variant
                </v-icon>
                Borrar Datos
                </v-btn>
                </div>
            </v-form>

      </div>
  </div>
</div>
</template>

<script>
import Encabezado from '@/components/Encabezado';
  export default {
    components:{
      Encabezado
    },
        data() {
            return {
              Atributos:[],
                atributos: {
                   nombre: '',
                   apellidos: '',
                   correo: ''
                }
            }
        },
        methods: {
          agregarusuario(){
            console.log(this.atributos);
            //aviso que no deja registrar si no se llena el campo
            if(!this.atributos.nombre){
              this.$swal('Error!',
                          'Hace falta introducir el nombre',
                          'Error');
            }
            else if(!this.atributos.apellidos){
              this.$swal('Error!',
                          'Hace falta introducir los apellidos',
                          'Error');
            }  
            //si se llenaron los campos procede a hacer el registro                 
          else{
            this.axios
            .post("/nuevo-registro", this.atributos)
            .then((res)=>{
            
              this.Atributos.push(res.data);
              
              this.atributos.nombre="";
              this.atributos.apellidos="";
              this.atributos.correo="";
            this.$swal('succes!',
                        'Registro Exitoso',
                        'success');
            this.close();                
            })
            
            .catch((e)=>{
              console.log(e.response);
            })
            }
          },
      reset () {
              this.atributos.nombre="";
              this.atributos.apellidos="";
              this.atributos.correo="";        
      }          

        }
    }   

</script>

<style scoped>
.contenido{
  min-height: calc(100vh - 80px - 70px);
}
.titulo{
  padding-top: 20px;
  padding-bottom: 10px
}
.entrada{
  padding-left: 10%;
  width: 90%;
}
</style>