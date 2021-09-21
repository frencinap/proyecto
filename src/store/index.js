import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    juegos: [],
    opiniones: [],
  },
  getters: {
    dataJuegos(state) {
      return state.juegos;
    },
    arrayOpiniones(state) {
      return state.opiniones;
    },
  },
  mutations: {
    listaJuegos(state, data) {
      state.juegos = data.results;
    },
    manejoOpiniones(state, dataOpinion) {
      let id = 1;
      while (id !== dataOpinion.id) {
        id = Math.floor(Math.random() * 100 + 1);
      }
      dataOpinion.id = id;
      state.opiniones.push(dataOpinion);
    },
    borrarOpinion(state, index) {
      state.opiniones.splice(index, 1);
    },
    editarOpinion(state, editado) {
      let resultado = state.opiniones.find((valor) => valor.id === editado.id);
      if (resultado !== undefined) {
        resultado.nombre = editado.nombre;
        resultado.opinion = editado.opinion;
      } else {
        alert("No puedes editar");
      }
    },
  },
    actions: {
      async infoJuegos({ commit }) {
        let list = await fetch(
          "https://api.rawg.io/api/games?key=7f0a591883304deb8da54a41de1c749c"
        );
        let data = await list.json();
        console.log(data);
        commit("listaJuegos", data);
      },
      guardarOpinion({ commit }, dataOpinion) {
        commit("manejoOpiniones", dataOpinion);
      },
      eliminarOpinion({ commit }, index) {
        commit("borrarOpinion", index);
      },
      guardarEdicion({ commit }, editado) {
        commit("editarOpinion", editado);
      },
    },
    modules: {},
  },
);
