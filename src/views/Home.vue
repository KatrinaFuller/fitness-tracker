<template>
  <div class="home">
    <navbar />
    <weight />
    <workout />
    <food />
    <water />
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "../components/navbar";
import weight from "../components/weight";
import workout from "../components/workout";
import food from "../components/food";
import water from "../components/water";

export default {
  name: "home",
  components: { navbar, weight, workout, food, water }
};
</script>
