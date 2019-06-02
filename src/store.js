import Vue from "vue";
import Vuex from "vuex";
import { ipcRenderer } from "electron";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    files: []
  },

  getters: {
    getAllFiles: state => state.files
  },

  actions: {
    getFilesFromUser({ commit }) {
      ipcRenderer.send("GetFiles", "The button is clicked");
      ipcRenderer.on("GetFiles", (e, files) => {
        commit("AddFiles", files);
      });
    },
    closeAll({ commit }) {
      ipcRenderer.send("closeAll", this.state);
    }
  },
  mutations: {
    AddFiles: (state, files) => {
      state.files = files;
    }
  }
});
