<template>
  <div class="workout">
    <div class="card shadow" style="width: 12rem;" @click="viewWorkout()">
      <i class="fas fa-dumbbell fa-5x"></i>
      <div class="card-body">
        <p class="card-text">Workout</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "workout",
  data() {
    return {};
  },
  computed: {},
  methods: {
    viewWorkout() {
      this.$router.push({
        name: "Workout"
      });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>