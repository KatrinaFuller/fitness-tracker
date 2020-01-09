<template>
  <div class="home">
    <navbar />
    <weight />
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "../components/navbar";
import weight from "../components/weight";

export default {
  name: "home",
  components: { navbar, weight }
};
</script>
