import Vue from "vue";
import Vuex from "vuex";
import { ipcRenderer } from "electron";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    files: [],
    parentFolder: null
  },

  // ! --------------------Getters--------------------  --------------------Getters--------------------  --------------------Getters--------------------

  getters: {
    getAllFiles: state => state.files,
    parentFolder: state => state.parentFolder,
    getState: state => state
  },

  // ! ---------------------actions---------------------- ---------------------actions----------------------  ---------------------actions----------------------

  actions: {
    getFilesFromUser({ commit }) {
      ipcRenderer.send("GetFiles", "The button is clicked");
      ipcRenderer.on("GetFiles", (e, files) => {
        commit("AddFiles", files);
      });
    },
    closeAll({ commit }) {
      ipcRenderer.send("closeAll", this.state);
    },
    getParentFolderContent({ commit }) {
      ipcRenderer.send("getParentFolder", "The button is clicked");

      ipcRenderer.on("getParentFolder", (err, folders) => {
        commit("ParentFolderContent", folders);
        console.log(folders);
      });
    },
    readStatefromJson({ commit }) {
      ipcRenderer.send("readStateFromJson", "get filr from json");
      console.log("reading executed");
      ipcRenderer.on("readStateFromJson", (e, store) => {
        console.log(store);
        commit("readStateFromJson", store);
      });
    }
  },

  // ! ------------------------ mutations------------------------- ------------------------ mutations------------------------- ------------------------ mutations-------------------------

  mutations: {
    AddFiles: (state, files) => {
      state.files = files;
    },
    ParentFolderContent: (state, folders) => {
      state.parentFolder = folders;
    },
    readStateFromJson: (state, store) => {
      state.parentFolder = store.parentFolder;
    }
  }
});
