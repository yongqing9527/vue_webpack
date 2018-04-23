<template>
    <div id="text">
        {{ text }}
    </div>
</template>

<script>
export default {
  data() {
      return {
          text: 'Hello World'
      }
  }
}
</script>

<style>
    #text {
        color: red;
    }
</style>

