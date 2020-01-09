<template>
  <div class="water">
    <div class="card shadow" style="width: 12rem;" @click="viewWater()">
      <i class="fas fa-tint fa-5x"></i>
      <div class="card-body">
        <p class="card-text">Water</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "water",
  data() {
    return {};
  },
  computed: {},
  methods: {
    viewWater() {
      this.$router.push({
        name: "Water"
      });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>