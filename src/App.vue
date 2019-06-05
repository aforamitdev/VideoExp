<template>
  <div>
    <topbar></topbar>
    <MainWindow></MainWindow>
    <button @click="getFilesFromUser">Get Files</button>
    <p>{{getAllFiles}}</p>

    <button @click="closeAll">Close</button>
    <br>
    <button @click="getParentFolderContent">parentFolder</button>
    <ul>
      <li v-for="folder in parentFolder.children" :key="folder.path">
        {{folder.name}}
        <br>
        <b>path:</b>
        {{folder.path}}
        <button @click="listFiles">list files</button>
      </li>
    </ul>
    <div></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import topbar from "./components/TopbarControles";
import MainWindow from "./components/MainWindow";
export default {
  name: "App",
  components: { topbar, MainWindow },
  methods: {
    ...mapActions([
      "getFilesFromUser",
      "closeAll",
      "getParentFolderContent",
      "readStatefromJson"
    ]),
    listFiles: function() {}
  },
  computed: {
    ...mapGetters(["getAllFiles", "parentFolder", "getState"])
  },
  beforeMount() {
    this.readStatefromJson();
  }

  // data: function() {
  //   return {
  //     files: ""
  //   };
  // },
  // beforeCreate() {
  //   ipcRenderer.on("channel1", (e, files) => {
  //     this.files = files;
  //   });
  // },
  // methods: {
  //   clicked: function() {
  //     ipcRenderer.send("channel1", "The button is clicked");
  //   }
  // }
};

// l
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}
</style>


