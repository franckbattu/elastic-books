<template>
  <div class="book">
    <div class="image">
      <img :src="book.image_medium" :alt="book.title">
    </div>
    <div class="text">
      <h3 class="title">{{ book.title }}</h3>
      <p>Auteurs : {{ book.authors }}</p>
      <p>Année de publication : {{ book.original_publication_year }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Book } from '@app/models';

export default defineComponent({
  name: "BookLightView",
  props: {
    book: Object as PropType<Book>
  }
}) 
</script>

<style lang="scss">
  .book {
    border: 1px solid #CCC;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    border-radius: 4px;

    .image {
      width: 33%;
    }

    .text {
      width: 66%;
    }
  }
</style>