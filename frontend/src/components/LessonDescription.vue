<template>
  <div class="description">
    <p>Here is just the description for this lesson</p>
    <p>{{ description }}</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    description: {
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>

<style scoped></style>
