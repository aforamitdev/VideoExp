<template>
  <div>
    <div v-for="i in 10">
      <folder></folder>
    </div>
  </div>
</template>


<script>
import folder from "./folder";
export default {
  name: "folderView",

  components: {
    folder
  }
};
</script>


<style scoped>
</style>

