import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
  },
  state:{
    idUsuario: null,
  },
  mutations: {
    setIdUsuario(state, payload){
      state.idUsuario = payload //recibe estado actual y un payload(nuevo estado ) y se le asigna  id seleccionado 
    }
  }
})

export default store
