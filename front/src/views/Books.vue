<template>
  <div>
    <div class="search">
      <SearchBar @searchTerm="onSearchTerm($event)" />
    </div>
    <div class="books">
      <BookLightView
        v-for="book of books"
        :key="book.tile"
        :book="book"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useBooksSearchService } from "@app/services";
import BookLightView from "../components/BookLightView.vue";
import SearchBar from "../components/SearchBar.vue";

export default defineComponent({
  name: "Books",
  components: {
    BookLightView,
    SearchBar,
  },
  setup() {
    const { getAll, search } = useBooksSearchService();
    let books = ref([]);

    onMounted(async () => {
      books.value = await getAll();
    });

    const onSearchTerm = async (searchTerm: string) => {
      if (searchTerm.length !== 0) {
        books.value = await search(searchTerm);
      } else {
        books.value = await getAll();
      }
    };

    return {
      books,
      onSearchTerm,
    };
  },
});
</script>

<style lang="scss" scoped>
.search {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  margin-left: 15%;
  margin-right: 15%;
}

.books {
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
</style>