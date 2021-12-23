<template>
  <div>
    <h2 class="one">
      {{ message }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "vueCpn",
  data(){
    return {
      message: "123"
    }
  }
}
</script>

<style scoped>
  .one {
    color: green;
  }
</style>