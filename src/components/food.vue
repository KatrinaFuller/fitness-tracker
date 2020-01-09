<template>
  <div class="food">
    <div class="card shadow" style="width: 12rem;" @click="viewFood()">
      <i class="fas fa-utensils fa-5x"></i>
      <div class="card-body">
        <p class="card-text">Food</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "food",
  data() {
    return {};
  },
  computed: {},
  methods: {
    viewFood() {
      this.$router.push({
        name: "Food"
      });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>