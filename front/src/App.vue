<template>
  <div class="app-container">
    <Navbar />
    <section class="content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
  },

  setup() {
  },
});
</script>

<style lang="scss">
.app-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  overflow-x: hidden;
  font-size: 100%;

  > .content {
    flex-grow: 1;
    margin-top: 50px;
  }
}
</style>