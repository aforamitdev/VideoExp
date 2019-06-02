<template>
  <div>
    <button @click="getFilesFromUser">Get Files</button>
    <p>{{getAllFiles}}</p>

    <button @click="closeAll">Close</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions(["getFilesFromUser", "closeAll"])
  },
  computed: {
    ...mapGetters(["getAllFiles"])
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


