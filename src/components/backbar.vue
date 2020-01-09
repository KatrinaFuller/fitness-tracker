<template>
  <div class="backbar">
    <button type="button" class="btn btn-primary" @click="backButton">Back</button>
  </div>
</template>


<script>
export default {
  name: "backbar",
  data() {
    return {};
  },
  computed: {},
  methods: {
    backButton() {
      this.$store.dispatch("backButton");
    }
  },
  components: {}
};
</script>


<style scoped>
.backbar {
  background-color: wheat;
}
</style>