<template>
  <div class="weight">
    <div class="card shadow" style="width: 12rem;" @click="viewWeight()">
      <i class="fas fa-weight fa-5x"></i>
      <div class="card-body">
        <p class="card-text">Weight</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "weight",
  data() {
    return {};
  },
  computed: {},
  methods: {
    viewWeight() {
      this.$router.push({
        name: "Weight"
      });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>