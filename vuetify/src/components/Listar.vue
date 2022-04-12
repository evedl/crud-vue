<template>
  <div>
    <div>
      <Encabezado texto="Usuarios del sistema"/>
    </div>
    <div class="contenido">
    <div class="pa-4">
        <div>
            <v-data-table 
               :items-per-page="10" 
               :items="usuariosBD"
               :headers="headers"
               dark
               class="elevation 1"
            >

              <template #[`item.editar`]="{ item }">
                <v-btn color="indigo darken-1" fab small 
                @click="editarUsuario(item._id)">
                  <v-icon color="indigo lighten-4">
                    mdi-account-edit
                  </v-icon>
                </v-btn>
              </template>
              
              <template #[`item.borrar`]="{ item }">
                <v-btn 
                      color="red darken-4" 
                      fab small 
                      @click="borrarUsuario(item._id)">
                  <v-icon color="indigo lighten-4">
                    mdi-trash-can
                  </v-icon>
                </v-btn>
              </template>
            </v-data-table>
        <v-dialog
          v-model="dialog"
          dark          
          max-width="500px"
        >
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editarUser.nombre"
                      label="Nombre"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editarUser.apellidos"
                      label="Apellidos"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="editarUser.correo"
                      label="Correo Electronico"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="editarUsuario(editarUser)"
              >
                Guardar Cambios
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>             
        </div>
    </div>
    </div>
    </div>
</template>

<script>
import Encabezado from './Encabezado.vue'
export default {
    components:{
        Encabezado
    },
    data(){
        return{
            dialog: false,          
        usuariosBD: [],
            headers: [
                {text: 'ID', value: '_id', align: 'center', sortable: false},
                {text: 'NOMBRE', value: 'nombre', align: 'center', sortable: false},
                {text: 'APELLIDOS', value: 'apellidos', align: 'center', sortable: false},
                {text: 'CORREO', value: 'correo', align: 'center', sortable: false},
                {text: 'EDITAR', value: 'editar', align: 'center', sortable: false},
                {text: 'BORRAR', value: 'borrar', align: 'center', sortable: false},
            ],
            itemsBD: [],
            editarUser: []
           
        }
    },
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Editar Usuario'
      }
    },   
    watch: {
      dialog (val) {
        val || this.close()
      }
    },

  created(){
        this.consultarUsuarios()
    },
    methods: {
        consultarUsuarios(){
          this.axios.get("/buscarTodo")
          .then((response)=>{
            this.usuariosBD = response.data
          })
          .catch((e)=>{
            console.log('error'+e)
          })          
        },
        editarUsuario(item){
          console.log(item);
          this.dialog = true 
          this.axios.get(`/buscarParametro/${item}`)         
          .then(res=>{
            this.editarUser=res.data
          })
          this.axios.put(`/edit/${item._id}`, item)
          .then(res =>{
            this.$swal('succes!',
                        'Datos Actualizados',
                        'success');
            this.close();
            const index=this.usuariosBD.findIndex(n=>n._id===res.data._id) //comparar id para verificar
            this.usuariosBD[index].nombre = res.data.nombre;
            this.usuariosBD[index].apellidos = res.data.apellidos;
            this.usuariosBD[index].correo = res.data.correo;                        
          })
          .catch(e=>{
            console.log(e.response)
          })
      },
        borrarUsuario(id){
          console.log(id);
          this.axios.delete(`/eliminar/${id}`)
          
          .then((res)=>{
            //aviso de que se borro 
            //se instalo sweetalert
            this.$swal.fire({
              title: 'El usuario ha sido eliminado exitosamente',
              showClass: {
              popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })


            const index=this.usuariosBD.findIndex(item=>item.item_id===res.data._id)
            this.usuariosBD.splice(index,1);
            this.editarUsuario=this.usuariosBD.indexOf(item);
            this.editarUsuario=Object.assign({},item)
          }).catch(error => {
              console.log(error)
          });
        },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },        
        
    }
}
</script>

<style scoped>
.contenido{
  min-height: calc(100vh - 80px - 70px);
}
</style>