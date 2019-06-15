<template>
  <div class="mainwin">
    <div class="courseView">
      <div class="heading">
        <h3 class="title">Courses</h3>
        <button class="addcourse">
          <span class="folderIcon">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 32 32"
            >
              <title>folder-plus</title>
              <path d="M18 8l-4-4h-14v26h32v-22h-14zM22 22h-4v4h-4v-4h-4v-4h4v-4h4v4h4v4z"></path>
            </svg>
          </span>
          <span class="addingfolder">Add Folder</span>
        </button>
      </div>
      <div class="folderView">
        <folderView></folderView>
      </div>
    </div>
  </div>
</template>


<script>
import folderView from "./folderView";
import { mapActions } from "vuex";
export default {
  components: {
    folderView
  },
  methods: {
    ...mapActions([])
  }
};
</script>

<style scoped>
.mainwin {
  background-color: #525a65;
  height: 100vh;
  display: grid;
  grid-template-columns: 25% auto;
  color: aliceblue;
}
.heading {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
}
.addcourse {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px 25px;
  border-radius: 20px;
  border: none;
}
.addingfolder {
  padding-left: 10px;
}
.folderView {
  margin: 10px;
}
</style>
