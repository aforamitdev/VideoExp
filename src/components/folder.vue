<template>
  <div class="folderStructure">
    <div class="folderIcon">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 32 32"
      >
        <title>folder-plus</title>
        <path
          style="fill:#F3E0E0;"
          d="M18 8l-4-4h-14v26h32v-22h-14zM22 22h-4v4h-4v-4h-4v-4h4v-4h4v4h4v4z"
        ></path>
      </svg>
    </div>
    <div class="folderName">name</div>
  </div>
</template>


<script>
export default {
  name: "folder"
};
</script>


<style scoped>
.folderStructure {
  display: grid;
  grid-template-columns: 30px auto;
  margin: 10px 0 10px 0;
  background-color: #5c6879;
}

.folderName {
  display: flex;
  align-items: center;
}
</style>

