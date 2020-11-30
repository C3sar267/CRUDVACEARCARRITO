import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: [],
    curso: {},
    carrito: []
  },

  mutations: {
    getCursosMutation(state, payload) {
      state.cursos = payload;
    },

    getCursoMutation(state, payload) {
      state.curso = payload;
    },

    addCarritoMutation(state, payload) {
      state.carrito.push(payload);
    },

    deleiteTareaMutation(state, payload){
      state.carrito = state.carrito.filter(item => item.id !== payload)
    },
    
    vacearCarritoMutation(state){
      state.carrito =[]
    },

  },

  actions: {
    getCursosAction({commit}) {
      fetch('http://my-json-server.typicode.com/carloscastillo369/cursosjson/cursos', {
        method: 'GET'
      })
        .then(res => {
          return res.json();
      })
        .then(data => {
          commit('getCursosMutation', data);
      })
    },

    getCursoAction({commit}, id) {
      fetch(`http://my-json-server.typicode.com/carloscastillo369/cursosjson/cursos/${id}`, {
        method: 'GET'
      })
        .then(res => {
          return res.json();
      })
        .then(data => {
          commit('getCursoMutation', data);
      })
    },

    addCarritoAction({commit, state}, curso){
      fetch(`http://my-json-server.typicode.com/carloscastillo369/cursosjson/cursos/${curso.id}`, {
        method: 'GET'
      })
        .then(res => {
          return res.json();
      })
        .then(data => {
          state.carrito.hasOwnProperty(curso.id)
            ? curso.cantidad = state.carrito[curso.id].cantidad + 1
            : curso.cantidad = 1
          commit('addCarritoMutation', data);
      })
    },

    addDeleiteActions({commit}, curso){

      console.log(curso)

      fetch(`http://my-json-server.typicode.com/carloscastillo369/cursosjson/cursos/${curso}`,
      
      {method: 'DELETE'})
      .then( ()=>{
          commit('deleiteTareaMutation', curso);
      })  
    },

    vacearCarritoActions({commit}){

      commit('vacearCarritoMutation');
    }


    
  },

  modules: {
  }
})
