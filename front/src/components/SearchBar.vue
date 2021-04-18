<template>
  <div class="search">
    <input type="text" placeholder="Rechercher..." v-model.lazy="searchTerm"/>
  </div>
</template>

<script lang="ts">
import { watch, defineComponent, ref, Ref } from "vue";

export default defineComponent({
  name: "SearchBar",
  setup(props, { emit }) {

    let searchTerm = ref("");
    let awaitingSearch: Ref<Boolean> = ref(false);

    watch(searchTerm, (currentValue, oldValue) => {
      if (!awaitingSearch.value) {
        setTimeout(() => {
          awaitingSearch.value = false;
          emit('searchTerm', currentValue);
        }, 100);
      }
      awaitingSearch.value = true;
    })

    return {
      searchTerm
    }
  }
});
</script>

<style lang="scss" scoped>
.search {
  width: 100%;

  input {
    width: 100%;
    border: 3px solid #00b4cc;
    padding: 5px;
    height: 20px;
    border-radius: 5px;
    outline: none;
  }
}
</style>